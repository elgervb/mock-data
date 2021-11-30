import { randomBoolean, randomDate, randomGuid, randomString } from "../random";

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

console.dir(user);
