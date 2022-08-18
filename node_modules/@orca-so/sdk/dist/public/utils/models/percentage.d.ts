import { u64 } from "@solana/spl-token";
import Decimal from "decimal.js";
export declare class Percentage {
    readonly numerator: u64;
    readonly denominator: u64;
    constructor(numerator: u64, denominator: u64);
    static fromDecimal(number: Decimal): Percentage;
    static fromFraction(numerator: u64 | number, denominator: u64 | number): Percentage;
    toString: () => string;
    toDecimal(): Decimal;
    add(p2: Percentage): Percentage;
}
