"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Percentage = void 0;
const spl_token_1 = require("@solana/spl-token");
const decimal_js_1 = __importDefault(require("decimal.js"));
const __1 = require("..");
class Percentage {
    constructor(numerator, denominator) {
        this.toString = () => {
            return `${this.numerator.toString()}/${this.denominator.toString()}`;
        };
        this.numerator = numerator;
        this.denominator = denominator;
    }
    static fromDecimal(number) {
        return Percentage.fromFraction(number.toDecimalPlaces(1).mul(10).toNumber(), 1000);
    }
    static fromFraction(numerator, denominator) {
        const num = typeof numerator === "number" ? new spl_token_1.u64(numerator.toString()) : numerator;
        const denom = typeof denominator === "number" ? new spl_token_1.u64(denominator.toString()) : denominator;
        return new Percentage(num, denom);
    }
    toDecimal() {
        if (this.denominator.eq(__1.ZERO)) {
            return new decimal_js_1.default(0);
        }
        return new decimal_js_1.default(this.numerator.toString()).div(new decimal_js_1.default(this.denominator.toString()));
    }
    add(p2) {
        const denomGcd = this.denominator.gcd(p2.denominator);
        const denomLcm = this.denominator.div(denomGcd).mul(p2.denominator);
        const p1DenomAdjustment = denomLcm.div(this.denominator);
        const p2DenomAdjustment = denomLcm.div(p2.denominator);
        const p1NumeratorAdjusted = this.numerator.mul(p1DenomAdjustment);
        const p2NumeratorAdjusted = p2.numerator.mul(p2DenomAdjustment);
        const newNumerator = p1NumeratorAdjusted.add(p2NumeratorAdjusted);
        return new Percentage(new spl_token_1.u64(newNumerator.toString()), new spl_token_1.u64(denomLcm.toString()));
    }
}
exports.Percentage = Percentage;
