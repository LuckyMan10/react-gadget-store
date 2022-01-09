import { Controller, Get, Injectable } from "@nestjs/common";
import { HttpException } from "@nestjs/common/exceptions/http.exception";
import { HttpStatus } from "@nestjs/common";
import { AppService } from "services/app.service";

@Controller("app")
@Injectable()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("nav")
  async getNavData() {
    try {
      const navData = await this.appService.getNav();
      return navData;
    } catch (e) {
      return new HttpException({ message: e }, HttpStatus.FORBIDDEN);
    }
  }
}
