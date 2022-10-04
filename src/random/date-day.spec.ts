import { calculateMaxDayForMonth, daysForMonth, randomDay } from './date-day';

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

describe('daysForMonth', () => {

  it('gets days for a long month', () => {
    const all31days = [ 1, 3, 5, 7, 8, 10, 12 ].map(monthNr => daysForMonth(monthNr, false)).some(days => days === 31);
    expect(all31days).toBe(true);
  });

  it('gets days for a short month', () => {
    const all30days = [ 2, 4, 6, 9, 11 ].map(monthNr => daysForMonth(monthNr, false)).some(days => days === 30);
    expect(all30days).toBe(true);
  });

  it('gets days for February', () => {
    expect(daysForMonth(2, false)).toBe(28);
    expect(daysForMonth(2, true)).toBe(29);
  });
});

describe('calculateMaxDayForMonth', () => {

  it('gets days for a long month', () => {
    const all31days = [ 1, 3, 5, 7, 8, 10, 12 ].map(monthNr => calculateMaxDayForMonth(monthNr, false)).some(days => days === 31);
    expect(all31days).toBe(true);
  });

  it('gets days for a short month', () => {
    const all30days = [ 2, 4, 6, 9, 11 ].map(monthNr => calculateMaxDayForMonth(monthNr, false)).some(days => days === 30);
    expect(all30days).toBe(true);
  });

  it('gets days for February', () => {
    expect(calculateMaxDayForMonth(2, false)).toBe(28);
    expect(calculateMaxDayForMonth(2, true)).toBe(29);
  });

});
