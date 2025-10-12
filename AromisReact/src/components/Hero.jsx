import React from "react";

function Hero() {
  // Estilos directamente en el componente
  const styles = `
    .hero-section {
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                  url('https://t4.ftcdn.net/jpg/08/10/81/25/360_F_810812587_wPaRzKCi8EolpN8MQABWEix89kKjBtH.jpg');
      background-size: cover;
      background-position: center;
      padding: 6rem 0;
      color: white;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
    }

    .hero-section .btn-primary {
      background-color: #2289c0;
      border-color: #1e86cc;
      padding: 0.75rem 2rem;
      font-weight: bold;
      text-shadow: none;
    }

    .hero-section .btn-primary:hover {
      background-color: #1c95cd;
      border-color: #6d4c1f;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }

    .hero-section .display-4 {
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .hero-section .lead {
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
  `;

  // Inyectar estilos en el documento
  React.useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <section className="hero-section text-center">
      <div className="container">
        <h1 className="display-4">Descubre tu aroma único</h1>
        <p className="lead">Perfumes seleccionados para cada personalidad</p>
        <a href="#" className="btn btn-primary btn-lg">Ver Catálogo</a>
      </div>
    </section>
  );
}

export default Hero;