import { randomDay } from './date-day';
import { randomMonth } from './date-month';
import { randomNumber } from './number';

const minYear = 1970;
const maxYear = new Date().getFullYear();

/**
 * Generate a random date
 */
export function randomDate(): Date {
  const month = randomMonth();

  return new Date(randomNumber(minYear, maxYear), month, randomDay(month, maxYear));
}
