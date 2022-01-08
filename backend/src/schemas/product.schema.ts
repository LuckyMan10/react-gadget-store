import * as mongoose from "mongoose";

export interface product {
  company: string;
  productName: string;
  price: number;
  images: string[];
  description: Array<{
    [key: string]: string;
  }>;
  category: string;
  categoryRus: string;
  id: string;
}

export const productSchema = new mongoose.Schema(
  {
    company: { type: String, required: true },
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    images: [{ type: String, required: true }],
    description: [{ type: Object }],
    category: { type: String, required: true },
    categoryRus: { type: String, required: true },
    id: { type: String, required: true },
  },
  { collection: "gadgets" },
);
