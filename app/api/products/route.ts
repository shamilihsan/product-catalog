import Product from "@/app/types/product";
import { NextResponse } from "next/server";
import productsData from "../../../public/products.json";

export function GET() {
  // Load products from json file
  const products: Product[] = productsData;
  return NextResponse.json(products);
}
