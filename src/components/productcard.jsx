import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="flex h-56 items-center justify-center overflow-hidden rounded-3xl bg-slate-50">
        <img src={product.image} alt={product.title} className="h-full object-contain" />
      </div>
      <div className="mt-5 flex flex-col gap-3">
        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{product.category}</p>
        <h3 className="min-h-[3rem] text-base font-semibold text-slate-900">{product.title}</h3>
        <div className="flex items-center justify-between gap-3">
          <p className="text-xl font-bold text-indigo-600">${product.price.toFixed(2)}</p>
          {product.rating ? (
            <span className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-700">
              ⭐ {product.rating.rate.toFixed(1)}
            </span>
          ) : null}
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Add to Cart
          </button>
          <Link to={`/product/${product.id}`} className="text-sm font-semibold text-slate-700 transition hover:text-indigo-600">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
