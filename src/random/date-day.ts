import { isLeapYear } from "../assert/is-leap-year";

import { randomMonth } from "./date-month";
import { randomNumber } from "./number";

/**
 * Returns a random day for a month. 1=january, etc.
 */
export function randomDay(month?: number, year?: number): number {
  const currentMonth = month ? month : randomMonth();

  let maxDay: number;
  switch (currentMonth) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      maxDay = 31;
      break;
    case 2:
      maxDay = (year && isLeapYear(year)) ? 29 : 28;
      break;
    default:
      maxDay = 30;
  }

  return randomNumber(1, maxDay);
}
