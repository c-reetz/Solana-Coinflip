"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StablePoolQuoteBuilder = void 0;
const spl_token_1 = require("@solana/spl-token");
const decimal_js_1 = __importDefault(require("decimal.js"));
const stablecurve_1 = require("@orca-so/stablecurve");
const public_1 = require("../../public");
const tokens_1 = require("../../constants/tokens");
function getInputAmountLessFees(inputTradeAmount, params) {
    return inputTradeAmount.sub(getLPFees(inputTradeAmount, params));
}
function getOutputAmountWithNoSlippage(inputTradeAmountLessFees, params) {
    const [poolInputAmount, poolOutputAmount, amp] = [
        params.inputTokenCount,
        params.outputTokenCount,
        params.amp,
    ];
    return (0, stablecurve_1.computeBaseOutputAmount)(inputTradeAmountLessFees, poolInputAmount, poolOutputAmount, amp);
}
function getOutputAmount(inputTradeAmountLessFees, params) {
    const [poolInputAmount, poolOutputAmount, amp] = [
        params.inputTokenCount,
        params.outputTokenCount,
        params.amp,
    ];
    return (0, stablecurve_1.computeOutputAmount)(inputTradeAmountLessFees, poolInputAmount, poolOutputAmount, amp);
}
function getExpectedOutputAmountWithNoSlippage(inputTradeAmount, params) {
    const inputTradeAmountLessFees = getInputAmountLessFees(inputTradeAmount, params);
    return getOutputAmountWithNoSlippage(inputTradeAmountLessFees, params);
}
function getExpectedOutputAmount(inputTradeAmount, params) {
    const inputTradeAmountLessFees = getInputAmountLessFees(inputTradeAmount, params);
    return getOutputAmount(inputTradeAmountLessFees, params);
}
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
    if (inputTradeAmount.eq(public_1.ZERO) ||
        params.inputTokenCount.eq(public_1.ZERO) ||
        params.outputTokenCount.eq(public_1.ZERO)) {
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
    const tradingFee = feeStructure.traderFee.numerator === public_1.ZERO
        ? public_1.ZERO
        : inputTradeAmount
            .mul(feeStructure.traderFee.numerator)
            .div(feeStructure.traderFee.denominator);
    const ownerFee = feeStructure.ownerFee.numerator === public_1.ZERO
        ? public_1.ZERO
        : inputTradeAmount
            .mul(feeStructure.ownerFee.numerator)
            .div(feeStructure.ownerFee.denominator);
    return new spl_token_1.u64(tradingFee.add(ownerFee).toString());
}
function getMinimumAmountOut(inputTradeAmount, params) {
    const slippageTolerance = params.slippageTolerance;
    const expectedOutputAmount = getExpectedOutputAmount(inputTradeAmount, params);
    return expectedOutputAmount
        .mul(slippageTolerance.denominator.sub(slippageTolerance.numerator))
        .div(slippageTolerance.denominator);
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
class StablePoolQuoteBuilder {
    buildQuote(params, inputTradeAmount) {
        if (!params.amp) {
            throw new Error("amp param required for stable pool");
        }
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
exports.StablePoolQuoteBuilder = StablePoolQuoteBuilder;
