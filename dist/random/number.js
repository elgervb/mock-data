"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_number_1 = require("../assert/is-number");
function randomNumber(min, max) {
    if (is_number_1.isNumber(min) || is_number_1.isNumber(max)) {
        throw new Error('randomNumber must have min and max arguments');
    }
    return Math.round((Math.random() * (Math.abs(max - min))) + min);
}
exports.randomNumber = randomNumber;
