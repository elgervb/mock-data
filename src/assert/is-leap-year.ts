/**
 * Checks if  year is a leap
 */
export function isLeapYear(year: number): boolean {
  // tslint:disable-next-line: no-magic-numbers
  return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}
