import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthController } from "controllers/auth.controller";
import { AuthService } from "services/auth.service";
import { BcryptService } from "services/bcrypt.service";
import { ErrorsService } from "services/errors.service";
import { IdService } from "services/id.service";
import { UserSchema } from "schemas/user.schema";
import { TokenSchema } from "schemas/token.schema";
import { TokenService } from "services/token.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "User", schema: UserSchema },
      { name: "Token", schema: TokenSchema },
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService, BcryptService, ErrorsService, IdService, TokenService],
})
export class AuthModule {}
