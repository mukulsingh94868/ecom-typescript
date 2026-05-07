"use client";
import { useEffect, useState } from "react";
import { fetchProducts, fetchCategories } from "../lib/api";
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";
import { Product } from "../types/product";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
    fetchCategories().then(setCategories);
  }, []);

  const handleFilter = (categoryId?: string) => {
    fetchProducts(categoryId).then(setProducts);
  };

  return (
    <>
      <h1>Products</h1>

      <Filters categories={categories} onChange={handleFilter} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 20,
        }}
      >
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}
