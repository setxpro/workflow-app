import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./contexts/auth";
import GetThemeProvider from "./contexts/Theme/GetThemeContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
      <Router>
        <GetThemeProvider>
            <AuthProvider>
              <App />
            </AuthProvider>
        </GetThemeProvider>
      </Router>
  </React.StrictMode>
);
