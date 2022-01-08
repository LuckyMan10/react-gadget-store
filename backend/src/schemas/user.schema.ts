import * as mongoose from "mongoose";

export interface User {
  username: string;
  password: string;
  email: string;
  id: string;
}

export const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  id: String,
});
