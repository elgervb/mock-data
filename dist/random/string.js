"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_number_1 = require("../assert/is-number");
function randomString(length) {
    if (is_number_1.isNumber(length)) {
        throw new Error('randomString must have a length argument');
    }
    var str = '';
    for (var i = 0; i < length; i++) {
        var rand = Math.floor(Math.random() * 62);
        var charCode = rand += rand > 9 ? (rand < 36 ? 55 : 61) : 48;
        str += String.fromCharCode(charCode);
    }
    return str;
}
exports.randomString = randomString;
