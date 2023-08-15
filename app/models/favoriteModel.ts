import Product from "../types/product";

let favorites: Product[] = [];

export const getFavorites = () => favorites;

export const addToFavorites = (product: Product) => {
  if (!favorites.some((fav) => fav.id === product.id)) {
    favorites.push(product);
    return true;
  }
  return false;
};

export const removeFromFavorites = (product: Product) => {
  const index = favorites.findIndex((fav) => fav.id === product.id);
  if (index !== -1) {
    favorites.splice(index, 1);
    return true;
  }
  return false;
};
