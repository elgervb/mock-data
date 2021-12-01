import { Blueprint } from '../blueprint/blueprint';

import { generate } from './mock';

/**
 * Generate a n length of Blueprints
 */
export function generateArray<T>(blueprint: Blueprint<T>, length: number): T[] {
  const ar = new Array(length).fill(0);

  return ar.map(() => generate(blueprint));
}
