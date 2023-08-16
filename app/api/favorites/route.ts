import {
  addToFavorites,
  getFavorites,
  removeFromFavorites,
} from "@/app/models/favoriteModel";
import Product from "@/app/types/product";
import { NextResponse } from "next/server";

export function GET() {
  const favorites: Product[] = getFavorites();
  return NextResponse.json(favorites);
}

export async function POST(request: Request) {
  try {
    const product: Product = await request.json();

    if (addToFavorites(product)) {
      return NextResponse.json({ success: true, favorites: getFavorites() });
    } else {
      return NextResponse.json({ error: "Product is already in favorites" });
    }
  } catch (error) {
    return NextResponse.json({ error: "Server error" });
  }
}

export async function DELETE(request: Request) {
  try {
    const product: Product = await request.json();

    if (removeFromFavorites(product)) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: "Product not found in favorites" });
    }
  } catch (error) {
    return NextResponse.json({ error: "Server error" });
  }
}

// TODO - Send the correct status codes (201, 500 etc.)
