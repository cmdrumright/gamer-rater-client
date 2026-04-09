import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Authorized } from "./Authorized";
import { Login } from "../components/auth/Login.jsx";
import { Register } from "../components/auth/Register.jsx";

export const ApplicationViews = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Authorized />}>
          <Route path="/" element={<>HOME</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
