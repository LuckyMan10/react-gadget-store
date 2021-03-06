import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "./auth.module";
import { ProductModule } from "./product.module";
import { AppModule } from "./app.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_URL),
    AuthModule,
    ProductModule,
    AppModule,
  ],
  controllers: [],
  providers: [],
})
export class RootModule {}
