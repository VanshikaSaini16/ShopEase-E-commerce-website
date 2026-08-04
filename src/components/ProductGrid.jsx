import ProductCard from "./productcard";
import LoadingSpinner from "./LoadingSpinner";

function ProductGrid({ products, loading, error }) {
  if (loading) {
    return <LoadingSpinner message="Fetching products from Fake Store API..." />;
  }

  if (error) {
    return <p className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">{error}</p>;
  }
if (!loading && products.length === 0) {
  return (
    <div className="py-16 text-center">
      <h2 className="text-2xl font-semibold text-slate-700">
        No products found
      </h2>
      <p className="mt-2 text-slate-500">
        Try searching with a different keyword.
      </p>
    </div>
  );
}
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
