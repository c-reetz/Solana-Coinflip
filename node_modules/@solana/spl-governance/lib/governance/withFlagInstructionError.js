"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withFlagInstructionError = void 0;
const web3_js_1 = require("@solana/web3.js");
const serialisation_1 = require("./serialisation");
const borsh_1 = require("borsh");
const instructions_1 = require("./instructions");
const withFlagInstructionError = (instructions, programId, proposal, tokenOwnerRecord, governanceAuthority, proposalInstruction) => {
    const args = new instructions_1.FlagInstructionErrorArgs();
    const data = Buffer.from((0, borsh_1.serialize)(serialisation_1.GOVERNANCE_SCHEMA, args));
    const keys = [
        {
            pubkey: proposal,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: tokenOwnerRecord,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: governanceAuthority,
            isWritable: false,
            isSigner: true,
        },
        {
            pubkey: proposalInstruction,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: web3_js_1.SYSVAR_CLOCK_PUBKEY,
            isSigner: false,
            isWritable: false,
        },
    ];
    instructions.push(new web3_js_1.TransactionInstruction({
        keys,
        programId,
        data,
    }));
};
exports.withFlagInstructionError = withFlagInstructionError;
//# sourceMappingURL=withFlagInstructionError.js.map