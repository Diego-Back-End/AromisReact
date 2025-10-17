import { createContext, useContext, useState, useEffect } from "react";

// Creamos el contexto de autenticación
const AuthContext = createContext();

// Componente que envuelve toda la app para dar acceso al usuario y funciones
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado para guardar al usuario

  // Al iniciar la app, cargamos el usuario guardado en el navegador
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // Función para registrar usuario
  const register = (email, username, password) => {
    // Validaciones simples
    if (!email || !username || !password) {
      return { success: false, message: "Todos los campos son obligatorios" };
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return { success: false, message: "Correo no válido" };
    }

    if (password.length < 6) {
      return { success: false, message: "La contraseña debe tener al menos 6 caracteres" };
    }

    // Guardamos el usuario en localStorage y en el estado
    const newUser = { email, username, password };
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
    return { success: true, message: "Usuario registrado correctamente" };
  };

  // Función para iniciar sesión
  const login = (email, password) => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (!savedUser) return { success: false, message: "No hay usuarios registrados" };

    if (email === savedUser.email && password === savedUser.password) {
      setUser(savedUser);
      return { success: true, message: "Inicio de sesión exitoso" };
    }

    return { success: false, message: "Correo o contraseña incorrectos" };
  };

  // Función para cerrar sesión
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  // Compartimos la info y funciones con toda la app
  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar la info del usuario fácilmente
export const useAuth = () => useContext(AuthContext);
