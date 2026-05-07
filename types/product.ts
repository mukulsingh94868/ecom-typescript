export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}

export interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
}

export interface ProductContextType {
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product) => void;
}

export interface TProps {
  categories: any[];
  onChange: (categoryId?: string) => void;
}