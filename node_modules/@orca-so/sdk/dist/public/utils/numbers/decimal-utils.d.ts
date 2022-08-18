import { u64 } from "@solana/spl-token";
import Decimal from "decimal.js";
export declare class DecimalUtil {
    static fromU64(input: u64, shift?: number): Decimal;
    static toU64(input: Decimal, shift?: number): u64;
}
