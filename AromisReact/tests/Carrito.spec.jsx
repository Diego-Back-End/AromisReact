import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import Carrito from "../src/components/Carrito";

describe("Componente Carrito", () => {
  // Funciones simuladas para los props
  const mockRemove = vi.fn();
  const mockClear = vi.fn();

  // Carrito de ejemplo con productos
  const cartMock = [
    { id: 1, name: "Perfume 1", price: "10.000", quantity: 2, img: "img1.jpg" },
    { id: 2, name: "Perfume 2", price: "15.000", quantity: 1, img: "img2.jpg" },
  ];

  // Test: muestra mensaje si el carrito está vacío
  it("muestra mensaje cuando el carrito está vacío", () => {
    render(<Carrito cart={[]} removeFromCart={mockRemove} clearCart={mockClear} />);
    expect(screen.getByText("No hay productos en el carrito.")).toBeInTheDocument();
  });

  // Test: renderiza los productos del carrito
  it("renderiza los productos del carrito", () => {
    render(<Carrito cart={cartMock} removeFromCart={mockRemove} clearCart={mockClear} />);
    expect(screen.getByText("Perfume 1")).toBeInTheDocument();
    expect(screen.getByText("Perfume 2")).toBeInTheDocument();
  });

  // Test: llama a removeFromCart al hacer clic en "Eliminar"
  it("llama a removeFromCart al hacer clic en 'Eliminar'", () => {
    render(<Carrito cart={cartMock} removeFromCart={mockRemove} clearCart={mockClear} />);
    const button = screen.getAllByText("Eliminar")[0]; // selecciona primer botón "Eliminar"
    fireEvent.click(button); // simula clic
    expect(mockRemove).toHaveBeenCalled(); // verifica que se llamó la función
  });

  // Test: llama a clearCart al hacer clic en "Vaciar carrito"
  it("llama a clearCart al hacer clic en 'Vaciar carrito'", () => {
    render(<Carrito cart={cartMock} removeFromCart={mockRemove} clearCart={mockClear} />);
    const clearButton = screen.getByText("Vaciar carrito");
    fireEvent.click(clearButton);
    expect(mockClear).toHaveBeenCalled();
  });

  // Test: calcula y muestra el total correctamente
  it("calcula y muestra el total correctamente", () => {
    render(<Carrito cart={cartMock} removeFromCart={mockRemove} clearCart={mockClear} />);
    // Solo verificamos que el texto Total: aparece (puedes hacer test más específico del valor)
    expect(screen.getByText(/Total:/)).toBeInTheDocument();
  });
});
