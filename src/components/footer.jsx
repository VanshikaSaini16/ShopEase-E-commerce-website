
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-20 bg-slate-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-4">

        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-400">ShopEase</h2>
          <p className="mt-2 text-sm text-slate-400">
            Premium shopping made simple.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="mb-2 font-semibold">Quick Links</h3>
          <div className="space-y-1 text-sm text-slate-400">
            <Link to="/" className="block hover:text-white">Home</Link>
            <a href="#categories" className="block hover:text-white">Categories</a>
            <Link to="/cart" className="block hover:text-white">Cart</Link>
          </div>
        </div>

        {/* Support */}
        <div>
          <h3 className="mb-2 font-semibold">Support</h3>
          <div className="space-y-1 text-sm text-slate-400">
            <p>Help Center</p>
            <p>Returns</p>
            <p>Privacy Policy</p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-2 font-semibold">Contact</h3>
          <p className="text-sm text-slate-400">
            support@shopease.com
          </p>
        </div>
      </div>

      <div className="border-t border-slate-700 py-4 text-center text-sm text-slate-500">
        © 2026 ShopEase. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;