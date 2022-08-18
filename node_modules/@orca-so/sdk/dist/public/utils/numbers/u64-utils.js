"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.U64Utils = exports.ONE = exports.ZERO = void 0;
const spl_token_1 = require("@solana/spl-token");
const __1 = require("../..");
const decimal_utils_1 = require("./decimal-utils");
exports.ZERO = new spl_token_1.u64(0);
exports.ONE = new spl_token_1.u64(1);
class U64Utils {
    static toTokenU64(input, token, varName) {
        if (input instanceof __1.OrcaU64) {
            if (input.scale !== token.scale) {
                throw new Error(`${varName}'s scale of ${input.scale} does not match token's decimal of ${token.scale}`);
            }
            return input.toU64();
        }
        return decimal_utils_1.DecimalUtil.toU64(input, token.scale);
    }
    static toPoolU64(input, pool, varName) {
        if (input instanceof __1.OrcaU64) {
            if (input.scale !== pool.poolTokenDecimals) {
                throw new Error(`${varName}'s scale of ${input.scale} does not match pool's decimal of ${pool.poolTokenDecimals}`);
            }
            return input.toU64();
        }
        return decimal_utils_1.DecimalUtil.toU64(input, pool.poolTokenDecimals);
    }
    static toFarmU64(input, farm, varName) {
        if (input instanceof __1.OrcaU64) {
            if (input.scale !== farm.baseTokenDecimals) {
                throw new Error(`${varName}'s scale of ${input.scale} does not match baseToken's decimal of ${farm.baseTokenDecimals}`);
            }
            return input.toU64();
        }
        return decimal_utils_1.DecimalUtil.toU64(input, farm.baseTokenDecimals);
    }
    // Note: divisor input variable modified in place
    // https://github.com/solana-labs/solana-program-library/blob/master/libraries/math/src/checked_ceil_div.rs#L5-L22
    static ceilingDivision(dividend, divisor) {
        let quotient = dividend.div(divisor);
        if (quotient.eq(exports.ZERO)) {
            return [exports.ZERO, divisor];
        }
        let remainder = dividend.mod(divisor);
        if (remainder.gt(exports.ZERO)) {
            quotient = quotient.add(exports.ONE);
            divisor = dividend.div(quotient);
            remainder = dividend.mod(quotient);
            if (remainder.gt(exports.ZERO)) {
                divisor = divisor.add(exports.ONE);
            }
        }
        return [quotient, divisor];
    }
}
exports.U64Utils = U64Utils;
