"use client";

import axios, { AxiosResponse } from "axios";
import ProductGrid from "./components/ProductGrid";
import Product from "./types/product";
import styled from "styled-components";
import { BASE_URL, addToFavoritesApi } from "./services/ApiService";

export default async function Home() {
  const response: AxiosResponse<Product[]> = await axios.get(
    `${BASE_URL}/products`
  );

  const addToFavorites = async (product: Product) => {
    try {
      await addToFavoritesApi(product);
      // Ideally add a snackbar instead of a generic alert
      alert(`Product ${product.name} added to favorites`);
    } catch (error) {
      alert("Oops. Something went wrong");
    }
  };

  return (
    <MainContainer>
      <ProductGrid products={response.data} addToFavorites={addToFavorites} />
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
