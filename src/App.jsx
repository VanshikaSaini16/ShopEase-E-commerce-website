import { Routes, Route } from "react-router-dom";
import { useState,useRef } from "react";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Cart from "./pages/cart";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/login";
import Register from "./pages/register";
import Checkout from "./pages/checkout";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  const [search, setSearch] = useState("");
   const productsRef = useRef(null);

  return (
    <> 
    
      <Navbar search={search} setSearch={setSearch} productsRef={productsRef} />


      <main className="app-shell">
        <Routes>
          
<Route
  path="/"
  element={<Home search={search}
  productsRef={productsRef} />}
/>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
       
    </>
  );
}

export default App;
