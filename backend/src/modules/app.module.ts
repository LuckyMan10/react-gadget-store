import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { navSchema } from "schemas/nav-bar.schema";
import { AppController } from "controllers/app.controller";
import { AppService } from "services/app.service";

@Module({
  imports: [MongooseModule.forFeature([{ name: "NavBar", schema: navSchema }])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
