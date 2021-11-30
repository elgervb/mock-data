import { Blueprint } from "../blueprint/blueprint";

import { transform } from "./transform";

/**
 * Generate a mock from a blueprint
 */
export function generate<T>(blueprint: Blueprint<T>): T {
  const mock: T = Object.create(null);

  Object.keys(blueprint).forEach(key => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const generator = blueprint[key];
    Object.assign(mock, { [key]: generator() });
  });

  return transform<T>(mock);
}
