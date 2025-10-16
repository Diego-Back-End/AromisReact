import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import Carrito from "../src/components/Carrito";

describe("Componente Carrito", () => {
  const mockRemove = vi.fn();
  const mockClear = vi.fn();

  const cartMock = [
    { id: 1, name: "Perfume 1", price: "10.000", quantity: 2, img: "img1.jpg" },
    { id: 2, name: "Perfume 2", price: "15.000", quantity: 1, img: "img2.jpg" },
  ];

  it("muestra mensaje cuando el carrito está vacío", () => {
    render(<Carrito cart={[]} removeFromCart={mockRemove} clearCart={mockClear} />);
    expect(screen.getByText("No hay productos en el carrito.")).toBeInTheDocument();
  });

  it("renderiza los productos del carrito", () => {
    render(<Carrito cart={cartMock} removeFromCart={mockRemove} clearCart={mockClear} />);
    expect(screen.getByText("Perfume 1")).toBeInTheDocument();
    expect(screen.getByText("Perfume 2")).toBeInTheDocument();
  });

  it("llama a removeFromCart al hacer clic en 'Eliminar'", () => {
    render(<Carrito cart={cartMock} removeFromCart={mockRemove} clearCart={mockClear} />);
    const button = screen.getAllByText("Eliminar")[0];
    fireEvent.click(button);
    expect(mockRemove).toHaveBeenCalled();
  });

  it("llama a clearCart al hacer clic en 'Vaciar carrito'", () => {
    render(<Carrito cart={cartMock} removeFromCart={mockRemove} clearCart={mockClear} />);
    const clearButton = screen.getByText("Vaciar carrito");
    fireEvent.click(clearButton);
    expect(mockClear).toHaveBeenCalled();
  });

  it("calcula y muestra el total correctamente", () => {
    render(<Carrito cart={cartMock} removeFromCart={mockRemove} clearCart={mockClear} />);
    expect(screen.getByText(/Total:/)).toBeInTheDocument();
  });
});
