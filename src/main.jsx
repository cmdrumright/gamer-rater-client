import React from "react";
import ReactDOM from "react-dom/client";
import { ApplicationViews } from "./views/ApplicationViews";
import "./index.css";
import { AuthProvider } from "./contexts/authContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ApplicationViews />,
  </AuthProvider>,
);
