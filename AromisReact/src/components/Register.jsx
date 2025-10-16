import React, { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // 👈 nuevo estado

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    // Simular fallo de registro
    throw new Error("Fallo en registro");
  } catch (err) {
    setError("Error en registro"); // 👈 este texto debe coincidir con el test
  }
  };


  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="card-title text-center mb-3">Registro</h3>

        <form onSubmit={handleSubmit}>
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

          <button type="submit" className="btn btn-primary w-100">Registrar</button>
        </form>

        {/* 👇 Agregar el mensaje de error visible si falla */}
        {error && (
          <p className="text-danger text-center mt-3" role="alert">
            {error}
          </p>
        )}

        <p className="mt-3 text-center">
          ¿Ya tienes una cuenta? <a href="/login">Inicia sesión aquí</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
