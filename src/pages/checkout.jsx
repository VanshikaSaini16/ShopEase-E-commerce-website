import { useAuth } from "../context/AuthContext";

const Checkout = () => {
  const { user } = useAuth();

  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm shadow-slate-200/60">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-600">Checkout</p>
        <h1 className="mt-4 text-3xl font-bold text-slate-900">Secure checkout</h1>
        <p className="mt-3 text-slate-600">Welcome back, {user?.username || "customer"}. Complete your purchase securely.</p>

        <div className="mt-10 rounded-3xl bg-slate-50 p-8 text-slate-700">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Next step</p>
          <p className="mt-4 text-base leading-7">The cart checkout is protected behind authentication. This page proves the protected route is working.</p>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
