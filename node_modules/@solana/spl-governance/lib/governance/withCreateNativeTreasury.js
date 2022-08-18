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
exports.withCreateNativeTreasury = void 0;
const web3_js_1 = require("@solana/web3.js");
const serialisation_1 = require("./serialisation");
const borsh_1 = require("borsh");
const instructions_1 = require("./instructions");
const accounts_1 = require("./accounts");
const runtime_1 = require("../tools/sdk/runtime");
const withCreateNativeTreasury = (instructions, programId, governancePk, payer) => __awaiter(void 0, void 0, void 0, function* () {
    const args = new instructions_1.CreateNativeTreasuryArgs();
    const data = Buffer.from((0, borsh_1.serialize)(serialisation_1.GOVERNANCE_SCHEMA, args));
    const nativeTreasuryAddress = yield (0, accounts_1.getNativeTreasuryAddress)(programId, governancePk);
    const keys = [
        {
            pubkey: governancePk,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: nativeTreasuryAddress,
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
            isSigner: false,
            isWritable: false,
        },
    ];
    instructions.push(new web3_js_1.TransactionInstruction({
        keys,
        programId,
        data,
    }));
    return nativeTreasuryAddress;
});
exports.withCreateNativeTreasury = withCreateNativeTreasury;
//# sourceMappingURL=withCreateNativeTreasury.js.map