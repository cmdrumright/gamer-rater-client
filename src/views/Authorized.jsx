import { Navigate, Outlet } from "react-router-dom";
import { NavBar } from "../components/nav/Navbar";
import { useContext } from "react";
import AuthContext from "../contexts/authContext";

export const Authorized = () => {
  const { token } = useContext(AuthContext);
  if (token) {
    return (
      <>
        <NavBar />
        <main className="p-4">
          <Outlet />
        </main>
      </>
    );
  }
  return <Navigate to="/login" replace />;
};
