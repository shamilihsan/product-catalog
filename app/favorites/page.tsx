"use client";

import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ProductGrid from "../components/ProductGrid";
import { BASE_URL, removeFromFavoritesApi } from "../services/ApiService";
import Product from "../types/product";

export default function Favorites() {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response: AxiosResponse<Product[]> = await axios.get(
        `${BASE_URL}/favorites`
      );
      setFavorites(response.data);
    } catch (error) {
      console.error("Error fetching favorites:", error);
    } finally {
      setIsLoading(false);
    }
  };

  async function removeFromFavorites(product: Product) {
    try {
      await removeFromFavoritesApi(product);
      fetchData();
    } catch (error) {
      alert("Oops. Something went wrong");
    }
  }

  return (
    <MainContainer>
      {isLoading ? (
        <LoadingIndicator>Loading...</LoadingIndicator>
      ) : favorites.length > 0 ? (
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

const LoadingIndicator = styled.div`
  font-size: 1.5rem;
  color: #6b7280;
  text-align: center;
  margin: 3rem auto;
`;
