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

// tslint:disable: ban-ts-ignore no-console no-unsafe-any
// @ts-ignore
console.dir(user);
