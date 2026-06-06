import React, { useState } from "react";
import axios from "axios";

const initialForm = {
  name: "",
  price: "",
  description: "",
  category: "General",
  inStock: true,
};

function AddProductForm({ onProductAdded }) {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.name || !form.price) {
      setError("Name and Price are required.");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post("/api/products", {
        ...form,
        price: parseFloat(form.price),
      });
      onProductAdded(res.data.data);
      setForm(initialForm);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to add product.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-card">
      <h2>➕ Add New Product</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            name="name"
            placeholder="Product name *"
            value={form.name}
            onChange={handleChange}
          />
          <input
            name="price"
            type="number"
            placeholder="Price (USD) *"
            value={form.price}
            onChange={handleChange}
            min="0"
            step="0.01"
          />
        </div>
        <div className="form-row">
          <select name="category" value={form.category} onChange={handleChange}>
            <option>General</option>
            <option>Electronics</option>
            <option>Clothing</option>
            <option>Books</option>
            <option>Home</option>
            <option>Sports</option>
          </select>
          <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.95rem" }}>
            <input
              type="checkbox"
              name="inStock"
              checked={form.inStock}
              onChange={handleChange}
              style={{ width: "auto" }}
            />
            In Stock
          </label>
        </div>
        <div className="form-full">
          <textarea
            name="description"
            placeholder="Description (optional)"
            value={form.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}

export default AddProductForm;
