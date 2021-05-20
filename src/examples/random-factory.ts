import { factory, FactoryType } from "../random/factory";

interface User {
  active: boolean;
  created: Date;
  id: string;
  name: string;
}

const user: User = {
  active: factory<boolean>(FactoryType.boolean)(),
  created: factory<Date>(FactoryType.date)(),
  id: factory<string>(FactoryType.string)(),
  name: factory<string>(FactoryType.string)(),
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
console.dir(user);
