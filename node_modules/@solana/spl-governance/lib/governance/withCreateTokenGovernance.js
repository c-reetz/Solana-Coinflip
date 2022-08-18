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
exports.withCreateTokenGovernance = void 0;
const web3_js_1 = require("@solana/web3.js");
const serialisation_1 = require("./serialisation");
const borsh_1 = require("borsh");
const instructions_1 = require("./instructions");
const runtime_1 = require("../tools/sdk/runtime");
const splToken_1 = require("../tools/sdk/splToken");
const withRealmConfigAccounts_1 = require("./withRealmConfigAccounts");
const constants_1 = require("../registry/constants");
const withCreateTokenGovernance = (instructions, programId, programVersion, realm, governedToken, config, transferAccountAuthorities, tokenOwner, tokenOwnerRecord, payer, governanceAuthority, voterWeightRecord) => __awaiter(void 0, void 0, void 0, function* () {
    const args = new instructions_1.CreateTokenGovernanceArgs({
        config,
        transferTokenOwner: transferAccountAuthorities,
    });
    const data = Buffer.from((0, borsh_1.serialize)(serialisation_1.GOVERNANCE_SCHEMA, args));
    const [governanceAddress] = yield web3_js_1.PublicKey.findProgramAddress([
        Buffer.from('token-governance'),
        realm.toBuffer(),
        governedToken.toBuffer(),
    ], programId);
    const keys = [
        {
            pubkey: realm,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: governanceAddress,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: governedToken,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: tokenOwner,
            isWritable: false,
            isSigner: true,
        },
        {
            pubkey: tokenOwnerRecord,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: payer,
            isWritable: true,
            isSigner: true,
        },
        {
            pubkey: splToken_1.TOKEN_PROGRAM_ID,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: runtime_1.SYSTEM_PROGRAM_ID,
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
    keys.push({
        pubkey: governanceAuthority,
        isWritable: false,
        isSigner: true,
    });
    yield (0, withRealmConfigAccounts_1.withRealmConfigAccounts)(keys, programId, realm, voterWeightRecord);
    instructions.push(new web3_js_1.TransactionInstruction({
        keys,
        programId,
        data,
    }));
    return governanceAddress;
});
exports.withCreateTokenGovernance = withCreateTokenGovernance;
//# sourceMappingURL=withCreateTokenGovernance.js.map