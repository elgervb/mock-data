import { isNumber } from "../assert/is-number";

/**
 * Generate a random number between min and max
 */
export function randomNumber(min: number, max: number): number {
    if (isNumber(min) || isNumber(max)) {
        throw new Error('randomNumber must have min and max arguments');
    }

    return Math.round((Math.random() * (Math.abs(max - min))) + min);
}
