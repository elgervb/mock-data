import { randomBoolean } from "../random/boolean";
import { randomDate } from "../random/date";
import { randomGuid } from "../random/guid";
import { randomString } from "../random/string";

interface User {
  active: boolean;
  created: Date;
  id: string;
  name: string;
}

const user: User = {
  active: randomBoolean(),
  created: randomDate(),
  id: randomGuid(),
  name: randomString(10),
};

// tslint:disable: ban-ts-ignore no-console no-unsafe-any
// @ts-ignore
console.dir(user);
