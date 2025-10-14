import React, { useState, useEffect } from "react";
import { products } from "../data/products";

function Catalogo() {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // 🔹 Filtrado por categoría y búsqueda
  const filteredProducts = products.filter((product) => {
    const matchesFilter = filter === "all" || product.category === filter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // 🔹 Estilos (idénticos a los anteriores)
  const styles = `
    .catalogo-page {
      min-height: 100vh;
      background-color: #f5f7fb;
      font-family: 'Poppins', sans-serif;
    }

    .catalogo-navbar {
      background: white;
      padding: 1rem 0;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      margin-bottom: 2rem;
    }

    .catalogo-navbar .container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .catalogo-search-bar {
      padding: 0.5rem 1rem;
      border: 2px solid #e0e0e0;
      border-radius: 25px;
      width: 300px;
      font-size: 1rem;
      transition: border-color 0.3s ease;
    }

    .catalogo-search-bar:focus {
      outline: none;
      border-color: #2289c0;
    }

    .catalogo-main {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .catalogo-main h2 {
      text-align: center;
      margin-bottom: 2rem;
      color: #333;
      font-size: 2.5rem;
    }

    .catalogo-filtros {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 3rem;
      flex-wrap: wrap;
    }

    .catalogo-filter-btn {
      padding: 0.75rem 1.5rem;
      border: 2px solid #2289c0;
      background: white;
      color: #2289c0;
      border-radius: 25px;
      cursor: pointer;
      font-weight: 500;
      transition: all 0.3s ease;
    }

    .catalogo-filter-btn:hover,
    .catalogo-filter-btn.active {
      background: #2289c0;
      color: white;
    }

    .catalogo-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 2rem;
      padding: 2rem 0;
    }

    .catalogo-card {
      background: white;
      border-radius: 15px;
      padding: 1.5rem;
      text-align: center;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }

    .catalogo-card:hover {
      transform: translateY(-5px);
    }

    .catalogo-card img {
      width: 100%;
      height: 220px;
      object-fit: cover;
      border-radius: 10px;
      margin-bottom: 1rem;
    }

    .catalogo-card h3 {
      margin: 0.5rem 0;
      color: #333;
      font-size: 1.1rem;
    }

    .catalogo-card p {
      font-weight: bold;
      color: #2289c0;
      font-size: 1.2rem;
      margin: 0.5rem 0;
    }

    .catalogo-btn {
      background: linear-gradient(135deg, #d4a373, #b07a3b);
      color: white;
      border: none;
      border-radius: 8px;
      padding: 0.75rem 1.5rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      width: 100%;
      margin-top: 1rem;
    }

    .catalogo-btn:hover {
      background: linear-gradient(135deg, #b07a3b, #d4a373);
    }

    @media (max-width: 768px) {
      .catalogo-navbar .container {
        flex-direction: column;
        text-align: center;
      }

      .catalogo-search-bar {
        width: 100%;
        max-width: 350px;
      }

      .catalogo-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  // 🔹 Inyectar estilos dinámicamente
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);

  return (
    <div className="catalogo-page">
      {/* Barra de búsqueda */}
      <header className="catalogo-navbar">
        <div className="container">
          <input
            type="text"
            placeholder="Buscar perfumes..."
            className="catalogo-search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>

      {/* Contenido principal */}
      <main className="catalogo-main">
        <h2>Catálogo de Perfumes</h2>

        {/* Botones de filtro */}
        <div className="catalogo-filtros">
          <button
            className={`catalogo-filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            Todos
          </button>
          <button
            className={`catalogo-filter-btn ${filter === "floral" ? "active" : ""}`}
            onClick={() => setFilter("floral")}
          >
            Floral
          </button>
          <button
            className={`catalogo-filter-btn ${filter === "citrico" ? "active" : ""}`}
            onClick={() => setFilter("citrico")}
          >
            Cítrico
          </button>
          <button
            className={`catalogo-filter-btn ${filter === "amaderado" ? "active" : ""}`}
            onClick={() => setFilter("amaderado")}
          >
            Amaderado
          </button>
        </div>

        {/* Grid de productos */}
        <section className="catalogo-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="catalogo-card">
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button className="catalogo-btn">Agregar al carrito</button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Catalogo;
