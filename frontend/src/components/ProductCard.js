import React from "react";

function ProductCard({ product, onDelete }) {
  const { _id, name, price, description, category, inStock } = product;

  return (
    <div className="card">
      <div className="card-header">
        <h3>{name}</h3>
        <span className={`badge ${inStock ? "badge-green" : "badge-red"}`}>
          {inStock ? "In Stock" : "Out of Stock"}
        </span>
      </div>
      <p className="card-category">📂 {category}</p>
      {description && <p className="card-desc">{description}</p>}
      <p className="card-price">${Number(price).toFixed(2)}</p>
      <div className="card-footer">
        <button className="btn btn-danger" onClick={() => onDelete(_id)}>
          🗑 Delete
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
