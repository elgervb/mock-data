import { transform } from "../generate/transform";
import { factory } from "../random/factory";

type Closure = () => unknown;
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
  [P in keyof T]?: string | Closure;
};

type BlueprintTemplate<T> = {
  [P in keyof T]?: Closure;
};

const registry = new Map<string, BlueprintTemplate<unknown>>();

/**
 * Generate a mock
 */
export function register<T>(name: string, blueprint: Blueprint<T> | BlueprintTemplate<T>): void {
  const mock: BlueprintTemplate<T> = Object.create(null);

  Object.keys(blueprint).forEach(key => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment 
    // @ts-ignore
    const value = blueprint[key];
    const generator = (typeof value === 'function') ? value : factory(value);
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

  const mock: T = Object.create(null);

  Object.keys(blueprint).forEach(key => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    Object.assign(mock, { [key]: blueprint[key]() });
  });

  return transform<T>(mock);
}

/**
 * Returns an array of mocks from a previously registered `Blueprint`
 */
export function arrayFrom<T>(name: string, length: number): T[] {
  const ar = new Array(length).fill(0);

  return ar.map(() => from(name));
}
