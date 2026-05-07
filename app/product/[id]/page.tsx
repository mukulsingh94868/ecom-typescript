"use client";
import { useContext } from "react";
import { ProductContext } from "../../../context/ProductContext";
import { CartContext } from "../../../context/CartContext";
import Link from "next/link";
import Image from "next/image";

const ProductDetail = () => {
  const productCtx = useContext(ProductContext);
  const cartCtx = useContext(CartContext);

  if (!productCtx || !cartCtx) return null;

  const { selectedProduct } = productCtx;
  const { addToCart } = cartCtx;

  if (!selectedProduct) {
    return <p>Product not found</p>;
  }

  return (
    <div className="max-w-5xl mx-auto my-5">
      <Link href="/" className="text-blue-500 mb-5 inline-block">
        ⬅ Back to Home
      </Link>

      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-2">
          <Image
            src={selectedProduct.images[0]}
            alt={selectedProduct.title}
            width={400}
            height={400}
            className="w-full h-auto object-cover object-center aspect-square"
          />
        </div>
        <div className="col-span-3">
          <h2 className="text-2xl text-black font-bold mb-2.5">
            {selectedProduct.title}
          </h2>
          <p className="text-base text-justify text-black/80">
            {selectedProduct.description}
          </p>
          <h3 className="text-2xl text-black font-bold my-5">
            ₹ {selectedProduct.price}
          </h3>
          <button
            onClick={() => addToCart(selectedProduct)}
            type="button"
            className="text-base text-white bg-blue-600 rounded-md px-5 py-1.5 cursor-pointer uppercase font-medium"
          >
            Add to My Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
