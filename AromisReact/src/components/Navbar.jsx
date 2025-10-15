import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  // ESTILOS PARA NAVBAR
  const styles = `
    .navbar-custom {
      background-color: #f8f9fa !important;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .navbar-custom .navbar-brand {
      display: flex;
      align-items: center;
      font-weight: bold;
      font-size: 1.5rem;
      color: #333 !important;
      text-decoration: none;
    }

    .navbar-custom .navbar-logo {
      height: 40px;
      margin-right: 10px;
      object-fit: contain;
    }

    .navbar-custom .nav-link {
      color: #555 !important;
      font-weight: 500;
      margin: 0 10px;
      transition: color 0.3s ease;
    }

    .navbar-custom .nav-link:hover {
      color: #2289c0 !important;
    }

    .navbar-custom .navbar-toggler {
      border: none;
      padding: 4px 8px;
    }

    .navbar-custom .navbar-toggler:focus {
      box-shadow: none;
    }

    .navbar-custom .navbar-toggler-icon {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.7%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    }
  `;

  // Inyectar estilos en el documento
  React.useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img 
            src="/img/Captura de pantalla 2025-09-04 121604.png" 
            alt="Aromis Logo" 
            className="navbar-logo" 
          />
          Aromis
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalogo">Catálogo</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/perfil">Mi Perfil</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/carrito">🛒 Carrito</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;