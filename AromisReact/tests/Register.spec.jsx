import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Register from "../src/components/Register"; // Componente de registro

describe("Componente Register", () => {
  // Test 1: Verifica que el formulario se renderiza correctamente
  test("renderiza el formulario de registro", () => {
    render(<Register />);
    expect(screen.getByText(/registro/i)).toBeInTheDocument(); // Título
    expect(screen.getByLabelText(/correo electrónico/i)).toBeInTheDocument(); // Campo email
    expect(screen.getByLabelText(/nombre usuario/i)).toBeInTheDocument(); // Campo usuario
  });

  // Test 2: Permite escribir en los campos del formulario
  test("permite escribir en los campos", () => {
    render(<Register />);
    const email = screen.getByLabelText(/correo electrónico/i);
    const user = screen.getByLabelText(/nombre usuario/i);
    const pass = screen.getByLabelText(/contraseña/i);

    fireEvent.change(email, { target: { value: "test@ejemplo.com" } });
    fireEvent.change(user, { target: { value: "tester" } });
    fireEvent.change(pass, { target: { value: "123456" } });

    expect(email.value).toBe("test@ejemplo.com");
    expect(user.value).toBe("tester");
    expect(pass.value).toBe("123456");
  });

  // Test 3: Muestra mensaje de error si el registro falla
  test("muestra un mensaje de error si el registro falla", async () => {
    render(<Register />);

    const email = screen.getByLabelText(/correo electrónico/i);
    const user = screen.getByLabelText(/nombre usuario/i);
    const pass = screen.getByLabelText(/contraseña/i);
    const button = screen.getByRole("button", { name: /registrar/i });

    // Simula ingreso de datos
    fireEvent.change(email, { target: { value: "fallo@ejemplo.com" } });
    fireEvent.change(user, { target: { value: "falloUser" } });
    fireEvent.change(pass, { target: { value: "123456" } });

    // Dispara el submit
    fireEvent.click(button);

    // Espera a que aparezca el mensaje de error
    await waitFor(() => {
      expect(screen.getByText(/error en registro/i)).toBeInTheDocument();
    });
  });
});
