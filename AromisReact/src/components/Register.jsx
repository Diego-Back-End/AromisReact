import React, { useState } from "react";

// Componente de registro de usuarios
function Register() {
  // Estados para guardar los valores de los campos
  const [email, setEmail] = useState("");       // Guarda el correo
  const [user, setUser] = useState("");         // Guarda el nombre de usuario
  const [password, setPassword] = useState(""); // Guarda la contraseña
  const [error, setError] = useState("");       // Guarda mensaje de error

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que se recargue la página
    try {
      // Aquí normalmente iría la lógica para registrar al usuario
      // Por ahora simulamos un error de registro
      throw new Error("Fallo en registro");
    } catch (err) {
      setError("Error en registro"); // Muestra mensaje de error
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="card-title text-center mb-3">Registro</h3>

        <form onSubmit={handleSubmit}>
          {/* Campo correo */}
          <div className="mb-3">
            <label className="form-label" htmlFor="email">Correo electrónico</label>
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="usuario@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Campo nombre de usuario */}
          <div className="mb-3">
            <label className="form-label" htmlFor="user">Nombre Usuario</label>
            <input
              id="user"
              type="text"
              className="form-control"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
            />
          </div>

          {/* Campo contraseña */}
          <div className="mb-3">
            <label className="form-label" htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              className="form-control"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Botón de registro */}
          <button type="submit" className="btn btn-primary w-100">Registrar</button>
        </form>

        {/* Mensaje de error si hay */}
        {error && (
          <p className="text-danger text-center mt-3" role="alert">
            {error}
          </p>
        )}

        {/* Link para ir al login */}
        <p className="mt-3 text-center">
          ¿Ya tienes una cuenta? <a href="/login">Inicia sesión aquí</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
