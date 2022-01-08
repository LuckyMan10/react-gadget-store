import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class RegistrationDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @Length(5, 15)
  password: string;

  @IsNotEmpty()
  @Length(3, 15)
  username: string;
}
