import { isLeapYear } from './is-leap-year';

describe('leap year', () => {

  it('is a leap year', () => {
    expect(isLeapYear(2000)).toBe(true);
  });

  it('is not a leap year', () => {
    expect(isLeapYear(2001)).toBe(false);
  });

  it('is not a leap year', () => {
    expect(isLeapYear(2100)).toBe(false);
  });
});
