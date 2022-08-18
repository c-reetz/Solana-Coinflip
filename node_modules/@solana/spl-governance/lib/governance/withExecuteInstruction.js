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
exports.withExecuteInstruction = void 0;
const web3_js_1 = require("@solana/web3.js");
const serialisation_1 = require("./serialisation");
const borsh_1 = require("borsh");
const instructions_1 = require("./instructions");
const accounts_1 = require("./accounts");
const constants_1 = require("../registry/constants");
const withExecuteInstruction = (instructions, programId, programVersion, governance, proposal, transactionAddress, transactionInstructions) => __awaiter(void 0, void 0, void 0, function* () {
    const args = new instructions_1.ExecuteTransactionArgs();
    const data = Buffer.from((0, borsh_1.serialize)(serialisation_1.GOVERNANCE_SCHEMA, args));
    const nativeTreasury = yield (0, accounts_1.getNativeTreasuryAddress)(programId, governance);
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
            pubkey: transactionAddress,
            isWritable: true,
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
    for (let instruction of transactionInstructions) {
        // When an instruction needs to be signed by the Governance PDA or the Native treasury then its isSigner flag has to be reset on AccountMeta
        // because the signature will be required during cpi call invoke_signed() and not when we send ExecuteInstruction
        instruction.accounts = instruction.accounts.map(a => (a.pubkey.toBase58() === governance.toBase58() ||
            a.pubkey.toBase58() === nativeTreasury.toBase58()) &&
            a.isSigner
            ? new accounts_1.AccountMetaData({
                pubkey: a.pubkey,
                isWritable: a.isWritable,
                isSigner: false,
            })
            : a);
        keys.push({
            pubkey: instruction.programId,
            isWritable: false,
            isSigner: false,
        }, ...instruction.accounts);
    }
    instructions.push(new web3_js_1.TransactionInstruction({
        keys,
        programId,
        data,
    }));
});
exports.withExecuteInstruction = withExecuteInstruction;
//# sourceMappingURL=withExecuteInstruction.js.map