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
exports.withDepositGoverningTokens = void 0;
const web3_js_1 = require("@solana/web3.js");
const serialisation_1 = require("./serialisation");
const borsh_1 = require("borsh");
const instructions_1 = require("./instructions");
const accounts_1 = require("./accounts");
const runtime_1 = require("../tools/sdk/runtime");
const splToken_1 = require("../tools/sdk/splToken");
const constants_1 = require("../registry/constants");
const withDepositGoverningTokens = (instructions, programId, programVersion, realm, governingTokenSource, governingTokenMint, governingTokenOwner, transferAuthority, payer, amount) => __awaiter(void 0, void 0, void 0, function* () {
    const args = new instructions_1.DepositGoverningTokensArgs({ amount });
    const data = Buffer.from((0, borsh_1.serialize)((0, serialisation_1.getGovernanceSchema)(programVersion), args));
    const tokenOwnerRecordAddress = yield (0, accounts_1.getTokenOwnerRecordAddress)(programId, realm, governingTokenMint, governingTokenOwner);
    const [governingTokenHoldingAddress] = yield web3_js_1.PublicKey.findProgramAddress([
        Buffer.from(accounts_1.GOVERNANCE_PROGRAM_SEED),
        realm.toBuffer(),
        governingTokenMint.toBuffer(),
    ], programId);
    const keys = [
        {
            pubkey: realm,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: governingTokenHoldingAddress,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: governingTokenSource,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: governingTokenOwner,
            isWritable: false,
            isSigner: true,
        },
        {
            pubkey: transferAuthority,
            isWritable: false,
            isSigner: true,
        },
        {
            pubkey: tokenOwnerRecordAddress,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: payer,
            isWritable: true,
            isSigner: true,
        },
        {
            pubkey: runtime_1.SYSTEM_PROGRAM_ID,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: splToken_1.TOKEN_PROGRAM_ID,
            isWritable: false,
            isSigner: false,
        },
    ];
    if (programVersion === constants_1.PROGRAM_VERSION_V1) {
        keys.push({
            pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
            isWritable: false,
            isSigner: false,
        });
    }
    instructions.push(new web3_js_1.TransactionInstruction({
        keys,
        programId,
        data,
    }));
    return tokenOwnerRecordAddress;
});
exports.withDepositGoverningTokens = withDepositGoverningTokens;
//# sourceMappingURL=withDepositGoverningTokens.js.map