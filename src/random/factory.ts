import { randomBoolean } from "./boolean";
import { randomDate } from "./date";
import { randomDay } from "./date-day";
import { randomMonth } from "./date-month";
import { randomYear } from "./date-year";
import { randomGeolocation } from "./geolocation";
import { randomGuid } from "./guid";
import { randomNumber } from "./number";
import { randomString } from "./string";

/**
 * Random factory types
 */
export enum FactoryType {
  boolean = 'boolean',
  date = 'date',
  day = 'day',
  geo = 'geolocation',
  guid = 'guid',
  month = 'month',
  number = 'number',
  string = 'string',
  year = 'year',
}

// tslint:disable-next-line: no-any return type can be of any type
const registry = new Map<FactoryType, () => any>();
registry.set(FactoryType.boolean, randomBoolean);
registry.set(FactoryType.date, randomDate);
registry.set(FactoryType.day, randomDay);
registry.set(FactoryType.geo, randomGeolocation);
registry.set(FactoryType.guid, randomGuid);
registry.set(FactoryType.month, randomMonth);
registry.set(FactoryType.number, randomNumber);
registry.set(FactoryType.string, () => randomString(10));
registry.set(FactoryType.year, randomYear);

/**
 * Creates a random factory for a type. Will throw an error when no generator cannot be found
 */
export function factory<T = unknown>(aType: FactoryType): () => T {
  const generator = registry.get(aType);
  if (!generator) {
    throw new Error(`no generator found for ${aType}`);
  }

  return generator;
}
