import { randomDate } from "../random/date";
import { randomDay } from "../random/date-day";
import { randomMonth } from "../random/date-month";
import { randomGuid } from "../random/guid";
import { randomNumber } from "../random/number";
import { randomString } from "../random/string";

/**
 * Random factory types
 */
export enum FactoryType {
  string = 'string',
  number = 'number',
  guid = 'guid',
  day = 'day',
  month = 'month',
  date = 'date',
}

const registry = new Map<FactoryType, () => unknown>();
registry.set(FactoryType.string, () => randomString(10));
registry.set(FactoryType.number, randomNumber);
registry.set(FactoryType.guid, randomGuid);
registry.set(FactoryType.day, randomDay);
registry.set(FactoryType.month, randomMonth);
registry.set(FactoryType.date, randomDate);

/**
 * Creates a random factory for a type. Will throw an error when no generator cannot be found
 */
export function factory(aType: FactoryType): () => unknown {
  const generator = registry.get(aType);
  if (!generator) {
    throw new Error(`no generator found for ${aType}`);
  }

  return generator;
}
