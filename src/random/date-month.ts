import { randomNumber } from './number';

/**
 * Generates a random month
 */
export function randomMonth(): number {
  return randomNumber(1, 12);
}
