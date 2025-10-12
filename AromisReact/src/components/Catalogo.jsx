import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Catalogo() {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    { id: 1, name: "Jpg le male elixir", price: "97.990", img: "/img/perfume1.jpg", category: "amaderado" },
    { id: 2, name: "Stronger with you intensely", price: "90.990", img: "/img/perfume2.jpg", category: "floral" },
    { id: 3, name: "9AM Dive", price: "32.990", img: "/img/perfume3.webp", category: "citrico" },
    { id: 4, name: "Liquid Brun", price: "40.990", img: "/img/perfume4.webp", category: "citrico" },
    { id: 5, name: "Rayhaan Elixir", price: "40.990", img: "/img/perfume5.webp", category: "amaderado" },
    { id: 6, name: "Sceptre Malachite", price: "40.990", img: "/img/perfume6.webp", category: "amaderado" },
    { id: 7, name: "Bond No.9 Chez Bond EDP", price: "40.990", img: "/img/perfume7.webp", category: "floral" },
    { id: 8, name: "Montale Aoud Queen Roses EDP", price: "40.990", img: "/img/perfume8.webp", category: "citrico" },
    { id: 9, name: "Eclaire Lattafa EDP", price: "40.990", img: "/img/perfume9.webp", category: "amaderado" },
    { id: 10, name: "Yara Candy", price: "40.990", img: "/img/perfume10.webp", category: "citrico" },
  ];

  // ESTILOS PARA CATÁLOGO 
  const styles = `
    .catalogo-page {
      min-height: 100vh;
      background-color: #f5f7fb;
    }

    .catalogo-navbar {
      background: white;
      padding: 1rem 0;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      margin-bottom: 2rem;
    }

    .catalogo-navbar .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .catalogo-logo-container {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .catalogo-navbar-logo {
      height: 40px;
      object-fit: contain;
    }

    .catalogo-logo {
      font-size: 1.8rem;
      font-weight: bold;
      color: #333;
      margin: 0;
    }

    .catalogo-navbar nav ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 2rem;
    }

    .catalogo-navbar nav a {
      text-decoration: none;
      color: #555;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    .catalogo-navbar nav a:hover,
    .catalogo-navbar nav a.active {
      color: #2289c0;
    }

    .catalogo-search-bar {
      padding: 0.5rem 1rem;
      border: 2px solid #e0e0e0;
      border-radius: 25px;
      width: 250px;
      font-size: 0.9rem;
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
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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
      height: 200px;
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

 

    @media (max-width: 768px) {
      .catalogo-navbar .container {
        flex-direction: column;
        text-align: center;
      }

      .catalogo-navbar nav ul {
        gap: 1rem;
      }

      .catalogo-search-bar {
        width: 100%;
        max-width: 300px;
      }

      .catalogo-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  // Filtrar productos
  const filteredProducts = products.filter(product => {
    const matchesFilter = filter === "all" || product.category === filter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Inyectar estilos
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div className="catalogo-page">
      {/* Header/Navbar */}
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

        {/* Catálogo de productos */}
        <section className="catalogo-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="catalogo-card" data-category={product.category}>
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