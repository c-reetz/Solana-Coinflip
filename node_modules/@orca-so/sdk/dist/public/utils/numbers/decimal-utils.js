"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecimalUtil = void 0;
const spl_token_1 = require("@solana/spl-token");
const decimal_js_1 = __importDefault(require("decimal.js"));
class DecimalUtil {
    static fromU64(input, shift = 0) {
        return new decimal_js_1.default(input.toString()).div(new decimal_js_1.default(10).pow(shift));
    }
    static toU64(input, shift = 0) {
        if (input.isNeg()) {
            throw new Error("Negative decimal value ${input} cannot be converted to u64.");
        }
        const shiftedValue = input.mul(new decimal_js_1.default(10).pow(shift));
        const zeroDecimalValue = shiftedValue.trunc();
        return new spl_token_1.u64(zeroDecimalValue.toString());
    }
}
exports.DecimalUtil = DecimalUtil;
