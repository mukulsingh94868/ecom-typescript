"use client";
import { useEffect, useState } from "react";
import { fetchProducts, fetchCategories } from "../lib/api";
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";
import { Product } from "../types/product";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined,
  );

  const fetchProductsData = async () => {
    try {
      const response = await fetchProducts();
      setProducts(response);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchCategoriesData = async () => {
    try {
      const response = await fetchCategories();
      setCategories(response);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchProductsData();
    fetchCategoriesData();
  }, []);

  const handleFilter = (categoryId?: string) => {
    setSelectedCategory(categoryId);
    fetchProducts(categoryId)
      .then((res) => setProducts(res))
      .catch((err) => console.error("Error fetching filtered products:", err));
  };

  return (
    <>
      <div className="max-w-5xl w-full mx-auto my-5 flex items-center">
        <h1 className="text-2xl font-bold text-black">Products</h1>
        <Filters categories={categories} onChange={handleFilter} />
      </div>

      {selectedCategory && products.length === 0 ? (
        <div className="max-w-5xl mx-auto p-4 text-center text-gray-600">
          No product found
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4 max-w-5xl mx-auto">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
