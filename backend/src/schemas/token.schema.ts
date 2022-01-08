import * as mongoose from "mongoose";

export interface Token {
  userId: string;
  refreshToken: string;
}

export const TokenSchema = new mongoose.Schema({
  userId: String,
  refreshToken: String,
});
