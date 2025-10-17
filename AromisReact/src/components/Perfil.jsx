import React from "react";
import { useProfileStyles } from "../hooks/useProfileStyles"; // Hook que agrega estilos para el perfil

const Profile = () => {
  useProfileStyles(); // Aplica los estilos globales al cargar el componente

  return (
    <>
      {/* CABECERA DEL PERFIL */}
      <div className="profile-header-custom py-3 mb-4">
        <div className="container">
          <div className="row align-items-center">

            {/* Imagen de perfil */}
            <div className="col-md-2 text-center">
              <img
                src="/img/perfume1.jpg"
                alt="Foto de perfil"
                className="profile-img-custom rounded-circle"
              />
            </div>

            {/* Datos principales: nombre, correo y ubicación */}
            <div className="col-md-7">
              <h1 className="h2 text-white" id="profileName">Nombre Usuario</h1>
              <p className="mb-1 text-white">
                <i className="fas fa-envelope me-2"></i>
                <span id="profileEmail">correo@ejemplo.com</span>
              </p>
              <p className="mb-1 text-white">
                <i className="fas fa-map-marker-alt me-2"></i>
                Chile, Viña del mar
              </p>
            </div>

            {/* Botones para editar perfil y configuraciones */}
            <div className="col-md-3 text-md-end">
              <button className="btn btn-light me-2">
                <i className="fas fa-edit me-1"></i>Editar
              </button>
              <button className="btn btn-light">
                <i className="fas fa-cog"></i>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="container mb-5">
        <div className="row">

          {/* COLUMNA IZQUIERDA: Información personal */}
          <div className="col-md-4">
            <div className="stats-card-custom p-4 mb-4">
              <h5 className="mb-4">Información Personal</h5>

              <div className="mb-3">
                <p className="mb-1 text-muted">Nombre completo</p>
                <p className="mb-0" id="infoName">Nombre Usuario</p>
              </div>

              <div className="mb-3">
                <p className="mb-1 text-muted">Teléfono</p>
                <p className="mb-0">+56 94803804052</p>
              </div>

              <div className="mb-3">
                <p className="mb-1 text-muted">Dirección</p>
                <p className="mb-0">Duoc UC, Viña del Mar</p>
              </div>

              <div>
                <p className="mb-1 text-muted">Preferencias</p>
                <span className="badge bg-light text-dark me-1">Fragancias diseñador</span>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Pedidos y actividad reciente */}
          <div className="col-md-8">

            {/* Navegación dentro del perfil */}
            <ul className="nav nav-pills mb-4">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <i className="fas fa-shopping-bag me-1"></i> Pedidos
                </a>
              </li>
            </ul>

            {/* Actividad reciente del usuario */}
            <div className="stats-card-custom p-4 mb-4">
              <h5 className="mb-4">Actividad Reciente</h5>

              {/* Cada item muestra lo que hizo el usuario y cuándo */}
              <div className="activity-item-custom mb-3">
                <div className="d-flex justify-content-between">
                  <h6>Pedido completado</h6>
                  <small className="text-muted">Hace 2 días</small>
                </div>
                <p className="mb-0">Pedido #AR-78912 entregado satisfactoriamente.</p>
              </div>

              <div className="activity-item-custom mb-3">
                <div className="d-flex justify-content-between">
                  <h6>Producto valorado</h6>
                  <small className="text-muted">Hace 4 días</small>
                </div>
                <p className="mb-0">Has valorado el "Set de Velas Aromáticas" con 5 estrellas.</p>
              </div>

              <div className="activity-item-custom mb-3">
                <div className="d-flex justify-content-between">
                  <h6>Pedido en camino</h6>
                  <small className="text-muted">Hace 6 días</small>
                </div>
                <p className="mb-0">Tu pedido #AR-78435 está en camino.</p>
              </div>

              <div className="activity-item-custom">
                <div className="d-flex justify-content-between">
                  <h6>Nuevo pedido</h6>
                  <small className="text-muted">Hace 1 semana</small>
                </div>
                <p className="mb-0">Has realizado un nuevo pedido (#AR-78435).</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
