import { IsString, IsNotEmpty } from "class-validator";

export class FindById {
  @IsString()
  @IsNotEmpty()
  id: string;
}

export class UserQuery {
  @IsString()
  @IsNotEmpty()
  query: string;
}

export class IdsQuery {
  @IsString()
  @IsNotEmpty()
  ids: string;
}

export class FindByCategory {
  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  company: string;
}

export class CustomSearch {
  @IsString()
  @IsNotEmpty()
  price: string;

  @IsString()
  @IsNotEmpty()
  companies: string;

  @IsString()
  @IsNotEmpty()
  category: string;
}
