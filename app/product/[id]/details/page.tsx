"use client";
import { useContext } from "react";
import { ProductContext } from "../../../../context/ProductContext";
import { CartContext } from "../../../../context/CartContext";
import Link from "next/link";

export default function ProductDetail() {
  const productCtx = useContext(ProductContext);
  const cartCtx = useContext(CartContext);

  if (!productCtx || !cartCtx) return null;

  const { selectedProduct } = productCtx;

  if (!selectedProduct) {
    return <p>Product not found</p>;
  }

  return (
    <>
      <Link href="/">⬅ Back to Home</Link>

      <h2>{selectedProduct.title}</h2>
      {selectedProduct.images[0]}
      <p>{selectedProduct.description}</p>
      <h3>₹ {selectedProduct.price}</h3>

      <button onClick={() => cartCtx.addToCart(selectedProduct)}>
        Add to My Cart
      </button>
    </>
  );
}
