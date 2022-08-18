"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSetGovernanceConfig = void 0;
const web3_js_1 = require("@solana/web3.js");
const instructions_1 = require("./instructions");
const serialisation_1 = require("./serialisation");
const borsh_1 = require("borsh");
function createSetGovernanceConfig(programId, governance, governanceConfig) {
    const args = new instructions_1.SetGovernanceConfigArgs({ config: governanceConfig });
    const data = Buffer.from((0, borsh_1.serialize)(serialisation_1.GOVERNANCE_SCHEMA, args));
    const keys = [
        {
            pubkey: governance,
            isWritable: true,
            isSigner: true,
        },
    ];
    return new web3_js_1.TransactionInstruction({
        keys,
        programId,
        data,
    });
}
exports.createSetGovernanceConfig = createSetGovernanceConfig;
//# sourceMappingURL=createSetGovernanceConfig.js.map