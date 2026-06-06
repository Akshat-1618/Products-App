import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./components/ProductCard";
import AddProductForm from "./components/AddProductForm";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch all products on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("/api/products");
        setProducts(res.data.data);
      } catch (err) {
        setError("Could not connect to the API. Make sure the backend is running.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleProductAdded = (newProduct) => {
    setProducts((prev) => [newProduct, ...prev]);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;
    try {
      await axios.delete(`/api/products/${id}`);
      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      alert("Failed to delete product.");
    }
  };

  return (
    <>
      <nav className="navbar">
        <h1>🛒 MERN Products App</h1>
        <span>React + Express + MongoDB</span>
      </nav>

      <div className="container">
        <AddProductForm onProductAdded={handleProductAdded} />

        <div className="section-title">
          📦 All Products{" "}
          <span style={{ color: "#aaa", fontWeight: 400 }}>({products.length})</span>
        </div>

        {loading && <div className="loading">⏳ Loading products...</div>}
        {error && <div className="error">⚠️ {error}</div>}
        {!loading && !error && products.length === 0 && (
          <div className="empty">No products yet. Add one above!</div>
        )}

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} onDelete={handleDelete} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
