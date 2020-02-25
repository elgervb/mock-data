import { randomDay } from './date-day';

// tslint:disable: no-magic-numbers
describe('date day', () => {

  it('gets days for February', () => {
    const day = randomDay(2);
    expect(day).toBeLessThanOrEqual(28);
    expect(day).toBeGreaterThanOrEqual(1);
  });

  it('gets days for February on leap year', () => {
    const day = randomDay(2, 2020);
    expect(day).toBeLessThanOrEqual(29);
    expect(day).toBeGreaterThanOrEqual(1);
  });

  it('gets days for February not on leap year', () => {
    const day = randomDay(2, 2021);
    expect(day).toBeLessThanOrEqual(28);
    expect(day).toBeGreaterThanOrEqual(1);
  });

  it('gets days for April on leap year', () => {
    const day = randomDay(4, 2021);
    expect(day).toBeLessThanOrEqual(30);
    expect(day).toBeGreaterThanOrEqual(1);
  });

  it('gets days for May', () => {
    const day = randomDay(5);
    expect(day).toBeLessThanOrEqual(31);
    expect(day).toBeGreaterThanOrEqual(1);
  });

  it('gets days for January', () => {
    const day = randomDay(1);
    expect(day).toBeLessThanOrEqual(31);
    expect(day).toBeGreaterThanOrEqual(1);
  });

  it('gets days for a random month', () => {
    const day = randomDay();
    expect(day).toBeLessThanOrEqual(31);
    expect(day).toBeGreaterThanOrEqual(1);
  });
});
// tslint:enable: no-magic-numbers
