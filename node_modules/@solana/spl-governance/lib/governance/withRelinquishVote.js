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
exports.withRelinquishVote = void 0;
const web3_js_1 = require("@solana/web3.js");
const serialisation_1 = require("./serialisation");
const borsh_1 = require("borsh");
const instructions_1 = require("./instructions");
const withRelinquishVote = (instructions, programId, governance, proposal, tokenOwnerRecord, governingTokenMint, voteRecord, governanceAuthority, beneficiary) => __awaiter(void 0, void 0, void 0, function* () {
    const args = new instructions_1.RelinquishVoteArgs();
    const data = Buffer.from((0, borsh_1.serialize)(serialisation_1.GOVERNANCE_SCHEMA, args));
    let keys = [
        {
            pubkey: governance,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: proposal,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: tokenOwnerRecord,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: voteRecord,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: governingTokenMint,
            isWritable: false,
            isSigner: false,
        },
    ];
    const existingVoteKeys = governanceAuthority && beneficiary
        ? [
            {
                pubkey: governanceAuthority,
                isWritable: false,
                isSigner: true,
            },
            {
                pubkey: beneficiary,
                isWritable: true,
                isSigner: false,
            },
        ]
        : [];
    instructions.push(new web3_js_1.TransactionInstruction({
        keys: [...keys, ...existingVoteKeys],
        programId,
        data,
    }));
});
exports.withRelinquishVote = withRelinquishVote;
//# sourceMappingURL=withRelinquishVote.js.map