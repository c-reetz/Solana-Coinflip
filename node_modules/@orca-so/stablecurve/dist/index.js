"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var spl_token_1 = require("@solana/spl-token");
var decimal_js_1 = require("decimal.js");
var cuberoots_1 = require("./cuberoots");
var ZERO = new spl_token_1.u64(0);
var ONE = new spl_token_1.u64(1);
var TWO = new spl_token_1.u64(2);
var THREE = new spl_token_1.u64(3);
var FOUR = new spl_token_1.u64(4);
var EIGHT = new spl_token_1.u64(8);
var SIXTEEN = new spl_token_1.u64(16);
var N_COINS = TWO;
var N_COINS_SQUARED = new spl_token_1.u64(4);
function calculateStep(initialD, leverage, sumX, dProduct) {
    var leverageMul = leverage.mul(sumX);
    var dPMul = dProduct.mul(N_COINS);
    var leverageVal = leverageMul.add(dPMul).mul(initialD);
    var leverageSub = initialD.mul(leverage.sub(ONE));
    var nCoinsSum = dProduct.mul(N_COINS.add(ONE));
    var rVal = leverageSub.add(nCoinsSum);
    return leverageVal.div(rVal);
}
function computeD(leverage, amountA, amountB) {
    var amountATimesN = amountA.mul(N_COINS).add(ONE);
    var amountBTimesN = amountB.mul(N_COINS).add(ONE);
    var sumX = amountA.add(amountB);
    if (sumX.eq(ZERO)) {
        return ZERO;
    }
    var dPrevious;
    var d = sumX;
    for (var i = 0; i < 32; i++) {
        var dProduct = d;
        dProduct = dProduct.mul(d).div(amountATimesN);
        dProduct = dProduct.mul(d).div(amountBTimesN);
        dPrevious = d;
        d = calculateStep(d, leverage, sumX, dProduct);
        if (d.eq(dPrevious)) {
            break;
        }
    }
    return d;
}
function _computeOutputAmount(leverage, newInputAmount, d) {
    var c = d
        .pow(N_COINS.add(ONE))
        .div(newInputAmount.mul(N_COINS_SQUARED).mul(leverage));
    var b = newInputAmount.add(d.div(leverage));
    var yPrevious;
    var y = d;
    for (var i = 0; i < 32; i++) {
        yPrevious = y;
        y = y.sqr().add(c).div(y.mul(TWO).add(b).sub(d));
        if (y.eq(yPrevious)) {
            break;
        }
    }
    return y;
}
function computeOutputAmount(inputAmount, inputPoolAmount, outputPoolAmount, amp) {
    var leverage = amp.mul(N_COINS);
    var newInputPoolAmount = inputAmount.add(inputPoolAmount);
    var d = computeD(leverage, inputPoolAmount, outputPoolAmount);
    var newOutputPoolAmount = _computeOutputAmount(leverage, newInputPoolAmount, d);
    var outputAmount = outputPoolAmount.sub(newOutputPoolAmount);
    return new spl_token_1.u64(outputAmount.toString());
}
exports.computeOutputAmount = computeOutputAmount;
function computeInputAmount(outputAmount, inputPoolAmount, outputPoolAmount, amp) {
    var leverage = amp.mul(N_COINS);
    var newOutputPoolAmount = outputPoolAmount.sub(outputAmount);
    var d = computeD(leverage, outputPoolAmount, inputPoolAmount);
    var newInputPoolAmount = _computeOutputAmount(leverage, newOutputPoolAmount, d);
    var inputAmount = newInputPoolAmount.sub(inputPoolAmount);
    return new spl_token_1.u64(inputAmount.toString());
}
exports.computeInputAmount = computeInputAmount;
function computeEqualInput(tokenAPoolAmount, tokenBPoolAmount, amp) {
    var leverage = amp.mul(N_COINS);
    var invariant = computeD(leverage, tokenAPoolAmount, tokenBPoolAmount);
    var a = new decimal_js_1.Decimal(amp.mul(EIGHT).toString());
    var b = new decimal_js_1.Decimal(invariant.sub(amp.mul(invariant).mul(FOUR)).toString());
    var c = new decimal_js_1.Decimal(0);
    var d = new decimal_js_1.Decimal(invariant.neg().pow(THREE).div(FOUR).toString());
    var roots = cuberoots_1.getCubicRoots(a, b, c, d);
    return new spl_token_1.u64(roots[0].real.round().toString());
}
exports.computeEqualInput = computeEqualInput;
function computeBaseOutputAmount(inputAmount, inputPoolAmount, outputPoolAmount, amp) {
    var leverage = amp.mul(N_COINS);
    var invariant = computeD(leverage, inputPoolAmount, outputPoolAmount);
    var a = amp.mul(SIXTEEN);
    var b = a;
    var c = invariant.mul(FOUR).sub(invariant.mul(amp).mul(SIXTEEN));
    var numerator = TWO.mul(a)
        .mul(inputPoolAmount)
        .add(b.mul(outputPoolAmount))
        .add(c)
        .mul(outputPoolAmount);
    var denominator = a
        .mul(inputPoolAmount)
        .add(TWO.mul(b).mul(outputPoolAmount).add(c))
        .mul(inputPoolAmount);
    return new spl_token_1.u64(inputAmount.mul(numerator).div(denominator).toString());
}
exports.computeBaseOutputAmount = computeBaseOutputAmount;
function computeSingleTokenDepositOutput(inputAmount, isA, tokenAPoolAmount, tokenBPoolAmount, amp, poolTokenSupply) {
    if (inputAmount.eq(ZERO)) {
        return ZERO;
    }
    var leverage = amp.mul(N_COINS);
    var d0 = computeD(leverage, tokenAPoolAmount, tokenBPoolAmount);
    var _a = isA ?
        [tokenAPoolAmount, tokenBPoolAmount] :
        [tokenBPoolAmount, tokenAPoolAmount], depositTokenAmount = _a[0], otherTokenAmount = _a[1];
    var updatedDepositTokenAmount = depositTokenAmount.add(inputAmount);
    var d1 = computeD(leverage, updatedDepositTokenAmount, otherTokenAmount);
    var diff = d1.sub(d0);
    var finalAmount = new decimal_js_1.Decimal(diff.toString()).mul(poolTokenSupply.toString()).div(d0.toString());
    return new spl_token_1.u64(finalAmount.floor().toString());
}
exports.computeSingleTokenDepositOutput = computeSingleTokenDepositOutput;
//# sourceMappingURL=index.js.map