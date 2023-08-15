import axios from "axios";
import Product from "../types/product";
export const BASE_URL = "http://localhost:3000/api";

export const removeFromFavoritesApi = async (product: Product) => {
  await axios.delete(`${BASE_URL}/favorites`, { data: product });
};

export const addToFavoritesApi = async (product: Product) => {
  await axios.post(`${BASE_URL}/favorites`, product);
};
