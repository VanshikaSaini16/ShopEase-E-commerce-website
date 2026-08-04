
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-800 to-blue-700 text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_35%)]"></div>

     <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-6 lg:flex-row">

        {/* Left Content */}
        <div className="max-w-2xl">

          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm">
            Welcome to ShopEase
          </span>

          <h1 className="mt-3 text-4xl font-extrabold leading-tight lg:text-5xl">
            Shop Smarter,
            <br />
            Live Better.
          </h1>

          <p className="mt-3 text-base leading-6 text-indigo-100">
            Discover premium fashion, electronics, jewellery and everyday
            essentials at unbeatable prices. Experience secure shopping,
            trusted quality and fast delivery.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">

            <a
              href="#categories"
              className="rounded-full bg-white px-7 py-3 font-semibold text-slate-900 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Shop Now
            </a>

            <Link
              to="/cart"
              className="rounded-full border border-white/30 bg-white/10 px-5 py-2 font-semibold backdrop-blur-sm transition duration-300 hover:bg-white hover:text-slate-900"
            >
              View Cart
            </Link>

          </div>

        </div>

        {/* Right Side */}
        <div className="grid w-full max-w-md gap-5">

          <div className="rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:bg-white/15">
            <h3 className="text-xl font-bold">
              🚚 Free Shipping
            </h3>

            <p className="mt-2 text-indigo-100">
              Fast and secure delivery on selected products across India.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/15">
            <h3 className="text-lg font-bold">
              ⭐ Premium Quality
            </h3>

            <p className="mt-2 text-indigo-100">
              Carefully selected products from trusted and top-rated brands.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:bg-white/15">
            <h3 className="text-xl font-bold">
              🔄 Easy Returns
            </h3>

            <p className="mt-2 text-indigo-100">
              Simple return policy with quick customer support whenever you need help.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;