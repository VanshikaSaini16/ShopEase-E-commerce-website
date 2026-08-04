import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { getProduct } from "../services/api";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    let isMounted = true;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await getProduct(id);

        if (isMounted) {
          setProduct(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || "Unable to load product details.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchProduct();

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loading) {
    return <div className="state-card">Loading product details...</div>;
  }

  if (error) {
    return <div className="state-card">{error}</div>;
  }

  if (!product) {
    return null;
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm shadow-slate-200/60">
          <img className="mx-auto h-[420px] w-full max-w-xl object-contain" src={product.image} alt={product.title} />
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl bg-indigo-50 p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-indigo-600">{product.category}</p>
            <h1 className="mt-4 text-3xl font-bold text-slate-900">{product.title}</h1>
          </div>

          <p className="text-slate-600 leading-8">{product.description}</p>

          <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-slate-500">Price</p>
                <p className="mt-2 text-4xl font-bold text-indigo-600">${product.price.toFixed(2)}</p>
              </div>
              <div className="rounded-3xl bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
                {product.rating ? `${product.rating.rate.toFixed(1)} ★` : "Top rated"}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => addToCart(product)}
              className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Add to Cart
            </button>
            <Link
              className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-600 hover:text-indigo-600"
              to="/"
            >
              Back to Shop
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
