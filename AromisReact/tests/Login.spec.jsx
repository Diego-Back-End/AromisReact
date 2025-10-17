import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import Login from "../src/components/Login";

// Mock de useNavigate de react-router-dom
vi.mock("react-router-dom", () => ({
  useNavigate: () => vi.fn(),
}));

// Mock de useAuth para simular login
vi.mock("../src/context/AuthContext", () => ({
  useAuth: () => ({
    login: vi.fn((email, password) => {
      if (email === "user@test.com" && password === "1234") {
        return { success: true, message: "Bienvenido" };
      }
      return { success: false, message: "Credenciales inválidas" };
    }),
  }),
}));

describe("Componente Login", () => {
  // Test: verifica que el título se renderiza
  it("renderiza el título del formulario", () => {
    render(<Login />);
    const titulo = screen.getAllByText("Iniciar Sesión")[0]; // primer h3
    expect(titulo).toBeInTheDocument();
  });

  // Test: permite escribir en los inputs de correo y contraseña
  it("permite escribir en los campos de correo y contraseña", () => {
    render(<Login />);
    const emailInput = screen.getByPlaceholderText("usuario@ejemplo.com");
    const passwordInput = screen.getByPlaceholderText("********");

    fireEvent.change(emailInput, { target: { value: "user@test.com" } });
    fireEvent.change(passwordInput, { target: { value: "1234" } });

    expect(emailInput.value).toBe("user@test.com");
    expect(passwordInput.value).toBe("1234");
  });

  // Test: muestra error si las credenciales son incorrectas
  it("muestra error si las credenciales son incorrectas", () => {
    render(<Login />);
    const emailInput = screen.getByPlaceholderText("usuario@ejemplo.com");
    const passwordInput = screen.getByPlaceholderText("********");
    const button = screen.getByRole("button", { name: /iniciar sesión/i });

    fireEvent.change(emailInput, { target: { value: "fail@test.com" } });
    fireEvent.change(passwordInput, { target: { value: "wrong" } });
    fireEvent.click(button);

    expect(screen.getByText("Credenciales inválidas")).toBeInTheDocument();
  });
});
