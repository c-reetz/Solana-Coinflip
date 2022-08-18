import { default as JSBI } from "jsbi";

import { TEN } from "./constants.js";

/**
 * A type that is structurally compatible with BN.
 */
export type BNLike = {
  toString(base?: number | "hex", length?: number): string;
  gcd(b: BNLike): BNLike;
  egcd(b: BNLike): { a: BNLike; b: BNLike; gcd: BNLike };
  invm(b: BNLike): BNLike;
};

const BN_WORD_SIZE = 26;

/**
 * Checks if an object is a BN.
 */
export const isBN = (num: BNLike) => {
  return (
    num !== null &&
    typeof num === "object" &&
    (num.constructor as { wordSize?: number }).wordSize === BN_WORD_SIZE &&
    Array.isArray((num as { words?: unknown }).words)
  );
};

/**
 * Bigint-like number.
 */
export type BigintIsh = JSBI | string | number | bigint | BNLike;

/**
 * Parses a {@link BigintIsh} into a {@link JSBI}.
 * @param bigintIsh
 * @returns
 */
export function parseBigintIsh(bigintIsh: BigintIsh): JSBI {
  return bigintIsh instanceof JSBI
    ? bigintIsh
    : typeof bigintIsh === "string" || typeof bigintIsh === "number"
    ? JSBI.BigInt(bigintIsh)
    : typeof bigintIsh === "bigint" || isBN(bigintIsh)
    ? JSBI.BigInt(bigintIsh.toString())
    : JSBI.BigInt(bigintIsh);
}

const decimalMultipliersCache: Record<number, JSBI> = {};

/**
 * Creates the multiplier for an amount of decimals.
 * @param decimals
 * @returns
 */
export const makeDecimalMultiplier = (decimals: number): JSBI => {
  const cached = decimalMultipliersCache[decimals];
  if (cached) {
    return cached;
  }
  if (decimals <= 18) {
    return (decimalMultipliersCache[decimals] = JSBI.BigInt(10 ** decimals));
  }
  return (decimalMultipliersCache[decimals] = JSBI.exponentiate(
    TEN,
    JSBI.BigInt(decimals)
  ));
};
