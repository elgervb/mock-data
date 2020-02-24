import { isNumber } from "../assert/is-number";

export function randomString(length: number): string {
    if (isNumber(length)) {
        throw new Error('randomString must have a length argument');
    }
    let str = '';
    for (let i = 0; i < length; i++) {
        let rand = Math.floor(Math.random() * 62);
        const charCode = rand += rand > 9 ? (rand < 36 ? 55 : 61) : 48;
        str += String.fromCharCode(charCode);
    }
    return str;
}