function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="/img/Captura de pantalla 2025-09-04 121604.png" alt="Aromis Logo" className="navbar-logo" />
          Aromis
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#">Inicio</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Catálogo</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Mi Perfil</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Login</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
