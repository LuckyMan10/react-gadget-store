import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { RegistrationDto } from "dtos/registration.dto";
import { User } from "schemas/user.schema";
import { Model } from "mongoose";
import { BcryptService } from "./bcrypt.service";
import { IdService } from "./id.service";
import { ErrorsService } from "./errors.service";
import { registrationData } from "interfaces/registrationData.interface";
import { TokenService } from "./token.service";
import { LoginDto } from "dtos/login.dto";

@Injectable()
export class AuthService {
  constructor(
    @InjectModel("User") private readonly userModel: Model<User>,
    private readonly bcryptService: BcryptService,
    private readonly idService: IdService,
    private readonly errorsService: ErrorsService,
    private readonly tokenService: TokenService,
  ) {}
  async registration(user: RegistrationDto) {
    try {
      const { email, password, username } = user;
      const candidate = await this.userModel.findOne({ email });
      if (candidate) {
        throw this.errorsService.existUser();
      }
      const hashPassword = await this.bcryptService.hash(password, 2);
      const id = this.idService.getId();
      const userData: registrationData = { email, username, id, password: hashPassword };
      const saveUser = await this.userModel.create(userData);
      if (!(saveUser && saveUser._id)) {
        throw this.errorsService.registration();
      }
      const tokens = this.tokenService.generateTokens(userData);
      await this.tokenService.saveToken(userData.id, tokens.refreshToken);
      delete userData.password;
      return { ...tokens, user: userData };
    } catch (e) {
      throw e;
    }
  }
  async login(user: LoginDto) {
    try {
      const { email, password } = user;
      const candidate = await this.userModel.findOne({ email });
      if (!user) {
        throw this.errorsService.login();
      }
      const { email: userEmail, username, password: dbPassword, id } = candidate;
      const isPassEquals = await this.bcryptService.compare(password, dbPassword);
      if (!isPassEquals) {
        throw this.errorsService.invalidPassword();
      }
      const hashPassword = await this.bcryptService.hash(password, 2);
      const updatePassword = await this.userModel.findOneAndUpdate(
        { userId: id },
        { password: hashPassword },
        { new: true },
      );
      const userData = { email: userEmail, username, password: updatePassword.password, id };
      const tokens = this.tokenService.generateTokens({ ...userData });
      await this.tokenService.saveToken(userData.id, tokens.refreshToken);
      delete userData.password;
      return { ...tokens, user: userData };
    } catch (e) {
      throw e;
    }
  }
  async refresh(refresh: string) {
    try {
      const userData = this.tokenService.validateRefreshToken(refresh);
      const tokenFromDb = await this.tokenService.findToken(refresh);
      if (!userData || !tokenFromDb) {
        throw this.errorsService.authorization();
      }
      const user = await this.userModel.findOne({ id: userData.id });
      if (!user) {
        throw this.errorsService.unknownUser();
      }
      if (user) {
        const { username, password, email, id } = user;
        const tokens = this.tokenService.generateTokens({ username, password, email, id });
        await this.tokenService.saveToken(id, tokens.refreshToken);
        return { ...tokens, user: { username, email, id } };
      }
    } catch (e) {
      throw e;
    }
  }
  async logout(refresh: string) {
    try {
      const token = await this.tokenService.removeToken(refresh);
      if (token && token.deletedCount === 1) {
        return { message: "Вы вышли из аккаунта" };
      } else {
        throw this.errorsService.logout();
      }
    } catch (e) {
      throw e;
    }
  }
}
