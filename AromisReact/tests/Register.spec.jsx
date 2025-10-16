import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Register from "../src/components/Register"; // ajusta la ruta según tu estructura

describe("Componente Register", () => {
  test("renderiza el formulario de registro", () => {
    render(<Register />);
    expect(screen.getByText(/registro/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/correo electrónico/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/nombre usuario/i)).toBeInTheDocument();
  });

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

    // Dispara el evento de submit
    fireEvent.click(button);

    // Espera que aparezca el mensaje de error
    await waitFor(() => {
      expect(screen.getByText(/error en registro/i)).toBeInTheDocument();
    });
  });
});
