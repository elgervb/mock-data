import { isLeapYear } from '../assert/is-leap-year';

import { randomMonth } from './date-month';
import { randomNumber } from './number';

/**
 * Returns a random day for a month. 1=january, etc.
 */
export function randomDay(month?: number, year?: number): number {
  const currentMonth = month ? month : randomMonth();
  const leapYear = !!year && isLeapYear(year);

  const maxDay = calculateMaxDayForMonth(currentMonth, leapYear);

  return randomNumber(1, maxDay);
}

export function calculateMaxDayForMonth(month: number, isLeapYear: boolean): number {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 2:
      return isLeapYear ? 29 : 28;
    default:
      return 30;
  }
}
