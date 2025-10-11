import React from "react";

const Login = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="card-title text-center mb-3">Iniciar Sesión</h3>

        <form id="loginForm">
          {/* Campo de correo */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="usuario@ejemplo.com"
              required
            />
          </div>

          {/* Campo de contraseña */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="********"
              required
            />
          </div>

          {/* Checkbox */}
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">
              Recordarme
            </label>
          </div>

          {/* Botón login */}
          <button type="submit" className="btn btn-primary w-100">
            Iniciar Sesión
          </button>
        </form>

        <p className="mt-3 text-center">
          ¿No tienes cuenta? <a href="#">Regístrate aquí</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
