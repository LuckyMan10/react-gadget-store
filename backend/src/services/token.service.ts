import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Token } from "schemas/token.schema";
import { Model } from "mongoose";
import { registrationData } from "interfaces/registrationData.interface";
import * as jwt from "jsonwebtoken";

@Injectable()
export class TokenService {
  constructor(@InjectModel("Token") private readonly tokenModel: Model<Token>) {}

  generateTokens(userData: registrationData): { accessToken: string; refreshToken: string } {
    const accessToken = jwt.sign(userData, process.env.JWT_ACCESS_SECRET, {
      expiresIn: "1d",
    });
    const refreshToken = jwt.sign(userData, process.env.JWT_REFRESH_SECRET, {
      expiresIn: "30d",
    });
    return {
      accessToken,
      refreshToken,
    };
  }
  validateAccessToken(token: string) {
    try {
      const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET) as registrationData;
      return userData;
    } catch (e) {
      throw e;
    }
  }
  validateRefreshToken(token: string) {
    try {
      const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET) as registrationData;
      return userData;
    } catch (e) {
      throw e;
    }
  }
  async saveToken(userId: string, refreshToken: string) {
    try {
      const tokenData = await this.tokenModel.findOne({ userId });
      if (tokenData) {
        tokenData.refreshToken = refreshToken;
        return tokenData.save();
      }
      const token = await this.tokenModel.create({ userId, refreshToken });
      return token;
    } catch (e) {
      throw e;
    }
  }
  async removeToken(refreshToken: string) {
    try {
      const tokenData = await this.tokenModel.deleteOne({ refreshToken });
      return tokenData;
    } catch (e) {
      throw e;
    }
  }
  async findToken(refreshToken: string) {
    try {
      const tokenData = await this.tokenModel.findOne({ refreshToken });
      return tokenData;
    } catch (e) {
      throw e;
    }
  }
}
