import { default as JSBI } from "jsbi";
import { TEN } from "./constants.js";
const BN_WORD_SIZE = 26;
/**
 * Checks if an object is a BN.
 */
export const isBN = (num) => {
    return (num !== null &&
        typeof num === "object" &&
        num.constructor.wordSize === BN_WORD_SIZE &&
        Array.isArray(num.words));
};
/**
 * Parses a {@link BigintIsh} into a {@link JSBI}.
 * @param bigintIsh
 * @returns
 */
export function parseBigintIsh(bigintIsh) {
    return bigintIsh instanceof JSBI
        ? bigintIsh
        : typeof bigintIsh === "string" || typeof bigintIsh === "number"
            ? JSBI.BigInt(bigintIsh)
            : typeof bigintIsh === "bigint" || isBN(bigintIsh)
                ? JSBI.BigInt(bigintIsh.toString())
                : JSBI.BigInt(bigintIsh);
}
const decimalMultipliersCache = {};
/**
 * Creates the multiplier for an amount of decimals.
 * @param decimals
 * @returns
 */
export const makeDecimalMultiplier = (decimals) => {
    const cached = decimalMultipliersCache[decimals];
    if (cached) {
        return cached;
    }
    if (decimals <= 18) {
        return (decimalMultipliersCache[decimals] = JSBI.BigInt(10 ** decimals));
    }
    return (decimalMultipliersCache[decimals] = JSBI.exponentiate(TEN, JSBI.BigInt(decimals)));
};
//# sourceMappingURL=utils.js.map