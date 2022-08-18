"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZERO = exports.toU64WithDecimals = exports.toBNWithDecimals = void 0;
const spl_token_1 = require("@solana/spl-token");
function toBNWithDecimals(amount, decimals = 9) {
    const base = new spl_token_1.u64(10).pow(new spl_token_1.u64(decimals));
    // Break up into the integer and fractional part of the number
    const integersAsNumber = Math.floor(amount);
    const fractionsAsNumber = amount % 1;
    // Convert each into a u64 multiplied by 10^{decimals}
    const integersAsU64 = new spl_token_1.u64(integersAsNumber).mul(base);
    if (!fractionsAsNumber) {
        return integersAsU64;
    }
    const fractionsAsU64 = new spl_token_1.u64(fractionsAsNumber.toString().substring(0, decimals).padEnd(decimals, "0"));
    // Add them up. This results in a BN, so it needs to be converted to u64 again
    return integersAsU64.add(fractionsAsU64);
}
exports.toBNWithDecimals = toBNWithDecimals;
function toU64WithDecimals(amount, decimals = 9) {
    const result = toBNWithDecimals(amount, decimals);
    return new spl_token_1.u64(result);
}
exports.toU64WithDecimals = toU64WithDecimals;
exports.ZERO = new spl_token_1.u64(0);
//# sourceMappingURL=math.js.map