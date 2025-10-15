import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx"; // 👈 Importante

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider> {/* 👈 Envuelve toda tu app con el contexto */}
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
