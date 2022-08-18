"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withSignOffProposal = void 0;
const web3_js_1 = require("@solana/web3.js");
const serialisation_1 = require("./serialisation");
const borsh_1 = require("borsh");
const instructions_1 = require("./instructions");
const constants_1 = require("../registry/constants");
const withSignOffProposal = (instructions, programId, programVersion, realm, governance, proposal, signatory, signatoryRecord, proposalOwnerRecord) => {
    const args = new instructions_1.SignOffProposalArgs();
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
    });
    if (programVersion === constants_1.PROGRAM_VERSION_V1) {
        keys.push({
            pubkey: signatoryRecord,
            isWritable: true,
            isSigner: false,
        }, {
            pubkey: signatory,
            isWritable: false,
            isSigner: true,
        }, {
            pubkey: web3_js_1.SYSVAR_CLOCK_PUBKEY,
            isSigner: false,
            isWritable: false,
        });
    }
    else {
        keys.push({
            pubkey: signatory,
            isWritable: false,
            isSigner: true,
        });
        if (proposalOwnerRecord) {
            keys.push({
                pubkey: proposalOwnerRecord,
                isWritable: false,
                isSigner: false,
            });
        }
        else {
            keys.push({
                pubkey: signatoryRecord,
                isWritable: true,
                isSigner: false,
            });
        }
    }
    instructions.push(new web3_js_1.TransactionInstruction({
        keys,
        programId,
        data,
    }));
};
exports.withSignOffProposal = withSignOffProposal;
//# sourceMappingURL=withSignOffProposal.js.map