import { maxGeoloc, minGeoloc, randomGeolocation } from './geolocation';

describe('geolocation', () => {

  it('should generate a geolocation', () => {
    const result = randomGeolocation();
    expect(result).toBeLessThanOrEqual(maxGeoloc);
    expect(result).toBeGreaterThanOrEqual(minGeoloc);
    expect(result.toString()).toMatch(/([0-9]){1,3}\.([0-9]){0,5}/);
  });

  it('should generate a geolocation with custom to and from', () => {
    const result = randomGeolocation(0, maxGeoloc - 10);
    expect(result).toBeLessThanOrEqual(maxGeoloc - 10);
    expect(result).toBeGreaterThanOrEqual(0);

    expect(result).toBeLessThanOrEqual(maxGeoloc);
    expect(result).toBeGreaterThanOrEqual(minGeoloc);
    expect(result.toString()).toMatch(/([0-9]){1,3}\.([0-9]){0,5}/);
  });

  it('throws an error if not in range', () => {
    expect(() => randomGeolocation(minGeoloc, maxGeoloc + 1)).toThrowError(/^randomGeolocation range should be between .*/);
  });

});
