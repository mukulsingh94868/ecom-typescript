"use client";
import Link from "next/link";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Product } from "../types/product";
import Image from "next/image";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const context = useContext(ProductContext);
  if (!context) return null;

  const { setSelectedProduct } = context;

  return (
    <Link href={`/product/${product.id}`}>
      <button
        type="button"
        onClick={() => setSelectedProduct(product)}
        className="border shadow w-full text-left border-black/10 rounded-md cursor-pointer"
      >
        <Image
          className="w-full rounded-t-md object-cover object-center aspect-[16/12]"
          src={product.images[0]}
          alt={product.title}
          width={200}
          height={200}
        />
        <div className="p-4 space-y-2.5">
          <h3 className="text-xl font-semibold text-black">{product.title}</h3>
          <p className="text-lg font-medium text-black">₹ {product.price}</p>
        </div>
      </button>
    </Link>
  );
}

export default ProductCard;
