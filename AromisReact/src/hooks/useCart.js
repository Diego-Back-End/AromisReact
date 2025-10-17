import { useState } from "react";

// Hook personalizado para manejar el carrito de compras
export function useCart() {
  const [cart, setCart] = useState([]); // Guarda los productos del carrito

  //  Agregar un producto al carrito
  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id); // Revisar si ya está
    if (existing) {
      // Si ya está, solo aumentamos la cantidad
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // Si no está, lo agregamos con cantidad 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  //  Eliminar un producto del carrito
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  //  Vaciar todo el carrito
  const clearCart = () => setCart([]);

  // Retornamos todo para que otros componentes lo usen
  return { cart, addToCart, removeFromCart, clearCart };
}

export default useCart;
