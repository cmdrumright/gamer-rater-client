import { createContext, useEffect, useState } from "react";

// Create a context for theme
const AuthContext = createContext();

// Theme provider component
export function AuthProvider({ children }) {
  const [token, setTokenState] = useState(
    JSON.parse(localStorage.getItem("auth_token")),
  );

  const setToken = (newToken) => {
    localStorage.setItem("auth_token", newToken);
    setTokenState(newToken);
  };

  const value = {
    token,
    setToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;
