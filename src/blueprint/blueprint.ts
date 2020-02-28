import { transform } from "../generate/transform";
import { factory } from "../random/factory";

/**
 * Blueprint for a model to mock. Use the key-names of the type and value must be a string (eg. the type to generate)
 *
 * Example:
 * ```
 * export interface A {
 *   a: number;
 *   b: string;
 *   c: Date;
 * }
 * const bp: Blueprint<A> = {
 *   a: 'number', // ok
 *   b: 'guid',   // ok
 *   d: 'string'  // => error: no such property on interface A
 * }
 * ```
 */
export type Blueprint<T> = {
  [P in keyof T]?: string;
};

type BlueprintTemplate<T> = {
  [P in keyof T]?: () => unknown;
};

const registry = new Map<string, BlueprintTemplate<unknown>>();

/**
 * Generate a mock
 */
export function register<T>(name: string, blueprint: Blueprint<T>): void {
  // tslint:disable-next-line: no-unsafe-any no-null-keyword
  const mock: BlueprintTemplate<T> = Object.create(null);

  Object.keys(blueprint).forEach(key => {
    // tslint:disable no-unsafe-any
    // tslint:disable-next-line: ban-ts-ignore only use it here, as blueprint[key] is not mappable to strng, number or Symbol
    // @ts-ignore
    const generator = factory(blueprint[key]);
    // tslint:enable no-unsafe-any
    Object.assign(mock, { [key]: generator });
  });

  registry.set(name, mock);
}

/**
 * Returns a mock from a previously registered `Blueprint`
 */
export function from<T>(name: string): T {
  const blueprint = registry.get(name);
  if (!blueprint) {
    throw new Error(`Cannot find blueprint for name ${name}`);
  }

  // tslint:disable-next-line: no-unsafe-any no-null-keyword
  const mock: T = Object.create(null);

  Object.keys(blueprint).forEach(key => {
    // tslint:disable no-unsafe-any
    // tslint:disable-next-line: ban-ts-ignore only use it here, as blueprint[key] is not mappable to strng, number or Symbol
    // @ts-ignore
    Object.assign(mock, { [key]: blueprint[key]() });
    // tslint:enable no-unsafe-any
  });

  return transform<T>(mock);
}
