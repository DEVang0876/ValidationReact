import React, { useEffect, useState } from "react";

/**
 * Product Card - Beginner friendly
 * Fetches product data from https://fakestoreapi.com/products/{id}
 * Props:
 *  - productId (number) default 1
 */
function ProductCard({ productId = 1 }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    setProduct(null);

    const url = `https://fakestoreapi.com/products/${productId}`;
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (!cancelled) setProduct(data);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message || "Failed to load");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [productId]);

  if (loading) return <div style={styles.center}>Loading product...</div>;
  if (error) return <div style={{ ...styles.center, color: "#c00" }}>Error: {error}</div>;
  if (!product) return null;

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.title} style={styles.image} />
      <div style={styles.body}>
        <h3 style={styles.title}>{product.title}</h3>
        <p style={styles.category}>{product.category}</p>
        <p style={styles.description}>{product.description}</p>
        <div style={styles.footer}>
          <strong style={styles.price}>${product.price}</strong>
          <button style={styles.button} onClick={() => alert(`Added ${product.title} to cart`)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  center: { padding: 20, textAlign: "center" },
  card: {
    display: "flex",
    gap: 16,
    maxWidth: 900,
    margin: "20px auto",
    padding: 16,
    borderRadius: 8,
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    background: "#fff",
    alignItems: "flex-start",
  },
  image: { width: 180, height: 180, objectFit: "contain" },
  body: { flex: 1 },
  title: { margin: "0 0 8px 0", fontSize: 18 },
  category: { margin: "0 0 8px 0", color: "#666", fontSize: 13 },
  description: { margin: "0 0 12px 0", color: "#333", fontSize: 14 },
  footer: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  price: { fontSize: 18, color: "#111" },
  button: { padding: "8px 12px", borderRadius: 6, cursor: "pointer" },
};

export default ProductCard;
