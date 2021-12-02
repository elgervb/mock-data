import { retrieve } from './registry';
import { generate } from '../generate';
import { BlueprintConstantProperties } from './blueprint';


/**
 * Returns a mock from a previously registered `Blueprint`
 */
export function from<T>(name: string, withDefaults?: BlueprintConstantProperties<T>): T {
  const blueprint = retrieve(name);
  if (!blueprint) {
    throw new Error(`Cannot find blueprint for name ${name}`);
  }

  return generate<T>(blueprint, withDefaults);
}
