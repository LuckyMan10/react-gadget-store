import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { nav } from "schemas/nav-bar.schema";

@Injectable()
export class AppService {
  constructor(@InjectModel("NavBar") private readonly navBarModel: Model<nav>) {}
  async getNav() {
    try {
      const navData = await this.navBarModel.find();
      return navData;
    } catch (e) {
      throw e;
    }
  }
}
