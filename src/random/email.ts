import { randomString } from './string';

export function randomEmail(tld = 'com'): string {
  return `${randomString(4)}@${randomString(8)}.${tld}`;
}
