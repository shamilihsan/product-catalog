# Next.js Product Catalog App

## Description

This is a sample Next.js application that demonstrates the implementation of a product catalog with the ability to add and remove products from favorites.

## Tools Used

- Next.js: A React framework for building server-rendered applications.
- Styled Components: A CSS-in-JS library for styling React components.
- Axios: A promise-based HTTP client for making API requests.
- FontAwesome: A library for adding icons to an application.

## Getting Started

### Prerequisites

- Node.js: Make sure you have Node.js installed on your machine.

### Installation

To run the app locally, follow these steps:

1. Clone the repository:

```bash

git  clone  https://github.com/shamilihsan/product-catalog.git

```

2. Navigate to the project directory:

```bash

cd product-catalog

```

3. Install the dependencies:

```bash

npm install

```

4. Start the development server:

```bash

npm run dev

```

5. Open your browser and go to `http://localhost:3000` to access the app.

## Features

- View a list of products with their details.
- Add a product to favorites by clicking the heart icon.
- Remove a product from favorites by clicking the X icon (available in the favorites page).

## API Endpoints

- `GET /products`: Fetches a list of products from the server.
- `POST /favorites`: Adds a product to the favorites list.
- `DELETE /favorites`: Removes a product from the favorites list.

## Directory Structure

- `api/`: Houses the API routes
- `components/`: Contains React components used in the app.
- `favorites/`: Favorites page
- `models/`: Contains functions that manage a list of favorite products using an in-memory approach.
- `services/`: Provides endpoint definitions for the app to consume
- `types/`: Contains TypeScript type definitions.

## Improvements

- Better error handling
  - Send the correct status codes for both error and successful operations
  - Display a message if the product is already added as favorite
- UI
  - Add a snackbar/toast instead of alert messages
  - Configure styled-components to be rendered on the server side correctly in NextJS 13 (current implementation causes flickering and UI issues on initial load)
  - Add a spinner to the loading indicator
