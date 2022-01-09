import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { productSchema } from "schemas/product.schema";
import { navSchema } from "schemas/nav-bar.schema";
import { ProductController } from "controllers/product.controller";
import { ProductService } from "services/product.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "Product", schema: productSchema },
      { name: "NavBar", schema: navSchema },
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
