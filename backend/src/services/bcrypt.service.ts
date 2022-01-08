import * as bcrypt from "bcrypt";

export class BcryptService {
  async hash(password: string, salt: number): Promise<string> {
    const hashPassword = bcrypt.hash(password, salt);
    return hashPassword;
  }
  async compare(password: string, passwordFromDb: string): Promise<boolean> {
    const isPassEquals = await bcrypt.compare(password, passwordFromDb);
    return isPassEquals;
  }
}
