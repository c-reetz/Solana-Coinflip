"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withSetRealmAuthority = void 0;
const web3_js_1 = require("@solana/web3.js");
const serialisation_1 = require("./serialisation");
const borsh_1 = require("borsh");
const instructions_1 = require("./instructions");
const registry_1 = require("../registry");
const withSetRealmAuthority = (instructions, programId, programVersion, realm, realmAuthority, newRealmAuthority, action) => {
    const args = new instructions_1.SetRealmAuthorityArgs({
        newRealmAuthority: newRealmAuthority,
        action: action, // V2
    });
    const data = Buffer.from((0, borsh_1.serialize)((0, serialisation_1.getGovernanceSchema)(programVersion), args));
    let keys = [
        {
            pubkey: realm,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: realmAuthority,
            isWritable: false,
            isSigner: true,
        },
    ];
    if (programVersion > registry_1.PROGRAM_VERSION_V1) {
        keys.push({
            pubkey: newRealmAuthority,
            isWritable: false,
            isSigner: false,
        });
    }
    instructions.push(new web3_js_1.TransactionInstruction({
        keys,
        programId,
        data,
    }));
};
exports.withSetRealmAuthority = withSetRealmAuthority;
//# sourceMappingURL=withSetRealmAuthority.js.map