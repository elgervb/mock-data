import { isLeapYear } from '../assert/is-leap-year';

import { randomMonth } from './date-month';
import { randomNumber } from './number';

/**
 * Returns a random day for a month. 1=january, etc.
 */
export function randomDay(month?: number, year?: number): number {
  const currentMonth = month ? month : randomMonth();
  const leapYear = !!year && isLeapYear(year);

  const maxDay = daysForMonth(currentMonth, leapYear);

  return randomNumber(1, maxDay);
}

/**
 * returns the days for the month in the (leap)year
 */
export function daysForMonth(month: number, leapYear: boolean): number {
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
      return leapYear ? 29 : 28;
    default:
      return 30;
  }
}

/**
 * @deprecated please use {@link daysForMonth}, will be removed in next major version
 */
export function calculateMaxDayForMonth(month: number, leapYear: boolean): number {
  return daysForMonth(month, leapYear);
}
