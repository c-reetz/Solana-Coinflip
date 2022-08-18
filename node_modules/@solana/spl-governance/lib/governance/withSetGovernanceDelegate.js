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
exports.withSetGovernanceDelegate = void 0;
const web3_js_1 = require("@solana/web3.js");
const serialisation_1 = require("./serialisation");
const borsh_1 = require("borsh");
const instructions_1 = require("./instructions");
const accounts_1 = require("./accounts");
const withSetGovernanceDelegate = (instructions, programId, programVersion, realm, governingTokenMint, governingTokenOwner, governanceAuthority, newGovernanceDelegate) => __awaiter(void 0, void 0, void 0, function* () {
    const args = new instructions_1.SetGovernanceDelegateArgs({
        newGovernanceDelegate: newGovernanceDelegate,
    });
    const data = Buffer.from((0, borsh_1.serialize)((0, serialisation_1.getGovernanceSchema)(programVersion), args));
    const tokenOwnerRecordAddress = yield (0, accounts_1.getTokenOwnerRecordAddress)(programId, realm, governingTokenMint, governingTokenOwner);
    let keys = [
        {
            pubkey: governanceAuthority,
            isWritable: false,
            isSigner: true,
        },
        {
            pubkey: tokenOwnerRecordAddress,
            isWritable: true,
            isSigner: false,
        },
    ];
    instructions.push(new web3_js_1.TransactionInstruction({
        keys,
        programId,
        data,
    }));
});
exports.withSetGovernanceDelegate = withSetGovernanceDelegate;
//# sourceMappingURL=withSetGovernanceDelegate.js.map