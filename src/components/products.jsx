import ProductCard from "./productcard";

function Products({ products, loading, error }) {
  if (loading) {
    return <div className="state-card">Loading products...</div>;
  }

  if (error) {
    return <div className="state-card error-state">{error}</div>;
  }

  if (!products.length) {
    return <div className="state-card">No products found in this category.</div>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;