import { retrieve } from './registry';
import { generate } from '../generate';

/**
 * Returns a mock from a previously registered `Blueprint`
 */
export function from<T>(name: string): T {
  const blueprint = retrieve(name);
  if (!blueprint) {
    throw new Error(`Cannot find blueprint for name ${name}`);
  }

  return generate<T>(blueprint);
}
