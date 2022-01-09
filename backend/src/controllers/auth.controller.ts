import { Injectable, Scope, Inject, Body } from "@nestjs/common";
import { Controller, Get, Post, Put, Delete, Res, Req } from "@nestjs/common";
import { RegistrationDto } from "dtos/registration.dto";
import { HttpException } from "@nestjs/common/exceptions/http.exception";
import { HttpStatus } from "@nestjs/common";
import { AuthService } from "services/auth.service";
import { Request, Response } from "express";
import { LoginDto } from "dtos/login.dto";
import { ErrorsService } from "services/errors.service";

@Controller("auth")
@Injectable()
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly errorsService: ErrorsService,
  ) {}

  @Post("registration")
  async registration(
    @Res({ passthrough: true }) response: Response,
    @Body() registrationDto: RegistrationDto,
  ) {
    try {
      const userData = await this.authService.registration(registrationDto);
      return userData;
    } catch (e) {
      return new HttpException({ message: e }, HttpStatus.BAD_REQUEST);
    }
  }

  @Post("login")
  async login(@Res({ passthrough: true }) response: Response, @Body() loginDto: LoginDto) {
    try {
      const userData = await this.authService.login(loginDto);
      return userData;
    } catch (e) {
      return new HttpException({ message: e }, HttpStatus.BAD_REQUEST);
    }
  }

  @Get("refresh")
  async refresh(@Res({ passthrough: true }) response: Response, @Req() request: Request) {
    try {
      const authorization = request.headers.authorization;
      if (!authorization) {
        throw this.errorsService.authorization();
      }
      const refresh = authorization.split(" ")[1];
      const userData = await this.authService.refresh(refresh);
      return userData;
    } catch (e) {
      return new HttpException({ message: e }, HttpStatus.UNAUTHORIZED);
    }
  }

  @Get("logout")
  async logout(@Res({ passthrough: true }) response: Response, @Req() request: Request) {
    try {
      const authorization = request.headers.authorization;
      if (!authorization) {
        throw this.errorsService.authorization();
      }
      const refresh = authorization.split(" ")[1];
      const logoutUser = await this.authService.logout(refresh);
      return logoutUser;
    } catch (e) {
      return new HttpException({ message: e }, HttpStatus.FORBIDDEN);
    }
  }
}
