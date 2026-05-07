"use client";
import { createContext, useState, ReactNode } from "react";
import { Product } from "../types/product";

interface ProductContextType {
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product) => void;
}

export const ProductContext = createContext<ProductContextType | null>(null);

export function ProductProvider({ children }: { children: ReactNode }) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <ProductContext.Provider value={{ selectedProduct, setSelectedProduct }}>
      {children}
    </ProductContext.Provider>
  );
}
