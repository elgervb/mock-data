import { isNumber } from "../assert/is-number";

/**
 * Generate a random number >= min and <= max
 */
export function randomNumber(min: number = 0, max: number = Number.MAX_SAFE_INTEGER): number {
  if (!isNumber(min) || !isNumber(max)) {
    throw new Error('randomNumber must have min and max arguments');
  }

  return Math.round((Math.random() * (Math.abs(max - min))) + min);
}
