const products = [
  { id: 1, name: "Jpg le male elixir", price: "97.990", img: "/img/perfume1.jpg" },
  { id: 2, name: "Stronger with you intensely", price: "90.990", img: "/img/perfume2.jpg" },
  { id: 3, name: "9AM Dive", price: "32.990", img: "/img/perfume3.webp" },
  { id: 4, name: "Liquid Brun", price: "40.990", img: "/img/perfume4.webp" },
  { id: 5, name: "Rayhaan Elixir", price: "30.990", img: "/img/perfume5.webp" },
  { id: 6, name: "Sceptre Malachite", price: "30.990", img: "/img/perfume6.webp" },
  { id: 7, name: "Bond No.9 Chez Bond EDP", price: "212.990", img: "/img/perfume7.webp" },
  { id: 8, name: "Montale Aoud Queen Roses EDP", price: "77.990", img: "/img/perfume8.webp" },
  { id: 9, name: "Eclaire Lattafa EDP", price: "30.490", img: "/img/perfume9.webp" },
  { id: 10, name: "Yara Candy", price: "30.990", img: "/img/perfume10.webp" },
];

function ProductList() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="mb-4">Perfumes Destacados</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((p) => (
            <div className="col" key={p.id}>
              <div className="card h-100">
                <img src={p.img} className="card-img-top" alt={p.name} />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">${p.price}</p>
                  <button className="btn btn-success w-100">Agregar al carrito</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default ProductList;
