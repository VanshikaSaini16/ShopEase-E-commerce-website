import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, total } = useCart();

  if (!cart.length) {
    return (
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="state-card text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900">Your cart is empty</h2>
          <p className="mb-6 text-slate-600">Explore our catalog and add products you love to get started.</p>
          <Link className="primary-link" to="/">
            Continue shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 rounded-[2rem] bg-white p-8 shadow-sm shadow-slate-200/60">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600">Your cart</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">Items ready to checkout</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.65fr_0.95fr]">
        <div className="space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-5">
                  <img className="h-28 w-28 rounded-3xl bg-slate-50 p-3 object-contain" src={item.image} alt={item.title} />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="inline-flex items-center gap-2 rounded-3xl border border-slate-200 bg-slate-50 px-3 py-2">
                    <button type="button" className="quantity-btn" onClick={() => updateQuantity(item.id, -1)}>
                      −
                    </button>
                    <span className="min-w-[1.5rem] text-center font-semibold text-slate-900">{item.quantity}</span>
                    <button type="button" className="quantity-btn" onClick={() => updateQuantity(item.id, 1)}>
                      +
                    </button>
                  </div>
                  <button type="button" className="text-button" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">Order Summary</h3>
          <div className="mt-6 space-y-4 rounded-3xl bg-slate-50 p-6">
            <div className="flex items-center justify-between text-sm text-slate-600">
              <span>Subtotal</span>
              <span className="font-semibold text-slate-900">${total.toFixed(2)}</span>
            </div>
          </div>
          <button type="button" className="checkout-button mt-6">
            Checkout
          </button>
          <button type="button" className="text-button mt-4" onClick={clearCart}>
            Clear Cart
          </button>
        </aside>
      </div>
    </section>
  );
}

export default Cart;
