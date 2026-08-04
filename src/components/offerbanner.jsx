import { ChevronLeft, ChevronRight, Tag } from "lucide-react";

const OfferBanner = () => {
  return (
    <div className="mx-auto mt-6 max-w-7xl px-4">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-700 via-indigo-600 to-violet-600 shadow-2xl">

        {/* Decorative Circles */}
        <div className="absolute -left-16 -top-16 h-52 w-52 rounded-full bg-white/10"></div>
        <div className="absolute -right-12 bottom-0 h-40 w-40 rounded-full bg-white/10"></div>

        {/* Left Arrow */}
        <button className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 text-indigo-600 shadow-lg transition hover:scale-110">
          <ChevronLeft size={22} />
        </button>

        {/* Banner Content */}
        <div className="flex min-h-[220px] items-center justify-between px-24">

          {/* Left */}
          <div className="text-white">

            <div className="mb-4 flex items-center gap-2">
              <Tag className="text-yellow-300" size={30} />
              <span className="rounded-full bg-white/20 px-4 py-1 text-sm font-semibold">
                LIMITED OFFER
              </span>
            </div>

            <h1 className="text-6xl font-extrabold leading-tight">
              Get Extra
              <span className="block text-yellow-300">
                20% OFF
              </span>
            </h1>

            <p className="mt-4 text-xl text-indigo-100">
              On your first purchase with ShopEase
            </p>

          </div>

          {/* Coupon */}
          <div className="rounded-3xl bg-white px-10 py-7 text-center shadow-xl">

            <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Use Coupon
            </p>

            <h2 className="mt-2 text-4xl font-extrabold text-indigo-700">
              WELCOME20
            </h2>

            <p className="mt-3 text-sm text-slate-500">
              Valid for New Users
            </p>

          </div>

        </div>

        {/* Right Arrow */}
        <button className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 text-indigo-600 shadow-lg transition hover:scale-110">
          <ChevronRight size={22} />
        </button>

      </div>
    </div>
  );
};

export default OfferBanner;