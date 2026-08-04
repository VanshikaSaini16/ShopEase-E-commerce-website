import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    if (typeof window === "undefined") return [];
    const storedCart = window.localStorage.getItem("shopease-cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    window.localStorage.setItem("shopease-cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === product.id);
      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, amount) => {
    setCart((currentCart) =>
      currentCart.flatMap((item) => {
        if (item.id !== productId) return item;
        const nextQuantity = item.quantity + amount;
        return nextQuantity > 0 ? [{ ...item, quantity: nextQuantity }] : [];
      })
    );
  };

  const clearCart = () => setCart([]);

  const itemCount = useMemo(() => cart.reduce((total, item) => total + item.quantity, 0), [cart]);
  const total = useMemo(() => cart.reduce((amount, item) => amount + item.price * item.quantity, 0), [cart]);

  const value = useMemo(
    () => ({ cart, addToCart, removeFromCart, updateQuantity, clearCart, itemCount, total }),
    [cart, itemCount, total]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}

