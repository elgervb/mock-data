import { randomYear } from './date-year';

describe('month', () => {

  const currentYear = new Date().getFullYear();
  const fromYear = currentYear - 10;

  it('generates a random year', () => {
    const year = randomYear();

    // tslint:disable-next-line: no-magic-numbers
    expect(year.toString().length).toBe(4);
    expect(year).toBeGreaterThanOrEqual(fromYear);
    expect(year).toBeLessThanOrEqual(currentYear);
  });

  it('generates a random custom month', () => {
    const from = 200;
    const to = 300;
    const year = randomYear(from, to);

    expect(year).toBeGreaterThanOrEqual(from);
    expect(year).toBeLessThanOrEqual(to);
  });
});
