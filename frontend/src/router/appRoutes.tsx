import { Home } from "pages/home";
import { Product } from "pages/product";

export enum appEnum {
  HOME = "/",
  PRODUCT = "/product"
}

export const appRoutes = [
  {
    id: 1,
    path: appEnum.HOME,
    name: "home",
    Component: <Home />
  },
  {
    id: 2,
    path: `${appEnum.PRODUCT}/:id`,
    name: "product",
    Component: <Product />
  }
];
