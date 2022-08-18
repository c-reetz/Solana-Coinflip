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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWithdrawInstruction = exports.createDepositInstruction = exports.createSwapInstruction = exports.createApprovalInstruction = void 0;
const spl_token_1 = require("@solana/spl-token");
const spl_token_swap_1 = require("@solana/spl-token-swap");
const web3_js_1 = require("@solana/web3.js");
const createApprovalInstruction = (ownerAddress, approveAmount, tokenUserAddress, userTransferAuthority) => {
    userTransferAuthority = userTransferAuthority || new web3_js_1.Keypair();
    const approvalInstruction = spl_token_1.Token.createApproveInstruction(spl_token_1.TOKEN_PROGRAM_ID, tokenUserAddress, userTransferAuthority.publicKey, ownerAddress, [], approveAmount);
    const revokeInstruction = spl_token_1.Token.createRevokeInstruction(spl_token_1.TOKEN_PROGRAM_ID, tokenUserAddress, ownerAddress, []);
    return {
        userTransferAuthority: userTransferAuthority,
        instructions: [approvalInstruction],
        cleanupInstructions: [revokeInstruction],
        signers: [userTransferAuthority],
    };
};
exports.createApprovalInstruction = createApprovalInstruction;
const createSwapInstruction = (poolParams, owner, inputToken, inputTokenUserAddress, outputToken, outputTokenUserAddress, amountIn, minimumAmountOut, userTransferAuthority, orcaTokenSwapId) => __awaiter(void 0, void 0, void 0, function* () {
    const amountInU64 = amountIn;
    const minimumAmountOutU64 = minimumAmountOut;
    const [authorityForPoolAddress] = yield web3_js_1.PublicKey.findProgramAddress([poolParams.address.toBuffer()], orcaTokenSwapId);
    const swapInstruction = spl_token_swap_1.TokenSwap.swapInstruction(poolParams.address, authorityForPoolAddress, userTransferAuthority, inputTokenUserAddress, inputToken.addr, outputToken.addr, outputTokenUserAddress, poolParams.poolTokenMint, poolParams.feeAccount, null, orcaTokenSwapId, spl_token_1.TOKEN_PROGRAM_ID, amountInU64, minimumAmountOutU64);
    return {
        instructions: [swapInstruction],
        cleanupInstructions: [],
        signers: owner.signer ? [owner.signer] : [],
    };
});
exports.createSwapInstruction = createSwapInstruction;
const createDepositInstruction = (poolParams, userTransferAuthorityPublicKey, userTokenAPublicKey, userTokenBPublicKey, userPoolTokenPublicKey, poolTokenAmount, maximumTokenA, maximumTokenB, tokenAPublicKey, tokenBPublicKey, orcaTokenSwapId, owner) => __awaiter(void 0, void 0, void 0, function* () {
    const depositInstruction = spl_token_swap_1.TokenSwap.depositAllTokenTypesInstruction(poolParams.address, poolParams.authority, userTransferAuthorityPublicKey, userTokenAPublicKey, userTokenBPublicKey, tokenAPublicKey, tokenBPublicKey, poolParams.poolTokenMint, userPoolTokenPublicKey, orcaTokenSwapId, spl_token_1.TOKEN_PROGRAM_ID, poolTokenAmount, maximumTokenA, maximumTokenB);
    return {
        instructions: [depositInstruction],
        cleanupInstructions: [],
        signers: owner.signer ? [owner.signer] : [],
    };
});
exports.createDepositInstruction = createDepositInstruction;
const createWithdrawInstruction = (poolParams, userTransferAuthorityPublicKey, userTokenAPublicKey, userTokenBPublicKey, userPoolTokenPublicKey, poolTokenAmount, minimumTokenA, minimumTokenB, tokenAPublicKey, tokenBPublicKey, orcaTokenSwapId, owner) => __awaiter(void 0, void 0, void 0, function* () {
    const withdrawInstruction = spl_token_swap_1.TokenSwap.withdrawAllTokenTypesInstruction(poolParams.address, poolParams.authority, userTransferAuthorityPublicKey, poolParams.poolTokenMint, poolParams.feeAccount, userPoolTokenPublicKey, tokenAPublicKey, tokenBPublicKey, userTokenAPublicKey, userTokenBPublicKey, orcaTokenSwapId, spl_token_1.TOKEN_PROGRAM_ID, poolTokenAmount, minimumTokenA, minimumTokenB);
    return {
        instructions: [withdrawInstruction],
        cleanupInstructions: [],
        signers: owner.signer ? [owner.signer] : [],
    };
});
exports.createWithdrawInstruction = createWithdrawInstruction;
