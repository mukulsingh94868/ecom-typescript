'use client';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Footer() {
  const context = useContext(CartContext);
  if (!context) return null;

  const total = context.cart.reduce((sum, p) => sum + p.price, 0);

  return (
    <footer style={{ marginTop: 40, borderTop: '1px solid #ccc' }}>
      🛒 Items: {context.cart.length} | Total: ₹ {total}
    </footer>
  );
}