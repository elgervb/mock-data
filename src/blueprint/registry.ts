import { Blueprint } from './blueprint';

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

export function retrieve<T>(name: string): Blueprint<T> | undefined {
  return registry.get(name) as Blueprint<T> | undefined;
}
