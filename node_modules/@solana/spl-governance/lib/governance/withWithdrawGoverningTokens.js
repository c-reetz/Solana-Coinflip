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
exports.withWithdrawGoverningTokens = void 0;
const web3_js_1 = require("@solana/web3.js");
const serialisation_1 = require("./serialisation");
const borsh_1 = require("borsh");
const instructions_1 = require("./instructions");
const accounts_1 = require("./accounts");
const splToken_1 = require("../tools/sdk/splToken");
const withWithdrawGoverningTokens = (instructions, programId, realm, governingTokenDestination, governingTokenMint, governingTokenOwner) => __awaiter(void 0, void 0, void 0, function* () {
    const args = new instructions_1.WithdrawGoverningTokensArgs();
    const data = Buffer.from((0, borsh_1.serialize)(serialisation_1.GOVERNANCE_SCHEMA, args));
    const [tokenOwnerRecordAddress] = yield web3_js_1.PublicKey.findProgramAddress([
        Buffer.from(accounts_1.GOVERNANCE_PROGRAM_SEED),
        realm.toBuffer(),
        governingTokenMint.toBuffer(),
        governingTokenOwner.toBuffer(),
    ], programId);
    const [governingTokenHoldingAddress] = yield web3_js_1.PublicKey.findProgramAddress([
        Buffer.from(accounts_1.GOVERNANCE_PROGRAM_SEED),
        realm.toBuffer(),
        governingTokenMint.toBuffer(),
    ], programId);
    const keys = [
        { pubkey: realm, isWritable: false, isSigner: false },
        {
            pubkey: governingTokenHoldingAddress,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: governingTokenDestination,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: governingTokenOwner,
            isWritable: false,
            isSigner: true,
        },
        {
            pubkey: tokenOwnerRecordAddress,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: splToken_1.TOKEN_PROGRAM_ID,
            isWritable: false,
            isSigner: false,
        },
    ];
    instructions.push(new web3_js_1.TransactionInstruction({
        keys,
        programId,
        data,
    }));
});
exports.withWithdrawGoverningTokens = withWithdrawGoverningTokens;
//# sourceMappingURL=withWithdrawGoverningTokens.js.map