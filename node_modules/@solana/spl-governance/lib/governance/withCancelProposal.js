"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withCancelProposal = void 0;
const web3_js_1 = require("@solana/web3.js");
const serialisation_1 = require("./serialisation");
const borsh_1 = require("borsh");
const instructions_1 = require("./instructions");
const constants_1 = require("../registry/constants");
const withCancelProposal = (instructions, programId, programVersion, realm, governance, proposal, proposalOwnerRecord, governanceAuthority) => {
    const args = new instructions_1.CancelProposalArgs();
    const data = Buffer.from((0, borsh_1.serialize)(serialisation_1.GOVERNANCE_SCHEMA, args));
    let keys = [];
    if (programVersion > constants_1.PROGRAM_VERSION_V1) {
        keys.push({
            pubkey: realm,
            isWritable: true,
            isSigner: false,
        }, {
            pubkey: governance,
            isWritable: true,
            isSigner: false,
        });
    }
    keys.push({
        pubkey: proposal,
        isWritable: true,
        isSigner: false,
    }, {
        pubkey: proposalOwnerRecord,
        isWritable: true,
        isSigner: false,
    }, {
        pubkey: governanceAuthority,
        isWritable: false,
        isSigner: true,
    });
    if (programVersion == constants_1.PROGRAM_VERSION_V1) {
        keys.push({
            pubkey: web3_js_1.SYSVAR_CLOCK_PUBKEY,
            isSigner: false,
            isWritable: false,
        });
    }
    instructions.push(new web3_js_1.TransactionInstruction({
        keys,
        programId,
        data,
    }));
};
exports.withCancelProposal = withCancelProposal;
//# sourceMappingURL=withCancelProposal.js.map