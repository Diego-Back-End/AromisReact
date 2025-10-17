import { StrictMode } from "react"; 
//  StrictMode ayuda a React a detectar errores y malas prácticas durante el desarrollo

import { createRoot } from "react-dom/client"; 
//  Permite renderizar la app en el DOM (en el HTML) usando React 18+

import App from "./App.jsx"; 
//  Componente principal de la aplicación (toda la app está aquí)

import { BrowserRouter } from "react-router-dom"; 
// Permite usar rutas en toda la app 

import { AuthProvider } from "./context/AuthContext.jsx"; 
//  Proporciona contexto de autenticación a toda la app (login, registro, perfil)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider> 
        <App /> 
        {/* 🔹 Aquí se monta toda la app dentro del router y el contexto de usuario */}
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
