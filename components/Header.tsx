"use client";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const context = useContext(CartContext);
  if (!context) return null;

  const total = context.cart.reduce((sum, p) => sum + p.price, 0);
  return (
    <header>
      <div className="max-w-5xl mx-auto flex items-center">
        🛒 Items: {context.cart.length}
        <div className="text-2xl text-black ms-auto">Total: ₹ {total}</div>
      </div>
    </header>
  );
};

export default Header;
