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
exports.withSetRealmConfig = void 0;
const web3_js_1 = require("@solana/web3.js");
const accounts_1 = require("./accounts");
const instructions_1 = require("./instructions");
const serialisation_1 = require("./serialisation");
const borsh_1 = require("borsh");
const runtime_1 = require("../tools/sdk/runtime");
const constants_1 = require("../registry/constants");
function withSetRealmConfig(instructions, programId, programVersion, realm, realmAuthority, councilMint, communityMintMaxVoteWeightSource, minCommunityTokensToCreateGovernance, communityVoterWeightAddin, maxCommunityVoterWeightAddin, payer) {
    return __awaiter(this, void 0, void 0, function* () {
        const configArgs = new accounts_1.RealmConfigArgs({
            useCouncilMint: councilMint !== undefined,
            communityMintMaxVoteWeightSource,
            minCommunityTokensToCreateGovernance,
            useCommunityVoterWeightAddin: communityVoterWeightAddin !== undefined,
            useMaxCommunityVoterWeightAddin: maxCommunityVoterWeightAddin !== undefined,
        });
        const args = new instructions_1.SetRealmConfigArgs({ configArgs });
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
        if (councilMint) {
            const councilTokenHoldingAddress = yield (0, accounts_1.getTokenHoldingAddress)(programId, realm, councilMint);
            keys = [
                ...keys,
                {
                    pubkey: councilMint,
                    isSigner: false,
                    isWritable: false,
                },
                {
                    pubkey: councilTokenHoldingAddress,
                    isSigner: false,
                    isWritable: true,
                },
            ];
        }
        if (programVersion > constants_1.PROGRAM_VERSION_V1) {
            keys.push({
                pubkey: runtime_1.SYSTEM_PROGRAM_ID,
                isSigner: false,
                isWritable: false,
            });
            const realmConfigAddress = yield (0, accounts_1.getRealmConfigAddress)(programId, realm);
            keys.push({
                pubkey: realmConfigAddress,
                isSigner: false,
                isWritable: true,
            });
            if (communityVoterWeightAddin) {
                keys.push({
                    pubkey: communityVoterWeightAddin,
                    isWritable: false,
                    isSigner: false,
                });
            }
            if (maxCommunityVoterWeightAddin) {
                keys.push({
                    pubkey: maxCommunityVoterWeightAddin,
                    isWritable: false,
                    isSigner: false,
                });
            }
            if (communityVoterWeightAddin || maxCommunityVoterWeightAddin) {
                keys.push({
                    pubkey: payer,
                    isSigner: true,
                    isWritable: true,
                });
            }
        }
        instructions.push(new web3_js_1.TransactionInstruction({
            keys,
            programId,
            data,
        }));
    });
}
exports.withSetRealmConfig = withSetRealmConfig;
//# sourceMappingURL=withSetRealmConfig.js.map