// src/components/ProductList.jsx
import React from "react";
import { products } from "../data/products";

function ProductList({ addToCart }) {
  return (
    <section className="py-5 bg-light">
      <style>
        {`
        .card {
          border-radius: 16px;
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 16px rgba(0,0,0,0.15);
        }

        .card-img-top {
          height: 200px;
          object-fit: cover;
        }

        .card-body {
          padding: 1rem;
        }

        .card-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #333;
        }

        .card-text {
          font-size: 1rem;
          color: #007bff;
        }

        .btn-success {
          background-color: #28a745;
          border: none;
          transition: background-color 0.2s;
        }

        .btn-success:hover {
          background-color: #218838;
        }

        @media (max-width: 768px) {
          .card-img-top {
            height: 160px;
          }
          .card-title {
            font-size: 1rem;
          }
        }
        `}
      </style>

      <div className="container">
        <h2 className="mb-4 text-center text-dark">Perfumes Destacados</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {products.map((p) => (
            <div className="col" key={p.id}>
              <div className="card h-100 text-center shadow-sm">
                <img src={p.img} className="card-img-top" alt={p.name} />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text fw-bold">${p.price}</p>
                  <button
                    className="btn btn-success w-100"
                    onClick={() => addToCart(p)}
                  >
                    Agregar al carrito
                  </button>
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
