import { randomNumber } from './number';

describe('number', () => {

  it('generates a random number between 5 and 10', () => {
    const min = 5;
    const max = 10;
    const nr = randomNumber(min, max);

    expect(nr).toBeLessThan(max);
    expect(nr).toBeGreaterThan(min);
  });
});
