import { randomNumber } from './number';

const currentYear = new Date().getFullYear();
const fromYear = currentYear - 10;
/**
 * Generates a random year
 */
export function randomYear(from: number = fromYear, to: number = currentYear): number {
  return randomNumber(from, to);
}
