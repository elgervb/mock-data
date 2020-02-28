import { Blueprint } from "../blueprint/blueprint";

import { factory } from "./factory";
import { transform } from "./transform";

/**
 * Generate a mock
 */
export function generate<T>(blueprint: Blueprint<T>): T {
  // tslint:disable-next-line: no-unsafe-any no-null-keyword
  const mock: T = Object.create(null);

  Object.keys(blueprint).forEach(key => {
    // tslint:disable no-unsafe-any
    // tslint:disable-next-line: ban-ts-ignore only use it here, as blueprint[key] is not mappable to strng, number or Symbol
    // @ts-ignore
    const generator = factory(blueprint[key]);
    // tslint:enable no-unsafe-any
    Object.assign(mock, { [key]: generator() });
  });

  return transform<T>(mock);
}
