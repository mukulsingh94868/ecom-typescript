# E-Commerce Typescript App

This is a simple Next.js e-commerce app built with TypeScript. It demonstrates:

- fetching products and categories from a remote API
- filtering products by category
- storing selected product state for a detail page
- adding products to a cart using React context
- displaying cart totals in a header

## Data fetching flow

1. API helper: `lib/api.ts`
   - `fetchProducts(categoryId?)` fetches products from `https://api.escuelajs.co/api/v1/products`
   - `fetchCategories()` fetches categories from `https://api.escuelajs.co/api/v1/categories`
   - When a `categoryId` is provided, products are requested with `?categoryId=` and it shows the product detail by Id.

2. Home page: `app/page.tsx`
   - `useEffect` loads all products and categories on first render and there is the dropdown of categories, which shows all the categories of prodcuts, when categories is select, it filters the whole data and render the selected data.
   - `handleFilter(categoryId?)` updates the selected category and refetches products.
   - If a filter is active and there are no matching products, the page shows `No product found`.
   - Otherwise the product grid is rendered.

3. Product listing: `components/ProductCard.tsx`
   - Each product card links to the product detail page.
   - Clicking a card sets the selected product in `ProductContext`.
   - it renders all the data, but to show only, image, title, description and price with "Add to Cart" button.
   - Click on "Add to Cart" button, it add the quantity and price to the header section.

## Cart behavior

1. Cart context: `context/CartContext.tsx`
   - Provides `cart`, `addToCart(product)`.
   - `cart` is stored in React state inside the provider.

2. Product detail page: `app/product/[id]/page.tsx`
   - Reads the selected product from `ProductContext`.
   - Clicking `Add to My Cart` calls `addToCart(selectedProduct)`.

3. Header summary: `components/Header.tsx`
   - Reads the cart from `CartContext`.
   - Calculates item count and total price.
   - Renders the summary in the header.

## Notes

- The app relies on `ProductContext` to keep a selected product available for the detail page.
- Remote images must be allowed in `next.config.ts` for `next/image` to load external URLs.
