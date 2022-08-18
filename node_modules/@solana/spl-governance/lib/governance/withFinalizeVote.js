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
exports.withFinalizeVote = void 0;
const web3_js_1 = require("@solana/web3.js");
const serialisation_1 = require("./serialisation");
const borsh_1 = require("borsh");
const instructions_1 = require("./instructions");
const constants_1 = require("../registry/constants");
const withRealmConfigAccounts_1 = require("./withRealmConfigAccounts");
const withFinalizeVote = (instructions, programId, programVersion, realm, governance, proposal, proposalOwnerRecord, governingTokenMint, maxVoterWeightRecord) => __awaiter(void 0, void 0, void 0, function* () {
    const args = new instructions_1.FinalizeVoteArgs();
    const data = Buffer.from((0, borsh_1.serialize)(serialisation_1.GOVERNANCE_SCHEMA, args));
    const [realmIsWritable, governanceIsWritable] = programVersion === constants_1.PROGRAM_VERSION_V1 ? [false, false] : [true, true];
    let keys = [
        {
            pubkey: realm,
            isWritable: realmIsWritable,
            isSigner: false,
        },
        {
            pubkey: governance,
            isWritable: governanceIsWritable,
            isSigner: false,
        },
        {
            pubkey: proposal,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: proposalOwnerRecord,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: governingTokenMint,
            isWritable: false,
            isSigner: false,
        },
    ];
    if (programVersion === constants_1.PROGRAM_VERSION_V1) {
        keys.push({
            pubkey: web3_js_1.SYSVAR_CLOCK_PUBKEY,
            isSigner: false,
            isWritable: false,
        });
    }
    yield (0, withRealmConfigAccounts_1.withRealmConfigAccounts)(keys, programId, realm, undefined, maxVoterWeightRecord);
    instructions.push(new web3_js_1.TransactionInstruction({
        keys,
        programId,
        data,
    }));
});
exports.withFinalizeVote = withFinalizeVote;
//# sourceMappingURL=withFinalizeVote.js.map