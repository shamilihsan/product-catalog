"use client";

import { faHeart, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Product from "../types/product";

interface PropTypes {
  products: Product[];
  isFavorite?: boolean;
  addToFavorites?: (product: Product) => Promise<void>;
  removeFromFavorites?: (product: Product) => void;
}

// If `isFavorite` is true, `addToFavorites` is undefined, and `removeFromFavorites` is required.
type FavoriteGridProps = PropTypes & {
  isFavorite: true;
  addToFavorites?: undefined;
  removeFromFavorites: (product: Product) => void;
};

// If `isFavorite` is false or undefined, `addToFavorites` is required, and `removeFromFavorites` is undefined.
type RegularProductGridProps = PropTypes & {
  isFavorite?: false;
  addToFavorites: (product: Product) => void;
  removeFromFavorites?: undefined;
};

type ProductGridPropsUnion = FavoriteGridProps | RegularProductGridProps;

export default function ProductGrid({
  products,
  isFavorite,
  addToFavorites,
  removeFromFavorites,
}: ProductGridPropsUnion) {
  return (
    <Container>
      <Grid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            {isFavorite ? (
              <FavoriteIcon
                icon={faTimes}
                onClick={() => removeFromFavorites(product)}
              />
            ) : (
              <FavoriteIcon
                icon={faHeart}
                onClick={() => addToFavorites(product)}
              />
            )}

            <img
              src={`https://picsum.photos/id/${product.id}/200`}
              alt={product.name}
            />
            <div className="description">
              <p>{product.categories.join(", ")}</p>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <div className="price">${product.price.toFixed(2)}</div>
            </div>
          </ProductCard>
        ))}
      </Grid>
    </Container>
  );
}

const Container = styled.div``;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const ProductCard = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 10rem;
    object-fit: cover;
  }

  .description {
    padding: 1rem;

    p {
      color: #6b7280;
      font-size: 0.875rem;
    }

    h2 {
      color: #1a202c;
      font-size: 1.125rem;
      font-weight: 600;
      margin-top: 0.5rem;
    }

    .price {
      color: #1f2937;
      font-size: 1.25rem;
      font-weight: 600;
      margin-top: 1rem;
    }
  }
`;

const FavoriteIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-size: 1rem;
  color: #ff5733;
  cursor: pointer;
  background-color: #ffffff;
  border: 1px solid #ff5733;
  border-radius: 50%;
  padding: 0.5rem;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #ff5733;
    color: #ffffff;
  }
`;
