export class ErrorsService {
  existUser(): string {
    return "Пользователь с такой почтой уже существует.";
  }
  registration(): string {
    return "Произошла ошибка при регистрации. Повторите попытку позже.";
  }
  login(): string {
    return "Пользователь с таким email не найден.";
  }
  invalidPassword(): string {
    return "Неверный пароль.";
  }
  authorization(): string {
    return "Требуется авторизация.";
  }
  unknownUser(): string {
    return "Пользователь не найден.";
  }
  logout(): string {
    return "При выходе из аккаунта произошла ошибка.";
  }
}
