import { useState, useEffect, useContext } from "react";
import AuthContext from "../../contexts/authContext";

const API_BASE_URL = "http://localhost:8000";

export default function GameList() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/games`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token.token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch games: ${response.statusText}`);
        }

        const data = await response.json();
        setGames(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) {
    return <div className="loading">Loading games...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (games.length === 0) {
    return <div className="empty">No games found.</div>;
  }

  return (
    <div className="game-list">
      <h1>Games</h1>
      <div className="game-grid">
        {games.map((game) => (
          <div key={game.id} className="game-card">
            <div className="game-card-header">
              <h2>{game.title}</h2>
              <span className="release-year">{game.release_year}</span>
            </div>

            <p className="description">{game.description}</p>

            {game.categories.length > 0 && (
              <div className="categories">
                {game.categories.map((category) => (
                  <span key={category.id} className="category-badge">
                    {category.name}
                  </span>
                ))}
              </div>
            )}

            <div className="game-meta">
              <span>👥 {game.player_count} players</span>
              <span>⏱ {game.completion_hours}h to complete</span>
              <span>🔞 Age {game.recommended_age}+</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
