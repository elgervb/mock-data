import { isNumber } from './is-number';

describe('is-number', () => {
  const checkNumber = 42;

  it('checks to be a number', () => {
    expect(isNumber(checkNumber)).toBe(true);
  });

  it('checks a number string', () => {
    expect(isNumber('42')).toBe(true);
  });

  it('checks to be not a number', () => {
    expect(isNumber('42a')).toBe(false);
  });

});
