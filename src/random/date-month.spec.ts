import { randomMonth } from './date-month';

describe('month', () => {

  it('generates a random month', () => {
    const month = randomMonth();

    expect(month).toBeGreaterThanOrEqual(1);
    expect(month).toBeLessThanOrEqual(12);
  });
});
