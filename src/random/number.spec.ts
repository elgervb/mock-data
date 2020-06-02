import { randomNumber } from './number';

describe('number', () => {

  it('generates a random number between 5 and 10', () => {
    const min = 5;
    const max = 10;
    const nr = randomNumber(min, max);

    expect(nr).toBeLessThanOrEqual(max);
    expect(nr).toBeGreaterThanOrEqual(min);
  });

  it('generates a random number between -99 and -1', () => {
    const min = -99;
    const max = -1;
    const nr = randomNumber(min, max);

    expect(nr).toBeLessThan(0);
    expect(nr).toBeLessThanOrEqual(max);
    expect(nr).toBeGreaterThanOrEqual(min);
  });

  it('generates a default random number', () => {
    const nr = randomNumber();

    expect(nr).toBeLessThanOrEqual(Number.MAX_SAFE_INTEGER);
    expect(nr).toBeGreaterThanOrEqual(0);
  });

  it('throws when min is not a number', () => {
    // tslint:disable-next-line: no-any
    expect(() => randomNumber('asdf' as any, 10)).toThrowError('randomNumber must have min and max arguments');
  });

  it('throws when max is not a number', () => {
    // tslint:disable-next-line: no-any
    expect(() => randomNumber(10, 'asdf' as any)).toThrowError('randomNumber must have min and max arguments');
  });

  describe('with fractionDigits', () => {
    const max = 9;
    const fractionDigits = 6;
    const result = randomNumber(1, max, fractionDigits);

    expect(result.toString().length).toBeGreaterThanOrEqual(fractionDigits);
  });
});
