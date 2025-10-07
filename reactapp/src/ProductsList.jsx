import React, { useEffect, useState, useCallback } from "react";

// Simple product card for list (uses product object)
function SmallCard({ product }) {
  return (
    <div style={cardStyles.card}>
      <img src={product.image} alt={product.title} style={cardStyles.img} />
      <div style={cardStyles.info}>
        <h4 style={{ margin: 0, fontSize: 14 }}>{product.title}</h4>
        <p style={{ margin: "6px 0", color: "#666", fontSize: 12 }}>{product.category}</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <strong>${product.price}</strong>
          <button onClick={() => alert(`Added ${product.title} to cart`)} style={cardStyles.btn}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // number of items to show initially and to add on each scroll
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (!cancelled) setProducts(data);
      })
      .catch((err) => !cancelled && setError(err.message || "Failed to load"))
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, []);

  // infinite-scroll handler: when near bottom, increase visibleCount
  const onScroll = useCallback(() => {
    const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;
    if (nearBottom && visibleCount < products.length) {
      setVisibleCount((c) => Math.min(products.length, c + 6));
    }
  }, [visibleCount, products.length]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  if (loading) return <div style={{ padding: 24, textAlign: "center" }}>Loading products...</div>;
  if (error) return <div style={{ padding: 24, textAlign: "center", color: "#c00" }}>Error: {error}</div>;

  return (
    <div style={{ maxWidth: 1000, margin: "20px auto", padding: 12 }}>
      <h2 style={{ marginTop: 0 }}>Products</h2>
      <div style={listStyles.grid}>
        {products.slice(0, visibleCount).map((p) => (
          <SmallCard key={p.id} product={p} />
        ))}
      </div>

      {visibleCount < products.length ? (
        <div style={{ textAlign: "center", padding: 16 }}>
          Loading more when you scroll... ({visibleCount}/{products.length})
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: 16 }}>All products loaded ({products.length})</div>
      )}
    </div>
  );
}

const listStyles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: 12,
  },
};

const cardStyles = {
  card: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    padding: 12,
    borderRadius: 8,
    background: "#fff",
    boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
    minHeight: 240,
    alignItems: "center",
  },
  img: { width: 140, height: 140, objectFit: "contain" },
  info: { width: "100%" },
  btn: { padding: "6px 10px", borderRadius: 6, cursor: "pointer" },
};
