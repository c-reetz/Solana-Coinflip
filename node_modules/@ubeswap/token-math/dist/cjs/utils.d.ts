import { default as JSBI } from "jsbi";
/**
 * A type that is structurally compatible with BN.
 */
export declare type BNLike = {
    toString(base?: number | "hex", length?: number): string;
    gcd(b: BNLike): BNLike;
    egcd(b: BNLike): {
        a: BNLike;
        b: BNLike;
        gcd: BNLike;
    };
    invm(b: BNLike): BNLike;
};
/**
 * Checks if an object is a BN.
 */
export declare const isBN: (num: BNLike) => boolean;
/**
 * Bigint-like number.
 */
export declare type BigintIsh = JSBI | string | number | bigint | BNLike;
/**
 * Parses a {@link BigintIsh} into a {@link JSBI}.
 * @param bigintIsh
 * @returns
 */
export declare function parseBigintIsh(bigintIsh: BigintIsh): JSBI;
/**
 * Creates the multiplier for an amount of decimals.
 * @param decimals
 * @returns
 */
export declare const makeDecimalMultiplier: (decimals: number) => JSBI;
//# sourceMappingURL=utils.d.ts.map