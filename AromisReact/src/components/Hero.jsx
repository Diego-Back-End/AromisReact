import React from "react";

function Hero() {
  // Aquí se definen los estilos directamente dentro del componente (sin usar un archivo CSS aparte)
  const styles = `
    /* Fondo con imagen, color oscuro encima y texto centrado */
    .hero-section {
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                  url('https://t4.ftcdn.net/jpg/08/10/81/25/360_F_810812587_wPaRzKCi8EolpN8MQABWEix89kKjBtH.jpg');
      background-size: cover; /* Hace que la imagen cubra todo el fondo */
      background-position: center; /* Centra la imagen */
      padding: 6rem 0; /* Espaciado arriba y abajo */
      color: white; /* Texto blanco */
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7); /* Sombra para destacar el texto */
    }

    /* Botón principal */
    .hero-section .btn-primary {
      background-color: #2289c0;
      border-color: #1e86cc;
      padding: 0.75rem 2rem;
      font-weight: bold;
      text-shadow: none;
    }

    /* Efecto al pasar el mouse sobre el botón */
    .hero-section .btn-primary:hover {
      background-color: #1c95cd;
      border-color: #6d4c1f;
      transform: translateY(-2px); /* Mueve el botón un poquito hacia arriba */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Le da una sombra */
    }

    /* Título principal */
    .hero-section .display-4 {
      font-weight: 700;
      margin-bottom: 1rem;
    }

    /* Subtítulo */
    .hero-section .lead {
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
  `;

  // Esto agrega los estilos al documento cuando el componente se monta
  React.useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    
    // Limpieza: elimina los estilos si el componente se desmonta
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  // Estructura principal del héroe (la parte grande de presentación)
  return (
    <section className="hero-section text-center">
      <div className="container">
        <h1 className="display-4">Descubre tu aroma único</h1>
        <p className="lead">Perfumes seleccionados para cada personalidad</p>
        <a href="Catalogo" className="btn btn-primary btn-lg">Ver Catálogo</a>
      </div>
    </section>
  );
}

export default Hero;
