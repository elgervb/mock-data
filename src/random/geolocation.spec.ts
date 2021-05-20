import { GeoType, maxGeolocLat, maxGeolocLong, minGeolocLat, minGeolocLong, randomGeolocation } from './geolocation';

describe('geolocation', () => {

  it('should generate a geolocation', () => {
    const result = randomGeolocation();
    expect(result).toBeLessThanOrEqual(maxGeolocLong);
    expect(result).toBeGreaterThanOrEqual(minGeolocLong);
    expect(result.toString()).toMatch(/([0-9]){1,3}\.([0-9]){0,5}/);
  });

  it('should generate a geolocation with custom to and from', () => {
    const result = randomGeolocation(0, maxGeolocLong - 10);
    expect(result).toBeLessThanOrEqual(maxGeolocLong - 10);
    expect(result).toBeGreaterThanOrEqual(0);

    expect(result).toBeLessThanOrEqual(maxGeolocLong);
    expect(result).toBeGreaterThanOrEqual(minGeolocLong);
    expect(result.toString()).toMatch(/([0-9]){1,3}\.([0-9]){0,5}/);
  });

  it('throws an error if not in range for longitude', () => {
    expect(() => randomGeolocation(minGeolocLong, maxGeolocLong + 1)).toThrowError(/^randomGeolocation long range should be between .*/);
  });

  it('throws an error if not in range for latitude', () => {
    expect(() => randomGeolocation(minGeolocLat, maxGeolocLat + 1, GeoType.lat)).toThrowError(/^randomGeolocation lat range should be between .*/);
  });

});
