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
exports.withCreateRealm = void 0;
const web3_js_1 = require("@solana/web3.js");
const serialisation_1 = require("./serialisation");
const borsh_1 = require("borsh");
const instructions_1 = require("./instructions");
const accounts_1 = require("./accounts");
const constants_1 = require("../registry/constants");
const sdk_1 = require("../tools/sdk");
function withCreateRealm(instructions, programId, programVersion, name, realmAuthority, communityMint, payer, councilMint, communityMintMaxVoteWeightSource, minCommunityWeightToCreateGovernance, communityVoterWeightAddin, maxCommunityVoterWeightAddin) {
    return __awaiter(this, void 0, void 0, function* () {
        if (communityVoterWeightAddin && programVersion < constants_1.PROGRAM_VERSION_V2) {
            throw new Error(`Voter weight addin is not supported in version ${programVersion}`);
        }
        const configArgs = new accounts_1.RealmConfigArgs({
            useCouncilMint: councilMint !== undefined,
            minCommunityTokensToCreateGovernance: minCommunityWeightToCreateGovernance,
            communityMintMaxVoteWeightSource,
            useCommunityVoterWeightAddin: communityVoterWeightAddin !== undefined,
            useMaxCommunityVoterWeightAddin: maxCommunityVoterWeightAddin !== undefined,
        });
        const args = new instructions_1.CreateRealmArgs({
            configArgs,
            name,
        });
        const data = Buffer.from((0, borsh_1.serialize)((0, serialisation_1.getGovernanceSchema)(programVersion), args));
        const [realmAddress] = yield web3_js_1.PublicKey.findProgramAddress([Buffer.from(accounts_1.GOVERNANCE_PROGRAM_SEED), Buffer.from(args.name)], programId);
        const communityTokenHoldingAddress = yield (0, accounts_1.getTokenHoldingAddress)(programId, realmAddress, communityMint);
        let keys = [
            {
                pubkey: realmAddress,
                isSigner: false,
                isWritable: true,
            },
            {
                pubkey: realmAuthority,
                isSigner: false,
                isWritable: false,
            },
            {
                pubkey: communityMint,
                isSigner: false,
                isWritable: false,
            },
            {
                pubkey: communityTokenHoldingAddress,
                isSigner: false,
                isWritable: true,
            },
            {
                pubkey: payer,
                isSigner: true,
                isWritable: true,
            },
            {
                pubkey: sdk_1.SYSTEM_PROGRAM_ID,
                isSigner: false,
                isWritable: false,
            },
            {
                pubkey: sdk_1.TOKEN_PROGRAM_ID,
                isSigner: false,
                isWritable: false,
            },
            {
                pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
                isSigner: false,
                isWritable: false,
            },
        ];
        if (councilMint) {
            const councilTokenHoldingAddress = yield (0, accounts_1.getTokenHoldingAddress)(programId, realmAddress, councilMint);
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
            const realmConfigAddress = yield (0, accounts_1.getRealmConfigAddress)(programId, realmAddress);
            keys.push({
                pubkey: realmConfigAddress,
                isSigner: false,
                isWritable: true,
            });
        }
        instructions.push(new web3_js_1.TransactionInstruction({
            keys,
            programId,
            data,
        }));
        return realmAddress;
    });
}
exports.withCreateRealm = withCreateRealm;
//# sourceMappingURL=withCreateRealm.js.map