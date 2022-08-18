"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrcaPoolImpl = void 0;
const spl_token_1 = require("@solana/spl-token");
const orca_defaults_1 = require("../../../constants/orca-defaults");
const public_1 = require("../../../public");
const pool_instructions_1 = require("../../../public/utils/web3/instructions/pool-instructions");
const key_utils_1 = require("../../../public/utils/web3/key-utils");
const quote_builder_1 = require("../../quote/quote-builder");
class OrcaPoolImpl {
    constructor(connection, network, config) {
        this.connection = connection;
        this.poolParams = config;
        this.orcaTokenSwapId =
            network === public_1.Network.MAINNET ? public_1.ORCA_TOKEN_SWAP_ID : public_1.ORCA_TOKEN_SWAP_ID_DEVNET;
    }
    getTokenA() {
        const tokenId = this.poolParams.tokenIds[0];
        return this.poolParams.tokens[tokenId];
    }
    getTokenB() {
        const tokenId = this.poolParams.tokenIds[1];
        return this.poolParams.tokens[tokenId];
    }
    getPoolTokenMint() {
        return this.poolParams.poolTokenMint;
    }
    getLPBalance(owner) {
        return __awaiter(this, void 0, void 0, function* () {
            const address = yield (0, public_1.deriveAssociatedTokenAddress)(owner, this.poolParams.poolTokenMint);
            const accountInfo = yield this.connection.getAccountInfo(address);
            // User does not have a balance for this account
            if (accountInfo == undefined) {
                return public_1.OrcaU64.fromNumber(0, this.poolParams.poolTokenDecimals);
            }
            const result = (0, public_1.deserializeAccount)(accountInfo === null || accountInfo === void 0 ? void 0 : accountInfo.data);
            if (result == undefined) {
                throw new Error("Failed to parse user account for LP token.");
            }
            return public_1.OrcaU64.fromU64(result.amount, this.poolParams.poolTokenDecimals);
        });
    }
    getLPSupply() {
        return __awaiter(this, void 0, void 0, function* () {
            const context = yield this.connection.getTokenSupply(this.poolParams.poolTokenMint);
            const amt = new spl_token_1.u64(context.value.amount);
            return public_1.OrcaU64.fromU64(amt, this.poolParams.poolTokenDecimals);
        });
    }
    getQuote(inputToken, inputAmount, slippage) {
        return __awaiter(this, void 0, void 0, function* () {
            const { inputPoolToken, outputPoolToken } = (0, public_1.getTokens)(this.poolParams, inputToken.mint.toString());
            const { inputTokenCount, outputTokenCount } = yield (0, public_1.getTokenCount)(this.connection, this.poolParams, inputPoolToken, outputPoolToken);
            return this.getQuoteWithPoolAmounts(inputToken, inputAmount, inputTokenCount, outputTokenCount, slippage);
        });
    }
    getQuoteWithPoolAmounts(inputToken, inputAmount, inputTokenPoolAmount, outputTokenPoolAmount, slippage) {
        return __awaiter(this, void 0, void 0, function* () {
            const slippageTolerance = slippage === undefined ? orca_defaults_1.defaultSlippagePercentage : public_1.Percentage.fromDecimal(slippage);
            const feeStructure = this.poolParams.feeStructure;
            const { inputPoolToken, outputPoolToken } = (0, public_1.getTokens)(this.poolParams, inputToken.mint.toString());
            const inputAmountU64 = public_1.U64Utils.toTokenU64(inputAmount, inputPoolToken, "inputAmount");
            const { value: { feeCalculator }, } = yield this.connection.getRecentBlockhashAndContext("singleGossip");
            const quoteParams = {
                inputToken: inputPoolToken,
                outputToken: outputPoolToken,
                inputTokenCount: inputTokenPoolAmount,
                outputTokenCount: outputTokenPoolAmount,
                feeStructure: feeStructure,
                slippageTolerance: slippageTolerance,
                lamportsPerSignature: feeCalculator.lamportsPerSignature,
                amp: this.poolParams.amp !== undefined ? new spl_token_1.u64(this.poolParams.amp) : undefined,
            };
            const quoteBuilder = quote_builder_1.QuoteBuilderFactory.getBuilder(this.poolParams.curveType);
            const quote = quoteBuilder === null || quoteBuilder === void 0 ? void 0 : quoteBuilder.buildQuote(quoteParams, inputAmountU64);
            if (quote == undefined) {
                throw new Error("Failed to get quote!");
            }
            return quote;
        });
    }
    swap(owner, inputToken, amountIn, minimumAmountOut) {
        return __awaiter(this, void 0, void 0, function* () {
            const _owner = new key_utils_1.Owner(owner);
            const ownerAddress = _owner.publicKey;
            const { inputPoolToken, outputPoolToken } = (0, public_1.getTokens)(this.poolParams, inputToken.mint.toString());
            const amountInU64 = public_1.U64Utils.toTokenU64(amountIn, inputPoolToken, "amountIn");
            const minimumAmountOutU64 = public_1.U64Utils.toTokenU64(minimumAmountOut, outputPoolToken, "minimumAmountOut");
            const _a = yield (0, public_1.resolveOrCreateAssociatedTokenAddress)(this.connection, _owner, inputPoolToken.mint, amountInU64), { address: inputPoolTokenUserAddress } = _a, resolveInputAddrInstructions = __rest(_a, ["address"]);
            const _b = yield (0, public_1.resolveOrCreateAssociatedTokenAddress)(this.connection, _owner, outputPoolToken.mint), { address: outputPoolTokenUserAddress } = _b, resolveOutputAddrInstructions = __rest(_b, ["address"]);
            if (inputPoolTokenUserAddress === undefined || outputPoolTokenUserAddress === undefined) {
                throw new Error("Unable to derive input / output token associated address.");
            }
            const _c = (0, pool_instructions_1.createApprovalInstruction)(ownerAddress, amountInU64, inputPoolTokenUserAddress), { userTransferAuthority } = _c, approvalInstruction = __rest(_c, ["userTransferAuthority"]);
            const swapInstruction = yield (0, pool_instructions_1.createSwapInstruction)(this.poolParams, _owner, inputPoolToken, inputPoolTokenUserAddress, outputPoolToken, outputPoolTokenUserAddress, amountInU64, minimumAmountOutU64, userTransferAuthority.publicKey, this.orcaTokenSwapId);
            return yield new public_1.TransactionBuilder(this.connection, ownerAddress, _owner)
                .addInstruction(resolveInputAddrInstructions)
                .addInstruction(resolveOutputAddrInstructions)
                .addInstruction(approvalInstruction)
                .addInstruction(swapInstruction)
                .build();
        });
    }
    getDepositQuote(maxTokenAIn, maxTokenBIn, slippage) {
        return __awaiter(this, void 0, void 0, function* () {
            const slippageTolerance = slippage === undefined ? orca_defaults_1.defaultSlippagePercentage : public_1.Percentage.fromDecimal(slippage);
            const maxTokenAIn_U64 = public_1.U64Utils.toTokenU64(maxTokenAIn, this.getTokenA(), "maxTokenAIn");
            const maxTokenBIn_U64 = public_1.U64Utils.toTokenU64(maxTokenBIn, this.getTokenB(), "maxTokenBIn");
            const { inputTokenCount: tokenAAmount, outputTokenCount: tokenBAmount } = yield (0, public_1.getTokenCount)(this.connection, this.poolParams, this.getTokenA(), this.getTokenB());
            const lpSupply = yield this.getLPSupply();
            if (tokenAAmount.eq(public_1.ZERO) || tokenBAmount.eq(public_1.ZERO)) {
                return {
                    minPoolTokenAmountOut: public_1.OrcaU64.fromU64(public_1.ZERO, lpSupply.scale),
                    maxTokenAIn: public_1.OrcaU64.fromU64(maxTokenAIn_U64, this.getTokenA().scale),
                    maxTokenBIn: public_1.OrcaU64.fromU64(maxTokenBIn_U64, this.getTokenB().scale),
                };
            }
            const poolTokenAmountWithA = maxTokenAIn_U64
                .mul(slippageTolerance.denominator)
                .mul(lpSupply.toU64())
                .div(tokenAAmount)
                .div(slippageTolerance.numerator.add(slippageTolerance.denominator));
            const poolTokenAmountWithB = maxTokenBIn_U64
                .mul(slippageTolerance.denominator)
                .mul(lpSupply.toU64())
                .div(tokenBAmount)
                .div(slippageTolerance.numerator.add(slippageTolerance.denominator));
            // Pick the smaller value of the two to calculate the minimum poolTokenAmount out
            const minPoolTokenAmountOut_U64 = poolTokenAmountWithA.gt(poolTokenAmountWithB)
                ? poolTokenAmountWithB
                : poolTokenAmountWithA;
            return {
                minPoolTokenAmountOut: public_1.OrcaU64.fromU64(minPoolTokenAmountOut_U64, lpSupply.scale),
                maxTokenAIn: public_1.OrcaU64.fromU64(maxTokenAIn_U64, this.getTokenA().scale),
                maxTokenBIn: public_1.OrcaU64.fromU64(maxTokenBIn_U64, this.getTokenB().scale),
            };
        });
    }
    deposit(owner, maxTokenAIn, maxTokenBIn, minPoolTokenAmountOut) {
        return __awaiter(this, void 0, void 0, function* () {
            const _owner = new key_utils_1.Owner(owner);
            const ownerAddress = _owner.publicKey;
            const tokenA = this.getTokenA();
            const tokenB = this.getTokenB();
            const maxTokenAIn_U64 = public_1.U64Utils.toTokenU64(maxTokenAIn, tokenA, "maxTokenAIn");
            const maxTokenBIn_U64 = public_1.U64Utils.toTokenU64(maxTokenBIn, tokenB, "maxTokenBIn");
            const minPoolTokenAmountOut_U64 = public_1.U64Utils.toPoolU64(minPoolTokenAmountOut, this.poolParams, "poolTokenAmount");
            // If tokenA is SOL, this will create a new wSOL account with maxTokenAIn_U64
            // Otherwise, get tokenA's associated token account
            const _a = yield (0, public_1.resolveOrCreateAssociatedTokenAddress)(this.connection, _owner, tokenA.mint, maxTokenAIn_U64), { address: userTokenAPublicKey } = _a, resolveTokenAInstrucitons = __rest(_a, ["address"]);
            // If tokenB is SOL, this will create a new wSOL account with maxTokenBIn_U64
            // Otherwise, get tokenB's associated token account
            const _b = yield (0, public_1.resolveOrCreateAssociatedTokenAddress)(this.connection, _owner, tokenB.mint, maxTokenBIn_U64), { address: userTokenBPublicKey } = _b, resolveTokenBInstrucitons = __rest(_b, ["address"]);
            // If the user lacks the pool token account, create it
            const _c = yield (0, public_1.resolveOrCreateAssociatedTokenAddress)(this.connection, _owner, this.poolParams.poolTokenMint), { address: userPoolTokenPublicKey } = _c, resolvePoolTokenInstructions = __rest(_c, ["address"]);
            // Approve transfer of the tokens being deposited
            const _d = (0, pool_instructions_1.createApprovalInstruction)(ownerAddress, maxTokenAIn_U64, userTokenAPublicKey), { userTransferAuthority } = _d, transferTokenAInstruction = __rest(_d, ["userTransferAuthority"]);
            const transferTokenBInstruction = __rest((0, pool_instructions_1.createApprovalInstruction)(ownerAddress, maxTokenBIn_U64, userTokenBPublicKey, userTransferAuthority), []);
            // Create the deposit instruction
            const depositInstruction = yield (0, pool_instructions_1.createDepositInstruction)(this.poolParams, userTransferAuthority.publicKey, userTokenAPublicKey, userTokenBPublicKey, userPoolTokenPublicKey, minPoolTokenAmountOut_U64, maxTokenAIn_U64, maxTokenBIn_U64, tokenA.addr, tokenB.addr, this.orcaTokenSwapId, _owner);
            return yield new public_1.TransactionBuilder(this.connection, ownerAddress, _owner)
                .addInstruction(resolveTokenAInstrucitons)
                .addInstruction(resolveTokenBInstrucitons)
                .addInstruction(resolvePoolTokenInstructions)
                .addInstruction(transferTokenAInstruction)
                .addInstruction(transferTokenBInstruction)
                .addInstruction(depositInstruction)
                .build();
        });
    }
    getWithdrawQuote(withdrawTokenAmount, withdrawTokenMint, slippage) {
        return __awaiter(this, void 0, void 0, function* () {
            const slippageTolerance = slippage === undefined ? orca_defaults_1.defaultSlippagePercentage : public_1.Percentage.fromDecimal(slippage);
            const lpSupply = yield this.getLPSupply();
            const { inputTokenCount: tokenAAmount, outputTokenCount: tokenBAmount } = yield (0, public_1.getTokenCount)(this.connection, this.poolParams, this.getTokenA(), this.getTokenB());
            // withdrawTokenAmount needs represent amounts for one of the following: poolTokenAmount, tokenAAmount, or tokenBAmount
            // determine which token this amount represents, then calculate poolTokenIn_U64
            let poolTokenIn_U64 = public_1.ZERO;
            if (withdrawTokenMint.equals(this.getPoolTokenMint())) {
                poolTokenIn_U64 = public_1.U64Utils.toPoolU64(withdrawTokenAmount, this.poolParams, "withdrawTokenAmount");
            }
            else if (withdrawTokenMint.equals(this.getTokenA().mint) ||
                withdrawTokenMint.equals(this.getTokenB().mint)) {
                const token = withdrawTokenMint.equals(this.getTokenA().mint)
                    ? this.getTokenA()
                    : this.getTokenB();
                const totalAmount = token.mint.equals(this.getTokenA().mint) ? tokenAAmount : tokenBAmount;
                const numerator = withdrawTokenAmount instanceof public_1.OrcaU64
                    ? withdrawTokenAmount.toDecimal()
                    : withdrawTokenAmount;
                const denominator = public_1.DecimalUtil.fromU64(totalAmount, token.scale);
                const poolTokenIn = lpSupply.toDecimal().div(denominator).mul(numerator);
                poolTokenIn_U64 = public_1.U64Utils.toPoolU64(poolTokenIn, this.poolParams, "poolTokenIn");
            }
            else {
                throw new Error(`Unable to get withdraw quote with an invalid withdrawTokenMint ${withdrawTokenMint}`);
            }
            if (poolTokenIn_U64.eq(public_1.ZERO)) {
                return {
                    maxPoolTokenAmountIn: public_1.OrcaU64.fromU64(public_1.ZERO, lpSupply.scale),
                    minTokenAOut: public_1.OrcaU64.fromU64(public_1.ZERO, this.getTokenA().scale),
                    minTokenBOut: public_1.OrcaU64.fromU64(public_1.ZERO, this.getTokenB().scale),
                };
            }
            const minTokenAOut = new public_1.OrcaU64(poolTokenIn_U64
                .mul(slippageTolerance.denominator)
                .mul(tokenAAmount)
                .div(lpSupply.toU64())
                .div(slippageTolerance.numerator.add(slippageTolerance.denominator)), this.getTokenA().scale);
            const minTokenBOut = new public_1.OrcaU64(poolTokenIn_U64
                .mul(slippageTolerance.denominator)
                .mul(tokenBAmount)
                .div(lpSupply.toU64())
                .div(slippageTolerance.numerator.add(slippageTolerance.denominator)), this.getTokenB().scale);
            return {
                maxPoolTokenAmountIn: public_1.OrcaU64.fromU64(poolTokenIn_U64, lpSupply.scale),
                minTokenAOut,
                minTokenBOut,
            };
        });
    }
    withdraw(owner, poolTokenAmountIn, minTokenAOut, minTokenBOut) {
        return __awaiter(this, void 0, void 0, function* () {
            const _owner = new key_utils_1.Owner(owner);
            const ownerAddress = _owner.publicKey;
            const tokenA = this.getTokenA();
            const tokenB = this.getTokenB();
            const minTokenAOut_U64 = public_1.U64Utils.toTokenU64(minTokenAOut, tokenA, "minTokenAOut");
            const minTokenBOut_U64 = public_1.U64Utils.toTokenU64(minTokenBOut, tokenB, "minTokenBOut");
            const poolTokenAmountIn_U64 = public_1.U64Utils.toPoolU64(poolTokenAmountIn, this.poolParams, "poolTokenAmountIn");
            // Create a token account for tokenA, if necessary
            const _a = yield (0, public_1.resolveOrCreateAssociatedTokenAddress)(this.connection, _owner, tokenA.mint), { address: userTokenAPublicKey } = _a, resolveTokenAInstrucitons = __rest(_a, ["address"]);
            // Create a token account for tokenB, if necessary
            const _b = yield (0, public_1.resolveOrCreateAssociatedTokenAddress)(this.connection, _owner, tokenB.mint), { address: userTokenBPublicKey } = _b, resolveTokenBInstrucitons = __rest(_b, ["address"]);
            // Get user's poolToken token account
            const _c = yield (0, public_1.resolveOrCreateAssociatedTokenAddress)(this.connection, _owner, this.poolParams.poolTokenMint), { address: userPoolTokenPublicKey } = _c, resolvePoolTokenInstructions = __rest(_c, ["address"]);
            // Approve transfer of pool token
            const _d = (0, pool_instructions_1.createApprovalInstruction)(ownerAddress, poolTokenAmountIn_U64, userPoolTokenPublicKey), { userTransferAuthority } = _d, transferPoolTokenInstruction = __rest(_d, ["userTransferAuthority"]);
            // Create the withdraw instruction
            const withdrawInstruction = yield (0, pool_instructions_1.createWithdrawInstruction)(this.poolParams, userTransferAuthority.publicKey, userTokenAPublicKey, userTokenBPublicKey, userPoolTokenPublicKey, poolTokenAmountIn_U64, minTokenAOut_U64, minTokenBOut_U64, tokenA.addr, tokenB.addr, this.orcaTokenSwapId, _owner);
            return yield new public_1.TransactionBuilder(this.connection, ownerAddress, _owner)
                .addInstruction(resolveTokenAInstrucitons)
                .addInstruction(resolveTokenBInstrucitons)
                .addInstruction(resolvePoolTokenInstructions)
                .addInstruction(transferPoolTokenInstruction)
                .addInstruction(withdrawInstruction)
                .build();
        });
    }
}
exports.OrcaPoolImpl = OrcaPoolImpl;
