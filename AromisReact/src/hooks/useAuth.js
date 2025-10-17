import { useState, useEffect } from "react";

// Hook personalizado para manejar la autenticación
export const useAuth = () => {
  const [user, setUser] = useState(null); // Guarda el usuario actual

  //  Al iniciar la app, cargamos usuario guardado en el navegador
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  //  Registrar usuario
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

    // Guardar usuario en el navegador y en el estado
    const newUser = { email, username, password };
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);

    return { success: true, message: "Usuario registrado correctamente" };
  };

  //  Iniciar sesión
  const login = (email, password) => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (!savedUser) return { success: false, message: "No hay usuarios registrados" };

    if (email === savedUser.email && password === savedUser.password) {
      setUser(savedUser);
      return { success: true, message: "Inicio de sesión exitoso" };
    }

    return { success: false, message: "Correo o contraseña incorrectos" };
  };

  //  Cerrar sesión
  const logout = () => {
    localStorage.removeItem("user"); // Borrar datos del navegador
    setUser(null); // Limpiar estado
  };

  // Retornamos todo para que cualquier componente pueda usarlo
  return { user, register, login, logout };
};
