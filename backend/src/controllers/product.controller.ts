import { Controller, Get, Injectable, Res, Query } from "@nestjs/common";
import { HttpException } from "@nestjs/common/exceptions/http.exception";
import { HttpStatus } from "@nestjs/common";
import { Request, Response } from "express";
import { FindById, UserQuery, IdsQuery, FindByCategory, CustomSearch } from "dtos/query.dto";
import { ProductService } from "services/product.service";

@Controller("products")
@Injectable()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get("find/id")
  async findById(@Query() query: FindById) {
    try {
      const { id } = query;
      const product = await this.productService.findById(id);
      return product;
    } catch (e) {
      return new HttpException({ message: e }, HttpStatus.BAD_REQUEST);
    }
  }

  @Get("find/query")
  async findByUserQuery(@Query() userQuery: UserQuery) {
    try {
      const { query } = userQuery;
      const products = await this.productService.findByQuery(query);
      return products;
    } catch (e) {
      return new HttpException({ message: e }, HttpStatus.BAD_REQUEST);
    }
  }

  @Get("find/ids")
  async findByIdList(@Query() query: IdsQuery) {
    try {
      const { ids } = query;
      const products = await this.productService.findByIds(ids);
      return products;
    } catch (e) {
      return new HttpException({ message: e }, HttpStatus.BAD_REQUEST);
    }
  }

  @Get("find/category")
  async findByCategory(@Query() query: FindByCategory) {
    try {
      const { category, company } = query;
      if (category && !company) {
        const products = await this.productService.findByCategory(category);
        return products;
      }
      if (category && company) {
        const toUpperCompany = company.toUpperCase();
        const products = await this.productService.findByCategoryAndCompany(
          category,
          toUpperCompany,
        );
        return products;
      }
    } catch (e) {
      return new HttpException({ message: e }, HttpStatus.BAD_REQUEST);
    }
  }

  @Get("find/customSearch")
  async customSearch(@Query() query: CustomSearch) {
    try {
      const { price, companies, category } = query;
      const products = await this.productService.findByCustom(price, companies, category);
      return products;
    } catch (e) {
      return new HttpException({ message: e }, HttpStatus.BAD_REQUEST);
    }
  }

  // maybe not needed
  @Get("find/all")
  async findAll() {
    try {
      const products = await this.productService.findAll();
      return products;
    } catch (e) {
      return new HttpException({ message: e }, HttpStatus.BAD_REQUEST);
    }
  }
}
