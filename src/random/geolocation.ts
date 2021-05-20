import { randomNumber } from './number';

export const minGeolocLong = -180;
export const maxGeolocLong = 180;
export const minGeolocLat = -90;
export const maxGeolocLat = 90;

/**
 * The geolocation type (long or lat)
 */
export enum GeoType {
  long = 'long',
  lat = 'lat',
}

/**
 * Renerates a random geo location point
 */
export function randomGeolocation(from: number = minGeolocLong, to: number = maxGeolocLong, type: GeoType = GeoType.long): number {

  const minGeoloc = type === GeoType.long ? minGeolocLong : minGeolocLat;
  const maxGeoloc = type === GeoType.long ? maxGeolocLong : maxGeolocLat;

  if (from < minGeoloc || to > maxGeoloc) {
    throw new Error(`randomGeolocation ${type} range should be between ${minGeoloc} and ${maxGeoloc}`);
  }

  const fractionDigits = 5;

  return randomNumber(from, to, fractionDigits);
}
