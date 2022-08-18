import { u64 } from "@solana/spl-token";
import Decimal from "decimal.js";
/**
 * Orca's U64 wrapper class to help users convert to/from regular javascript number types
 *
 *
 * Examples:
 * OrcaU64(value: 99999, decimal: 0) -> 99999
 * OrcaU64(value: 99999, decimal: 5) -> 0.99999
 */
export declare class OrcaU64 {
    readonly value: u64;
    readonly scale: number;
    constructor(value: u64, scale?: number);
    /**
     * Create an OrcaU64 from a Decimal
     * @param value - an object representing the value of the u64 in Decimal form
     * @param scale - the number of digits after the decimal point to keep account for in this u64
     * @returns OrcaU64 hosting a u64 representing the input value adjusted to the provided scale
     */
    static fromDecimal(value: Decimal, scale?: number): OrcaU64;
    /**
     * Create an OrcaU64 from a number
     * @param value - an object representing the value of the u64 in number form
     * @param scale - the number of digits after the decimal point to keep account for in this u64
     * @returns OrcaU64 hosting a u64 representing the input value adjusted to the provided scale
     */
    static fromNumber(value: number, scale?: number): OrcaU64;
    /**
     * Create an OrcaU64 from a u64
     * @param value - an object representing the value of the u64
     * @param scale - the number of digits after the decimal point represented in this u64
     * @returns OrcaU64 hosting the input u64 with the provided scale
     */
    static fromU64(value: u64, scale?: number): OrcaU64;
    /**
     * Convert this OrcaU64 to Decimal.
     * @returns Decimal object that equals to the OrcaU64's value & scale
     */
    toDecimal(): Decimal;
    /**
     * Convert this OrcaU64 to number.
     * @returns number that equals to the OrcaU64's value & scale
     */
    toNumber(): number;
    /**
     * Convert this OrcaU64 to u64.
     * @returns u64 that equals to the OrcaU64 value
     */
    toU64(): u64;
}
