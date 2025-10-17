// Importamos lo necesario de React y otras partes del proyecto
import { useState } from "react";           // Para manejar datos que cambian (como email o contraseña)
import { useAuth } from "../context/AuthContext"; // Para usar la función de login que creamos en el contexto
import { useNavigate } from "react-router-dom";   // Para movernos a otra página después de iniciar sesión

// Creamos el componente Login
const Login = () => {
  // Guardamos lo que el usuario escribe y si hay errores
  const [email, setEmail] = useState("");        // Guarda el correo
  const [password, setPassword] = useState("");  // Guarda la contraseña
  const [error, setError] = useState("");        // Guarda un mensaje de error si los datos son incorrectos

  const { login } = useAuth();   // Usamos la función de login del contexto
  const navigate = useNavigate(); // Nos permite redirigir al usuario a otra página

  // Esta función se ejecuta cuando el usuario presiona "Iniciar sesión"
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    const result = login(email, password); // Llamamos a la función de login con los datos ingresados

    // Si el login falla, mostramos el error
    if (!result.success) {
      setError(result.message);
    } else {
      // Si es correcto, enviamos al usuario a la página de perfil
      navigate("/perfil");
    }
  };

  // Todo lo que está dentro del return es lo que se muestra en pantalla
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      {/* Tarjeta del formulario */}
      <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="card-title text-center mb-3">Iniciar Sesión</h3>

        {/* Formulario para iniciar sesión */}
        <form onSubmit={handleSubmit}>
          {/* Si hay error, se muestra en una alerta roja */}
          {error && <div className="alert alert-danger">{error}</div>}

          {/* Campo para el correo */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo electrónico</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="usuario@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Guarda lo que el usuario escribe
              required
            />
          </div>

          {/* Campo para la contraseña */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Guarda la contraseña escrita
              required
            />
          </div>

          {/* Botón para enviar el formulario */}
          <button type="submit" className="btn btn-primary w-100">
            Iniciar Sesión
          </button>
        </form>

        {/* Enlace para ir al registro si no tiene cuenta */}
        <p className="mt-3 text-center">
          ¿No tienes cuenta? <a href="/register">Regístrate aquí</a>
        </p>
      </div>
    </div>
  );
};

// Exportamos el componente para poder usarlo en otras partes del proyecto
export default Login;
