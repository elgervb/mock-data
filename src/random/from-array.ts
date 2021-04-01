import { randomNumber } from "./number";

/**
 * returns a random item from an array, or undefined when array is empty
 */
export function randomFromArray<T>(array: T[]): T {
  if (!Array.isArray(array)) {
    throw new Error('randomFromArray must be an array');
  }

  const random = randomNumber(0, array.length - 1);

  return array[random];
}
