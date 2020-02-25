import { isLeapYear } from './is-leap-year';

// tslint:disable: no-magic-numbers
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
// tslint:enable: no-magic-numbers
