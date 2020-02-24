
/**
 * Returns a mock of a certain type
 */
export function getMock<T>(partial: Partial<T>): T {
    // tslint:disable-next-line: no-object-literal-type-assertion
    return { ...partial } as T;
}
