# ShopEase Design Plan

## Project Goal
Build a responsive e-commerce storefront using React + Vite + React Router + Context API + Tailwind CSS.

## Features implemented
- Home page with product grid from Fake Store API
- Category filter with All Products option
- Product details route at /product/:id
- Cart with add/remove/increase/decrease using Context API
- Cart persistence with localStorage
- Responsive navbar and footer

## File structure
- src/components/Navbar.jsx -> navigation bar
- src/components/Hero.jsx -> landing banner
- src/components/ProductCard.jsx -> product card UI
- src/components/ProductGrid.jsx -> product listing wrapper
- src/components/LoadingSpinner.jsx -> loading state
- src/pages/Home.jsx -> home page and category filtering
- src/pages/ProductDetails.jsx -> product detail page
- src/pages/Cart.jsx -> cart page
- src/context/CartContext.jsx -> global cart state
- src/App.jsx -> route definitions
