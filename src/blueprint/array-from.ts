import { from } from './from';

/**
 * Returns an array of mocks from a previously registered `Blueprint`
 */
export function arrayFrom<T>(name: string, length: number): T[] {
  const ar = new Array(length).fill(0);

  return ar.map(() => from(name));
}
