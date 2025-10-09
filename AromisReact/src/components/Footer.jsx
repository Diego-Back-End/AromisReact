function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container text-center text-md-start">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold mb-3">Aromis Perfumería</h5>
            <p>Descubre tu aroma único con nuestros perfumes exclusivos y disfruta de la mejor experiencia de compra online.</p>
          </div>
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold mb-3">Enlaces</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none d-block mb-2">Inicio</a></li>
              <li><a href="#" className="text-white text-decoration-none d-block mb-2">Productos</a></li>
              <li><a href="#" className="text-white text-decoration-none d-block mb-2">Contacto</a></li>
              <li><a href="#" className="text-white text-decoration-none d-block">Acerca de</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold mb-3">Síguenos</h5>
            <a href="#" className="text-white me-3 fs-4">Instagram</a>
            <a href="#" className="text-white me-3 fs-4">Facebook</a>
            <a href="#" className="text-white fs-4">Twitter</a>
          </div>
        </div>
        <hr className="bg-white" />
        <div className="text-center pt-3">
          <p className="mb-0">&copy; 2025 Aromis Perfumería. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
