/**
 * Checks if nr is a number
 */
export function isNumber(nr: unknown): boolean {
  return !isNaN(nr as number);
}
