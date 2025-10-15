// src/components/Carrito.jsx
import React, { useEffect } from "react";

function Carrito({ cart, removeFromCart, clearCart }) {
  const total = cart.reduce(
    (sum, item) => sum + parseFloat(item.price.replace(".", "")) * item.quantity,
    0
  );

  // Estilos internos
  const styles = `
    .carrito-container {
      max-width: 800px;
      margin: 2rem auto;
      background: #fff;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      font-family: 'Poppins', sans-serif;
    }
    .carrito-titulo {
      text-align: center;
      margin-bottom: 1.5rem;
      color: #333;
    }
    .carrito-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      border-bottom: 1px solid #eee;
      padding-bottom: 0.5rem;
    }
    .carrito-item img {
      width: 70px;
      height: 70px;
      border-radius: 10px;
      object-fit: cover;
    }
    .carrito-info {
      flex: 1;
      margin-left: 1rem;
    }
    .carrito-info h4 {
      margin: 0;
      font-size: 1rem;
    }
    .carrito-info p {
      color: #2289c0;
      font-weight: bold;
    }
    .carrito-btn {
      background: #d9534f;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      cursor: pointer;
    }
    .carrito-btn:hover {
      background: #c9302c;
    }
    .carrito-total {
      text-align: right;
      font-size: 1.3rem;
      font-weight: bold;
      color: #333;
      margin-top: 1.5rem;
    }
    .carrito-clear {
      background: #2289c0;
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      cursor: pointer;
      display: block;
      margin: 1rem auto 0;
    }
    .carrito-clear:hover {
      background: #1a6d96;
    }
  `;

  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);

  return (
    <div className="carrito-container">
      <h2 className="carrito-titulo">🛍️ Tu Carrito</h2>

      {cart.length === 0 ? (
        <p style={{ textAlign: "center" }}>No hay productos en el carrito.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="carrito-item" key={item.id}>
              <img src={item.img} alt={item.name} />
              <div className="carrito-info">
                <h4>{item.name}</h4>
                <p>${item.price}</p>
                <small>Cantidad: {item.quantity}</small>
              </div>
              <button className="carrito-btn" onClick={() => removeFromCart(item.id)}>
                Eliminar
              </button>
            </div>
          ))}

          <div className="carrito-total">Total: ${total.toLocaleString("es-CL")}</div>
          <button className="carrito-clear" onClick={clearCart}>
            Vaciar carrito
          </button>
        </>
      )}
    </div>
  );
}

export default Carrito;
