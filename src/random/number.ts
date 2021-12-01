import { isNumber } from '../assert/is-number';

/**
 * Generate a random number >= min and <= max
 */
export function randomNumber(min = 0, max: number = Number.MAX_SAFE_INTEGER, fractionDigits?: number): number {
  if (!isNumber(min) || !isNumber(max)) {
    throw new Error('randomNumber must have min and max arguments');
  }

  const result = (Math.random() * (Math.abs(max - min))) + min;

  return fractionDigits ? parseFloat(result.toFixed(fractionDigits)) : Math.round(result);
}
