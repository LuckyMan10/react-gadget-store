import * as uuid from "uuid";

export class IdService {
  getId(): string {
    return uuid.v4();
  }
}
