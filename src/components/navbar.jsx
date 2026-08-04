import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

const Navbar = ({ search, setSearch,productsRef }) => {
  const { itemCount } = useCart();
  const { isLoggedIn, logout } = useAuth();

  const navLink =
    "transition duration-300 hover:text-indigo-600";

  const outlineButton =
    "rounded-full border border-slate-200 px-4 py-2 transition duration-300 hover:border-indigo-600 hover:text-indigo-600";

  const primaryButton =
    "rounded-full bg-indigo-600 px-4 py-2 text-white transition duration-300 hover:bg-indigo-700";
   
    const handleSearch = (e) => {
  e.preventDefault();

  productsRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
  
    return (
  <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

      {/* Logo */}
      <Link
        to="/"
        className="flex items-center gap-2 text-3xl font-extrabold text-indigo-600"
      >
        🛍️ <span>ShopEase</span>
      </Link>

      {/* Search Bar */}
     <form
  onSubmit={handleSearch}
  className="mx-6 flex flex-1 items-center rounded-full border border-slate-300 bg-slate-100 px-3 py-2"
>
  <input
    type="text"
    placeholder="Search products..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full bg-transparent px-2 outline-none"
  />

  <button
    type="submit"
    className="ml-2 rounded-full bg-indigo-600 px-5 py-2 text-white transition hover:bg-indigo-700"
  >
    Search
  </button>
</form>
      {/* Navigation */}
      <div className="flex items-center gap-5 text-sm font-medium">

        <Link
          to="/"
          className="transition hover:text-indigo-600"
        >
          Home
        </Link>

        <a
          href="#categories"
          className="transition hover:text-indigo-600"
        >
          Categories
        </a>

        <Link
          to="/checkout"
          className="rounded-full border border-slate-200 px-4 py-2 transition hover:border-indigo-600 hover:text-indigo-600"
        >
          Checkout
        </Link>

        {isLoggedIn ? (
          <button
            onClick={logout}
            className="rounded-full border border-slate-200 px-4 py-2 transition hover:border-indigo-600 hover:text-indigo-600"
          >
            Logout
          </button>
        ) : (
          <>
            <Link
              to="/login"
              className="rounded-full border border-slate-200 px-4 py-2 transition hover:border-indigo-600 hover:text-indigo-600"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="rounded-full bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-700"
            >
              Register
            </Link>
          </>
        )}

        <Link
          to="/cart"
          className="relative rounded-full bg-slate-900 px-5 py-2 text-white transition hover:bg-indigo-600"
        >
          🛒 Cart

          {itemCount > 0 && (
            <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
              {itemCount}
            </span>
          )}
        </Link>

      </div>
    </div>
  </nav>
);

};

export default Navbar;



