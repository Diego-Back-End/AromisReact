// Este componente muestra un formulario con filtros para buscar perfumes
function Filters() {
  return (
    // Sección con fondo claro y algo de espacio arriba y abajo
    <section className="py-5 bg-light">
      <div className="container">
        {/* Título del bloque */}
        <h2 className="mb-3">Filtrar productos</h2>

        {/* Formulario con tres campos y un botón */}
        <form id="filtros-form" className="row g-3">

          {/* Primer filtro: por tipo de aroma */}
          <div className="col-md-4">
            <label htmlFor="notas" className="form-label">Notas Aromáticas</label>
            <select id="notas" className="form-select">
              <option value="floral">Floral</option>
              <option value="citrico">Cítrico</option>
              <option value="amaderado">Amaderado</option>
            </select>
          </div>

          {/* Segundo filtro: por género del perfume */}
          <div className="col-md-4">
            <label htmlFor="genero" className="form-label">Género</label>
            <select id="genero" className="form-select">
              <option value="hombre">Hombre</option>
              <option value="mujer">Mujer</option>
              <option value="unisex">Unisex</option>
            </select>
          </div>

          {/* Tercer filtro: por precio máximo */}
          <div className="col-md-4">
            <label htmlFor="precio" className="form-label">Precio máximo</label>
            <input
              type="number"
              id="precio"
              className="form-control"
              placeholder="Ej: 50000"
            />
          </div>

          {/* Botón para aplicar los filtros */}
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Aplicar filtros
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Filters;
