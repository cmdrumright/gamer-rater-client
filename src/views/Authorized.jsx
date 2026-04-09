import { Navigate, Outlet } from "react-router-dom";
import { NavBar } from "../components/nav/Navbar";

export const Authorized = () => {
  if (localStorage.getItem("gamer_token")) {
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
