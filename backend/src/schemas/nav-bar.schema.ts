import * as mongoose from "mongoose";

export interface nav {
  id: string;
  category: string;
  name: string;
  companies: string[];
}

export const navSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    category: { type: String, required: true },
    name: { type: String, required: true },
    companies: [{ type: String, required: true }],
  },
  { collection: "navbarData" },
);
