import { randomDate } from "../random/date";
import { randomDay } from "../random/date-day";
import { randomMonth } from "../random/date-month";
import { randomGuid } from "../random/guid";
import { randomNumber } from "../random/number";
import { randomString } from "../random/string";

const registry = new Map<string, () => unknown>();
registry.set('string', () => randomString(10));
registry.set('number', randomNumber);
registry.set('guid', randomGuid);
registry.set('day', randomDay);
registry.set('month', randomMonth);
registry.set('date', randomDate);

/**
 * Creates a random factory for a type. Will throw an error when no generator cannot be found
 */
export function factory(aType: string): () => unknown {
  const generator = registry.get(aType);
  if (!generator) {
    throw new Error(`no generator found for ${aType}`);
  }

  return generator;
}
