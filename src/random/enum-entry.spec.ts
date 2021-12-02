import { randomEnumEntry } from './enum-entry';

enum TestStringEnum {
  a = 'a',
  b = 'b',
  c = 'c',
  d = 'd'
}

describe('randomEnumEntry', () => {

  it('should return a random enum value', () => {
    const result = randomEnumEntry(TestStringEnum);

    expect(Object.values(TestStringEnum).some(value => value === result)).toBe(true);
  });

  it('should return random value when generated multiple times', () => {
    const result1 = randomEnumEntry(TestStringEnum);
    const result2 = randomEnumEntry(TestStringEnum);
    const result3 = randomEnumEntry(TestStringEnum);
    const result4 = randomEnumEntry(TestStringEnum);

    expect(result1 !== result2 || result2 !== result3 || result3 !== result4).toBe(true);
  });
});
