"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrcaU64 = void 0;
const spl_token_1 = require("@solana/spl-token");
const decimal_js_1 = __importDefault(require("decimal.js"));
const decimal_utils_1 = require("../../utils/numbers/decimal-utils");
/**
 * Orca's U64 wrapper class to help users convert to/from regular javascript number types
 *
 *
 * Examples:
 * OrcaU64(value: 99999, decimal: 0) -> 99999
 * OrcaU64(value: 99999, decimal: 5) -> 0.99999
 */
class OrcaU64 {
    constructor(value, scale = 0) {
        this.value = value;
        this.scale = Math.floor(scale);
    }
    /**
     * Create an OrcaU64 from a Decimal
     * @param value - an object representing the value of the u64 in Decimal form
     * @param scale - the number of digits after the decimal point to keep account for in this u64
     * @returns OrcaU64 hosting a u64 representing the input value adjusted to the provided scale
     */
    static fromDecimal(value, scale = 0) {
        const dec = Math.floor(scale);
        return new OrcaU64(decimal_utils_1.DecimalUtil.toU64(value, dec), dec);
    }
    /**
     * Create an OrcaU64 from a number
     * @param value - an object representing the value of the u64 in number form
     * @param scale - the number of digits after the decimal point to keep account for in this u64
     * @returns OrcaU64 hosting a u64 representing the input value adjusted to the provided scale
     */
    static fromNumber(value, scale = 0) {
        const dec = Math.floor(scale);
        return new OrcaU64(decimal_utils_1.DecimalUtil.toU64(new decimal_js_1.default(value), dec), dec);
    }
    /**
     * Create an OrcaU64 from a u64
     * @param value - an object representing the value of the u64
     * @param scale - the number of digits after the decimal point represented in this u64
     * @returns OrcaU64 hosting the input u64 with the provided scale
     */
    static fromU64(value, scale = 0) {
        const dec = Math.floor(scale);
        return new OrcaU64(value, dec);
    }
    /**
     * Convert this OrcaU64 to Decimal.
     * @returns Decimal object that equals to the OrcaU64's value & scale
     */
    toDecimal() {
        return decimal_utils_1.DecimalUtil.fromU64(this.value, this.scale);
    }
    /**
     * Convert this OrcaU64 to number.
     * @returns number that equals to the OrcaU64's value & scale
     */
    toNumber() {
        return decimal_utils_1.DecimalUtil.fromU64(this.value, this.scale).toNumber();
    }
    /**
     * Convert this OrcaU64 to u64.
     * @returns u64 that equals to the OrcaU64 value
     */
    toU64() {
        return new spl_token_1.u64(this.value.toString());
    }
}
exports.OrcaU64 = OrcaU64;
