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
exports.withPostChatMessage = void 0;
const web3_js_1 = require("@solana/web3.js");
const serialisation_1 = require("./serialisation");
const borsh_1 = require("borsh");
const instructions_1 = require("./instructions");
const runtime_1 = require("../tools/sdk/runtime");
const withRealmConfigAccounts_1 = require("../governance/withRealmConfigAccounts");
function withPostChatMessage(instructions, signers, chatProgramId, governanceProgramId, realm, governance, proposal, tokenOwnerRecord, governanceAuthority, payer, replyTo, body, voterWeightRecord) {
    return __awaiter(this, void 0, void 0, function* () {
        const args = new instructions_1.PostChatMessageArgs({
            body,
        });
        const data = Buffer.from((0, borsh_1.serialize)(serialisation_1.GOVERNANCE_CHAT_SCHEMA, args));
        const chatMessage = new web3_js_1.Keypair();
        signers.push(chatMessage);
        let keys = [
            {
                pubkey: governanceProgramId,
                isWritable: false,
                isSigner: false,
            },
            {
                pubkey: realm,
                isWritable: false,
                isSigner: false,
            },
            {
                pubkey: governance,
                isWritable: false,
                isSigner: false,
            },
            {
                pubkey: proposal,
                isWritable: false,
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
                pubkey: chatMessage.publicKey,
                isWritable: true,
                isSigner: true,
            },
            {
                pubkey: payer,
                isWritable: false,
                isSigner: true,
            },
            {
                pubkey: runtime_1.SYSTEM_PROGRAM_ID,
                isWritable: false,
                isSigner: false,
            },
        ];
        if (replyTo) {
            keys.push({
                pubkey: replyTo,
                isWritable: false,
                isSigner: false,
            });
        }
        yield (0, withRealmConfigAccounts_1.withRealmConfigAccounts)(keys, governanceProgramId, realm, voterWeightRecord);
        instructions.push(new web3_js_1.TransactionInstruction({
            keys,
            programId: chatProgramId,
            data,
        }));
        return chatMessage.publicKey;
    });
}
exports.withPostChatMessage = withPostChatMessage;
//# sourceMappingURL=withPostChatMessage.js.map