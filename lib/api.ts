const BASE_URL = "https://api.escuelajs.co/api/v1";

export const fetchProducts = async (categoryId?: string) => {
  const url = categoryId
    ? `${BASE_URL}/products/?categoryId=${categoryId}`
    : `${BASE_URL}/products`;

  const res = await fetch(url);
  return res.json();
};

export const fetchCategories = async () => {
  const res = await fetch(`${BASE_URL}/categories`);
  return res.json();
};
