"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDecimalMultiplier = exports.parseBigintIsh = exports.isBN = void 0;
const tslib_1 = require("tslib");
const jsbi_1 = tslib_1.__importDefault(require("jsbi"));
const constants_js_1 = require("./constants.js");
const BN_WORD_SIZE = 26;
/**
 * Checks if an object is a BN.
 */
const isBN = (num) => {
    return (num !== null &&
        typeof num === "object" &&
        num.constructor.wordSize === BN_WORD_SIZE &&
        Array.isArray(num.words));
};
exports.isBN = isBN;
/**
 * Parses a {@link BigintIsh} into a {@link JSBI}.
 * @param bigintIsh
 * @returns
 */
function parseBigintIsh(bigintIsh) {
    return bigintIsh instanceof jsbi_1.default
        ? bigintIsh
        : typeof bigintIsh === "string" || typeof bigintIsh === "number"
            ? jsbi_1.default.BigInt(bigintIsh)
            : typeof bigintIsh === "bigint" || (0, exports.isBN)(bigintIsh)
                ? jsbi_1.default.BigInt(bigintIsh.toString())
                : jsbi_1.default.BigInt(bigintIsh);
}
exports.parseBigintIsh = parseBigintIsh;
const decimalMultipliersCache = {};
/**
 * Creates the multiplier for an amount of decimals.
 * @param decimals
 * @returns
 */
const makeDecimalMultiplier = (decimals) => {
    const cached = decimalMultipliersCache[decimals];
    if (cached) {
        return cached;
    }
    if (decimals <= 18) {
        return (decimalMultipliersCache[decimals] = jsbi_1.default.BigInt(10 ** decimals));
    }
    return (decimalMultipliersCache[decimals] = jsbi_1.default.exponentiate(constants_js_1.TEN, jsbi_1.default.BigInt(decimals)));
};
exports.makeDecimalMultiplier = makeDecimalMultiplier;
//# sourceMappingURL=utils.js.map