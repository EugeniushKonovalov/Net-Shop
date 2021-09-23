import { $host } from "./index";

export const createType = async (type) => {
  const { data } = await $host.post("http://localhost:5000/api/type", type);
  return data;
};
export const fetchTypes = async () => {
  const { data } = await $host.get("http://localhost:5000/api/type");
  return data;
};
export const createBrand = async (brand) => {
  const { data } = await $host.post("http://localhost:5000/api/brand", brand);
  return data;
};
export const fetchBrands = async () => {
  const { data } = await $host.get("http://localhost:5000/api/brand");
  return data;
};
export const createProduct = async (product) => {
  const { data } = await $host.post(
    "http://localhost:5000/api/product",
    product
  );
  return data;
};
export const fetchProducts = async (typeId, brandId, page, limit) => {
  const { data } = await $host.get("http://localhost:5000/api/product", {
    params: {
      typeId,
      brandId,
      page,
      limit,
    },
  });
  return data;
};
export const fetchOneProducts = async (id) => {
  const { data } = await $host.get("http://localhost:5000/api/product/" + id);
  return data;
};

export const createBasket = async (basket) => {
  const { data } = await $host.post("http://localhost:5000/api/cart", basket);
  return data;
};
export const fetchBaskets = async () => {
  const { data } = await $host.get("http://localhost:5000/api/cart");
  return data;
};
export const removeBaskets = async () => {
  const { data } = await $host.delete("http://localhost:5000/api/cart");
  return data;
};
