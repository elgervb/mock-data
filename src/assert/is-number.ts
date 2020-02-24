/**
 * Checks if nr is a number
 */
// tslint:disable-next-line: no-any
export function isNumber(nr: any): boolean {
  // tslint:disable-next-line: no-unsafe-any
  return !isNaN(nr);
}
