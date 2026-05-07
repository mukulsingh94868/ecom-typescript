"use client";
import Link from "next/link";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Product } from "../types/product";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const context = useContext(ProductContext);
  if (!context) return null;

  const { setSelectedProduct } = context;

  return (
    <Link href={`/product/${product.id}/details`}>
      <div
        onClick={() => setSelectedProduct(product)}
        style={{ border: "1px solid #ccc", padding: 10 }}
      >
        <h3>{product.title}</h3>
        {product.images[0]}
        <p>₹ {product.price}</p>
      </div>
    </Link>
  );
}
