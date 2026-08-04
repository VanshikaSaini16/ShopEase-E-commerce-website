import { useEffect, useState, useRef } from "react";
import Hero from "../components/hero";
import ProductGrid from "../components/ProductGrid";
import { getCategories, getProducts } from "../services/api";
import OfferBanner from "../components/offerbanner";
import Testimonials from "../components/testimonials";

const Home = ({search,productsRef}) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
 const [currentPage, setCurrentPage] = useState(1);
 const productsPerPage = 10;

  

  useEffect(() => {
    getCategories()
      .then((data) => setCategories(["All Products", ...data]))
      .catch((err) => setError(err.message || "Failed to load categories."));
  }, []);



   useEffect(() => {
  setLoading(true);
  setError("");

  getProducts(selectedCategory)
    .then((data) => setProducts(data))
    .catch((err) => setError(err.message || "Failed to load products."))
    .finally(() => setLoading(false));
}, [selectedCategory]);

  const formatCategory = (category) =>
    category === "All Products"
      ? category
      : category.replace(/\b\w/g, (letter) => letter.toUpperCase());

  const buttonStyle = (category) =>
    selectedCategory === category
      ? "border-indigo-600 bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-300"
      : "border-slate-300 bg-white text-slate-700 hover:-translate-y-1 hover:border-indigo-500 hover:text-indigo-600 hover:shadow-lg";
      
const filteredProducts = products.filter((product) => {
  const query = (search || "").trim().toLowerCase();

  if (!query) return true;

  return JSON.stringify(product)
    .toLowerCase()
    .includes(query);
});
const lastProductIndex = currentPage * productsPerPage;
const firstProductIndex = lastProductIndex - productsPerPage;

const currentProducts = filteredProducts.slice(
  firstProductIndex,
  lastProductIndex
);

const totalPages = Math.ceil(
  filteredProducts.length / productsPerPage
);
  return (
    <>
      <Hero />
      {/* <OfferBanner/> */}

      <section
  ref={productsRef}
  className="mx-auto max-w-7xl px-4 py-16"
>
        {/* Heading */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="inline-block rounded-full bg-indigo-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-700">
              Featured Products
            </span>

            <h2 className="mt-5 text-5xl font-extrabold tracking-tight text-slate-900">
              Shop Our Collection
            </h2>

            <p className="mt-4 max-w-2xl text-lg text-slate-600">
              Discover the latest fashion, electronics, jewellery and
              accessories from our premium collection.
            </p>
          </div>

          <div className="rounded-2xl bg-white px-8 py-6 shadow-lg">
            <h3 className="text-2xl font-bold text-indigo-600">
              {products.length}
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Products Available
            </p>
          </div>
        </div>

        {/* Categories */}
        <div
  id="categories"
  className="mb-10 flex flex-wrap gap-4"
>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-300 ${buttonStyle(
                category
              )}`}
            >
              {formatCategory(category)}
            </button>
          ))}
        </div>
         <OfferBanner/>

        {/* Selected Category */}
        <div className="mb-8 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-700">
            {formatCategory(selectedCategory)}
          </h3>

          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            {products.length} Products
          </span>
        </div>

        {/* Products */}
        <div className="rounded-3xl bg-white p-8 shadow-xl">
        {!loading && filteredProducts.length === 0 ? (
  <div className="py-12 text-center">
    <h2 className="text-3xl font-bold text-red-500">
      Product Not Found 😔
    </h2>
    <p className="mt-2 text-gray-500">
      Try searching for another product.
    </p>
  </div>
) : (
  <div>
  <ProductGrid
  products={currentProducts}
  loading={loading}
  error={error}
/>
<div className="mt-10 flex justify-center gap-3">
  {Array.from({ length: totalPages }, (_, index) => (
    <button
      key={index}
      onClick={() => setCurrentPage(index + 1)}
      className={`rounded-lg px-4 py-2 ${
        currentPage === index + 1
          ? "bg-indigo-600 text-white"
          : "bg-gray-200 hover:bg-gray-300"
      }`}
    >
      {index + 1}
    </button>
  ))}
</div>
</div>

)}
        </div>
      </section>
       <Testimonials/>

    </>
  );
}

export default Home;