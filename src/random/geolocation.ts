import { randomNumber } from './number';

export const minGeoloc = -180;
export const maxGeoloc = 180;

/**
 * Renerates a random geo location point
 */
export function randomGeolocation(from: number = minGeoloc, to: number = maxGeoloc): number {

  if (from < minGeoloc || to > maxGeoloc) {
    throw new Error(`randomGeolocation range should be between ${minGeoloc} and ${maxGeoloc}`);
  }

  const fractionDigits = 5;

  return randomNumber(from, to, fractionDigits);
}
