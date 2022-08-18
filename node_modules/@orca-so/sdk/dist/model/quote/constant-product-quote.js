"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstantProductPoolQuoteBuilder = void 0;
const spl_token_1 = require("@solana/spl-token");
const decimal_js_1 = __importDefault(require("decimal.js"));
const tokens_1 = require("../../constants/tokens");
const public_1 = require("../../public");
/**
 * ConstantProductPools
 *
 * Product price curve:
 * x = inputTokenCount
 * y = outputTokenCount
 * k =  x * y
 */
function getRate(inputTradeAmountU64, params) {
    if (inputTradeAmountU64.eq(public_1.ZERO)) {
        return new decimal_js_1.default(0);
    }
    const expectedOutputAmountU64 = getExpectedOutputAmount(inputTradeAmountU64, params);
    const inputTradeAmount = public_1.DecimalUtil.fromU64(inputTradeAmountU64, params.inputToken.scale);
    const outputTradeAmount = public_1.DecimalUtil.fromU64(expectedOutputAmountU64, params.outputToken.scale);
    return outputTradeAmount.div(inputTradeAmount).toDecimalPlaces(params.outputToken.scale);
}
function getPriceImpact(inputTradeAmount, params) {
    if (inputTradeAmount.eq(public_1.ZERO) || params.outputTokenCount.eq(public_1.ZERO)) {
        return new decimal_js_1.default(0);
    }
    const noSlippageOutputCountU64 = getExpectedOutputAmountWithNoSlippage(inputTradeAmount, params);
    const outputCountU64 = getExpectedOutputAmount(inputTradeAmount, params);
    const noSlippageOutputCount = public_1.DecimalUtil.fromU64(noSlippageOutputCountU64, params.outputToken.scale);
    const outputCount = public_1.DecimalUtil.fromU64(outputCountU64, params.outputToken.scale);
    const impact = noSlippageOutputCount.sub(outputCount).div(noSlippageOutputCount);
    return impact.mul(100).toDecimalPlaces(params.outputToken.scale);
}
function getLPFees(inputTradeAmount, params) {
    const { feeStructure } = params;
    const tradingFee = inputTradeAmount
        .mul(feeStructure.traderFee.numerator)
        .div(feeStructure.traderFee.denominator);
    const ownerFee = inputTradeAmount
        .mul(feeStructure.ownerFee.numerator)
        .div(feeStructure.ownerFee.denominator);
    return new spl_token_1.u64(tradingFee.add(ownerFee).toString());
}
function getExpectedOutputAmount(inputTradeAmount, params) {
    const inputTradeLessFees = inputTradeAmount.sub(getLPFees(inputTradeAmount, params));
    return getOutputAmount(inputTradeLessFees, params);
}
function getExpectedOutputAmountWithNoSlippage(inputTradeAmount, params) {
    if (params.inputTokenCount.eq(public_1.ZERO)) {
        return params.outputTokenCount;
    }
    const inputTradeLessFees = inputTradeAmount.sub(getLPFees(inputTradeAmount, params));
    return inputTradeLessFees.mul(params.outputTokenCount).div(params.inputTokenCount);
}
function getMinimumAmountOut(inputTradeAmount, params) {
    const slippageTolerance = params.slippageTolerance;
    const expectedOutputAmountFees = getExpectedOutputAmount(inputTradeAmount, params);
    const result = expectedOutputAmountFees
        .mul(slippageTolerance.denominator.sub(slippageTolerance.numerator))
        .div(slippageTolerance.denominator);
    return result;
}
// Note: This function matches the calculation done on SERUM and on Web UI.
// Given k = currInputTokenCount * currOutputTokenCount and k = newInputTokenCount * newOutputTokenCount,
// solve for newOutputTokenCount
function getOutputAmount(inputTradeAmount, params) {
    const [poolInputAmount, poolOutputAmount] = [params.inputTokenCount, params.outputTokenCount];
    const invariant = poolInputAmount.mul(poolOutputAmount);
    const [newPoolOutputAmount] = public_1.U64Utils.ceilingDivision(invariant, poolInputAmount.add(inputTradeAmount));
    const outputAmount = poolOutputAmount.sub(newPoolOutputAmount);
    return new spl_token_1.u64(outputAmount.toString());
}
function getNetworkFees(params) {
    let numSigs;
    if (params.inputToken === tokens_1.solToken || params.outputToken === tokens_1.solToken) {
        numSigs = 3;
    }
    else {
        numSigs = 2;
    }
    return params.lamportsPerSignature * numSigs;
}
class ConstantProductPoolQuoteBuilder {
    buildQuote(params, inputTradeAmount) {
        return {
            getRate: () => getRate(inputTradeAmount, params),
            getPriceImpact: () => getPriceImpact(inputTradeAmount, params),
            getLPFees: () => public_1.OrcaU64.fromU64(getLPFees(inputTradeAmount, params), params.inputToken.scale),
            getNetworkFees: () => public_1.OrcaU64.fromNumber(getNetworkFees(params)),
            getExpectedOutputAmount: () => public_1.OrcaU64.fromU64(getExpectedOutputAmount(inputTradeAmount, params), params.outputToken.scale),
            getMinOutputAmount: () => public_1.OrcaU64.fromU64(getMinimumAmountOut(inputTradeAmount, params), params.outputToken.scale),
        };
    }
}
exports.ConstantProductPoolQuoteBuilder = ConstantProductPoolQuoteBuilder;
