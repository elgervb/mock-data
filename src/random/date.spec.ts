import { randomDate } from './date';

describe('date', () => {
  const now = new Date();

  it('generate random date', () => {
    const date = randomDate();
    expect(date).toBeInstanceOf(Date);
    expect(date.getFullYear()).toBeGreaterThanOrEqual(1970);
    expect(date.getFullYear()).toBeLessThanOrEqual(now.getFullYear());

    expect(date.getMonth()).toBeGreaterThanOrEqual(0);
    expect(date.getMonth()).toBeLessThanOrEqual(11);

    expect(date.getDate()).toBeGreaterThanOrEqual(1);
    expect(date.getDay()).toBeLessThanOrEqual(31);
  });

});
