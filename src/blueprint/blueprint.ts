export type Closure<T, R> = (mock?: T) => R;

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
  [P in keyof T]?: Closure<T, T[P]>;
};

export type BlueprintConstantProperties<T> = {
  [P in keyof T]?: T[P];
};
