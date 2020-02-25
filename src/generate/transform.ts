
/**
 * Returns a mock of a certain type
 */
export function transform<T>(partial: Partial<T>): T {
  // tslint:disable-next-line: no-object-literal-type-assertion
  return { ...partial } as T;
}
