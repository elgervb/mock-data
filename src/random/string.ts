import { isNumber } from "../assert/is-number";

/**
 * Generates a random string of length
 */
export function randomString(length: number): string {
  if (!isNumber(length)) {
    throw new Error('randomString must have a length argument');
  }
  let str = '';
  for (let i = 0; i < length; i++) {
    // tslint:disable-next-line: no-magic-numbers
    let rand = Math.floor(Math.random() * 62);
    // tslint:disable-next-line: no-magic-numbers
    const charCode = rand += rand > 9 ? (rand < 36 ? 55 : 61) : 48;
    str += String.fromCharCode(charCode);
  }

  return str;
}
