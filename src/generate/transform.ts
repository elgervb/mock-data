
/**
 * Returns a mock of a certain type
 */
export function transform<T, R = T>(partial: Partial<T>): R {
  // tslint:disable-next-line: no-object-literal-type-assertion
  return { ...partial } as R;
}
