"use client";
import { useContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ProductContext } from "../../../context/ProductContext";
import { CartContext } from "../../../context/CartContext";
import Link from "next/link";
import Image from "next/image";
import { fetchProductById } from "../../../lib/api";
import { Product } from "../../../types/product";

const ProductDetail = () => {
  const params = useParams();
  const productCtx = useContext(ProductContext);
  const cartCtx = useContext(CartContext);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  if (!productCtx || !cartCtx) return null;

  const { selectedProduct, setSelectedProduct } = productCtx;
  const { addToCart } = cartCtx;

  const loadProduct = async () => {
    const productId = Number(params?.id);
    if (!productId) {
      setLoading(false);
      return;
    }

    if (selectedProduct?.id === productId) {
      setProduct(selectedProduct);
      setLoading(false);
      return;
    }

    try {
      const fetchedProduct = await fetchProductById(productId);
      setProduct(fetchedProduct);
      setSelectedProduct(fetchedProduct);
    } catch (error) {
      console.error("Failed to fetch product details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProduct();
  }, [params?.id, selectedProduct, setSelectedProduct]);

  if (loading) {
    return <p>Loading product...</p>;
  }

  if (!product) {
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
            src={product.images[0]}
            alt={product.title}
            width={400}
            height={400}
            className="w-full h-auto object-cover object-center aspect-square"
          />
        </div>
        <div className="col-span-3">
          <h2 className="text-2xl text-black font-bold mb-2.5">
            {product.title}
          </h2>
          <p className="text-base text-justify text-black/80">
            {product.description}
          </p>
          <h3 className="text-2xl text-black font-bold my-5">
            ₹ {product.price}
          </h3>
          <button
            onClick={() => addToCart(product)}
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
