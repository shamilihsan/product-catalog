"use client";

import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ProductGrid from "../components/ProductGrid";
import { BASE_URL, removeFromFavoritesApi } from "../services/ApiService";
import Product from "../types/product";

function Favorites() {
  const [favorites, setFavorites] = useState<Product[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response: AxiosResponse<Product[]> = await axios.get(
      `${BASE_URL}/favorites`
    );
    setFavorites(response.data);
  };

  async function removeFromFavorites(product: Product) {
    try {
      await removeFromFavoritesApi(product);
      alert(`Product ${product.name} was removed from favorites`);
      fetchData();
    } catch (error) {
      alert("Oops. Something went wrong");
    }
  }

  return (
    <MainContainer>
      {favorites.length > 0 ? (
        <ProductGrid
          products={favorites}
          isFavorite
          removeFromFavorites={removeFromFavorites}
        />
      ) : (
        <NoFavoritesMessage>No favorite products found</NoFavoritesMessage>
      )}
    </MainContainer>
  );
}

export default Favorites;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100%;
  padding: 6rem;
`;

const NoFavoritesMessage = styled.p`
  font-size: 1.5rem;
  color: #6b7280;
  text-align: center;
  margin: 3rem auto;
`;
