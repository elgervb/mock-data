import { Blueprint, BlueprintConstantProperties } from '../blueprint/blueprint';

import { transform } from './transform';

/**
 * Generate a mock from a blueprint
 */
export function generate<T>(blueprint: Blueprint<T>, withDefaults?: BlueprintConstantProperties<T>): T {
  const mock: T = Object.create(null);

  const allKeys = Array.from(new Set(Object.keys(blueprint).concat(Object.keys({ ...withDefaults }))));
  allKeys.forEach(key => {
    let value: unknown;
    if (withDefaults) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      value = withDefaults[key];
    }

    // otherwise, use the generator
    if(value === undefined) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const generator = blueprint[key];
      value = generator();
    }
    Object.assign(mock, { [key]: value });
  });

  return transform<T>(mock);
}
