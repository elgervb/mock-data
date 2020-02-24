export function getMock<T>(partial: Partial<T>): T {
    return { ...partial } as T;
}
