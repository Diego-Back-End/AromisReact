// src/hooks/useAuth.js
import { useState, useEffect } from "react";

export const useAuth = () => {
  const [user, setUser] = useState(null);

  // 🔹 Cargar usuario guardado al iniciar
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // 🔹 Registrar usuario
  const register = (email, username, password) => {
    if (!email || !username || !password) {
      return { success: false, message: "Todos los campos son obligatorios" };
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return { success: false, message: "Correo no válido" };
    }

    if (password.length < 6) {
      return { success: false, message: "La contraseña debe tener al menos 6 caracteres" };
    }

    const newUser = { email, username, password };
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
    return { success: true, message: "Usuario registrado correctamente" };
  };

  // 🔹 Iniciar sesión
  const login = (email, password) => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (!savedUser) return { success: false, message: "No hay usuarios registrados" };

    if (email === savedUser.email && password === savedUser.password) {
      setUser(savedUser);
      return { success: true, message: "Inicio de sesión exitoso" };
    }

    return { success: false, message: "Correo o contraseña incorrectos" };
  };

  // 🔹 Cerrar sesión
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return { user, register, login, logout };
};
