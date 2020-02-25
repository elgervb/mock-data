import { factory } from "./factory";
import { transform } from "./transform";

export interface Blueprint {
  [key: string]: string;
}

// TODO: checkout if we can do something like this
// Type Blueprint<T> = {
//   [P in keyof T]?: string ;
// };

/**
 * Generate a mock
 */
export function generate<T>(blueprint: Blueprint): T {
  // tslint:disable-next-line: no-unsafe-any no-null-keyword
  const mock: T = Object.create(null);

  Object.keys(blueprint).forEach((key) => {
    const generator = factory(blueprint[key]);
    Object.assign(mock, { [key]: generator() });
  });

  return transform<T>(mock);
}
