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
exports.deriveAssociatedTokenAddress = exports.resolveOrCreateAssociatedTokenAddress = void 0;
const spl_token_1 = require("@solana/spl-token");
const web3_js_1 = require("@solana/web3.js");
const tokens_1 = require("../../../constants/tokens");
const constants_1 = require("../constants");
const instruction_1 = require("../models/instruction");
const deserialize_account_1 = require("./deserialize-account");
const token_instructions_1 = require("./instructions/token-instructions");
/**
 * IMPORTANT: wrappedSolAmountIn should only be used for input/source token that
 *            could be SOL. This is because when SOL is the output, it is the end
 *            destination, and thus does not need to be wrapped with an amount.
 *
 * @param connection Solana connection class
 * @param owner The keypair for the user's wallet or just the user's public key
 * @param tokenMint Token mint address
 * @param wrappedSolAmountIn Optional. Only use for input/source token that could be SOL
 * @returns
 */
function resolveOrCreateAssociatedTokenAddress(connection, owner, tokenMint, wrappedSolAmountIn = new spl_token_1.u64(0)) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!tokenMint.equals(tokens_1.solToken.mint)) {
            const derivedAddress = yield deriveAssociatedTokenAddress(owner.publicKey, tokenMint);
            // Check if current wallet has an ATA for this spl-token mint. If not, create one.
            let resolveAtaInstruction = instruction_1.emptyInstruction;
            yield connection.getAccountInfo(derivedAddress).then((info) => {
                const tokenAccountInfo = (0, deserialize_account_1.deserializeAccount)(info === null || info === void 0 ? void 0 : info.data);
                if (!tokenAccountInfo) {
                    resolveAtaInstruction = (0, token_instructions_1.createAssociatedTokenAccountInstruction)(derivedAddress, owner.publicKey, owner.publicKey, tokenMint, owner);
                }
            });
            return {
                address: derivedAddress,
                instructions: resolveAtaInstruction.instructions,
                cleanupInstructions: resolveAtaInstruction.cleanupInstructions,
                signers: resolveAtaInstruction.signers,
            };
        }
        else {
            // TODO: Is there a way to store this cleaner?
            const accountRentExempt = yield connection.getMinimumBalanceForRentExemption(spl_token_1.AccountLayout.span);
            // Create a temp-account to transfer SOL in the form of WSOL
            return (0, token_instructions_1.createWSOLAccountInstructions)(owner.publicKey, tokens_1.solToken.mint, wrappedSolAmountIn, accountRentExempt);
        }
    });
}
exports.resolveOrCreateAssociatedTokenAddress = resolveOrCreateAssociatedTokenAddress;
function deriveAssociatedTokenAddress(walletAddress, tokenMint) {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield web3_js_1.PublicKey.findProgramAddress([walletAddress.toBuffer(), spl_token_1.TOKEN_PROGRAM_ID.toBuffer(), tokenMint.toBuffer()], constants_1.SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID))[0];
    });
}
exports.deriveAssociatedTokenAddress = deriveAssociatedTokenAddress;
