import { Blueprint } from "../blueprint/blueprint";
import { factory } from "../random/factory";

import { transform } from "./transform";

/**
 * Generate a mock
 */
export function generate<T>(blueprint: Blueprint<T>): T {
  // eslint-disable-next-line: no-unsafe-any no-null-keyword
  const mock: T = Object.create(null);

  Object.keys(blueprint).forEach(key => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const generator = factory(blueprint[key]);
    Object.assign(mock, { [key]: generator() });
  });

  return transform<T>(mock);
}
