import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { product } from "schemas/product.schema";
import { Model } from "mongoose";
import { nav } from "schemas/nav-bar.schema";

@Injectable()
export class ProductService {
  constructor(
    @InjectModel("Product") private readonly productModel: Model<product>,
    @InjectModel("NavBar") private readonly navModel: Model<nav>,
  ) {}

  async findById(id: string) {
    try {
      const product = await this.productModel.find({ id });
      return product;
    } catch (e) {
      throw e;
    }
  }

  async findByQuery(query: string) {
    try {
      const name = query.toLowerCase();
      const findByCategory = await this.navModel.find({ name });
      if (findByCategory[0]) {
        const category = findByCategory[0].category;
        const products = await this.productModel.find({ category });
        return { products, category };
      }
      if (!findByCategory[0]) {
        const company = query.toUpperCase();
        const findByCompany = await this.productModel.find({ company });
        if (findByCompany[0]) {
          const productCategory = findByCompany[0].category;
          return { products: findByCompany, category: productCategory, company };
        }
        return { message: "Ничего не найдено." };
      }
    } catch (e) {
      throw e;
    }
  }

  async findByIds(ids: string) {
    try {
      const idsArray = ids.split("+");
      const products = await this.productModel.find({
        $and: [{ id: { $in: idsArray } }],
      });
      return products;
    } catch (e) {
      throw e;
    }
  }

  async findByCategory(category: string) {
    try {
      const products = await this.productModel.find({ category });
      return products;
    } catch (e) {
      throw e;
    }
  }

  async findByCategoryAndCompany(category: string, company: string) {
    try {
      const products = await this.productModel.find({ category, company });
      return products;
    } catch (e) {
      throw e;
    }
  }

  async findByCustom(price: string, companies: string, category: string) {
    try {
      const companyArray = companies.split("+");
      const priceArray = price.split("+");
      const products = await this.productModel.find({
        $and: [
          { price: { $gte: Number(priceArray[0]) } },
          { price: { $lte: Number(priceArray[1]) } },
          { company: { $in: companyArray } },
          { category },
        ],
      });
      return products;
    } catch (e) {
      throw e;
    }
  }
  // maybe not needed
  async findAll() {
    try {
      const products = await this.productModel.find();
      return products;
    } catch (e) {
      throw e;
    }
  }
}
