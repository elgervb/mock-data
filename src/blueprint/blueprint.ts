import { generate } from "../generate/mock";

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
  [P in keyof T]?: ReturnType<Closure>;
};

/**
 * Registry with all the blueprints in it
 */
const registry = new Map<string, Blueprint<unknown>>();

/**
 * Generate a mock
 */
export function register<T>(name: string, blueprint: Blueprint<T>): void {
  registry.set(name, blueprint);
}

/**
 * Returns a mock from a previously registered `Blueprint`
 */
export function from<T>(name: string): T {
  const blueprint = registry.get(name);
  if (!blueprint) {
    throw new Error(`Cannot find blueprint for name ${name}`);
  }

  return generate<T>(blueprint);
}

/**
 * Returns an array of mocks from a previously registered `Blueprint`
 */
export function arrayFrom<T>(name: string, length: number): T[] {
  const ar = new Array(length).fill(0);

  return ar.map(() => from(name));
}
