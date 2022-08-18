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
exports.tryGetGovernanceAccount = exports.getGovernanceAccount = exports.getGovernanceAccounts = exports.getAllProposals = exports.getProposalsByGovernance = exports.getProposal = exports.getAllGovernances = exports.getGovernance = exports.getAllTokenOwnerRecords = exports.getTokenOwnerRecordsByOwner = exports.getTokenOwnerRecord = exports.getTokenOwnerRecordForRealm = exports.getVoteRecordsByVoter = exports.tryGetRealmConfig = exports.getRealms = exports.getRealm = void 0;
const serialisation_1 = require("./serialisation");
const accounts_1 = require("./accounts");
const api_1 = require("../core/api");
// Realms
function getRealm(connection, realm) {
    return __awaiter(this, void 0, void 0, function* () {
        return getGovernanceAccount(connection, realm, accounts_1.Realm);
    });
}
exports.getRealm = getRealm;
function getRealms(connection, programId) {
    return __awaiter(this, void 0, void 0, function* () {
        return getGovernanceAccounts(connection, programId, accounts_1.Realm);
    });
}
exports.getRealms = getRealms;
// Realm config
function tryGetRealmConfig(connection, programId, realmPk) {
    return __awaiter(this, void 0, void 0, function* () {
        const realmConfigPk = yield (0, accounts_1.getRealmConfigAddress)(programId, realmPk);
        return getGovernanceAccount(connection, realmConfigPk, accounts_1.RealmConfigAccount);
    });
}
exports.tryGetRealmConfig = tryGetRealmConfig;
// VoteRecords
function getVoteRecordsByVoter(connection, programId, voter) {
    return __awaiter(this, void 0, void 0, function* () {
        return getGovernanceAccounts(connection, programId, accounts_1.VoteRecord, [
            (0, api_1.pubkeyFilter)(33, voter),
        ]);
    });
}
exports.getVoteRecordsByVoter = getVoteRecordsByVoter;
// TokenOwnerRecords
function getTokenOwnerRecordForRealm(connection, programId, realm, governingTokenMint, governingTokenOwner) {
    return __awaiter(this, void 0, void 0, function* () {
        const tokenOwnerRecordPk = yield (0, accounts_1.getTokenOwnerRecordAddress)(programId, realm, governingTokenMint, governingTokenOwner);
        return getGovernanceAccount(connection, tokenOwnerRecordPk, accounts_1.TokenOwnerRecord);
    });
}
exports.getTokenOwnerRecordForRealm = getTokenOwnerRecordForRealm;
function getTokenOwnerRecord(connection, tokenOwnerRecordPk) {
    return __awaiter(this, void 0, void 0, function* () {
        return getGovernanceAccount(connection, tokenOwnerRecordPk, accounts_1.TokenOwnerRecord);
    });
}
exports.getTokenOwnerRecord = getTokenOwnerRecord;
/**
 * Returns TokenOwnerRecords for the given token owner (voter)
 * Note: The function returns TokenOwnerRecords for both council and community token holders
 *
 * @param connection
 * @param programId
 * @param governingTokenOwner
 * @returns
 */
function getTokenOwnerRecordsByOwner(connection, programId, governingTokenOwner) {
    return __awaiter(this, void 0, void 0, function* () {
        return getGovernanceAccounts(connection, programId, accounts_1.TokenOwnerRecord, [
            (0, api_1.pubkeyFilter)(1 + 32 + 32, governingTokenOwner),
        ]);
    });
}
exports.getTokenOwnerRecordsByOwner = getTokenOwnerRecordsByOwner;
/**
 * Returns all TokenOwnerRecords for all members for the given Realm
 * Note: The function returns TokenOwnerRecords for both council and community token holders
 *
 * @param connection
 * @param programId
 * @param realmPk
 * @returns
 */
function getAllTokenOwnerRecords(connection, programId, realmPk) {
    return __awaiter(this, void 0, void 0, function* () {
        return getGovernanceAccounts(connection, programId, accounts_1.TokenOwnerRecord, [
            (0, api_1.pubkeyFilter)(1, realmPk),
        ]);
    });
}
exports.getAllTokenOwnerRecords = getAllTokenOwnerRecords;
// Governances
function getGovernance(connection, governance) {
    return __awaiter(this, void 0, void 0, function* () {
        return getGovernanceAccount(connection, governance, accounts_1.Governance);
    });
}
exports.getGovernance = getGovernance;
/**
 * Returns all governances for the given program instance and realm
 *
 * @param connection
 * @param programId
 * @param realmPk
 * @returns
 */
function getAllGovernances(connection, programId, realmPk) {
    return __awaiter(this, void 0, void 0, function* () {
        return getGovernanceAccounts(connection, programId, accounts_1.Governance, [
            (0, api_1.pubkeyFilter)(1, realmPk),
        ]);
    });
}
exports.getAllGovernances = getAllGovernances;
// Proposal
function getProposal(connection, proposal) {
    return __awaiter(this, void 0, void 0, function* () {
        return getGovernanceAccount(connection, proposal, accounts_1.Proposal);
    });
}
exports.getProposal = getProposal;
/**
 * Returns all Proposals for the given Governance
 *
 * @param connection
 * @param programId
 * @param governancePk
 * @returns
 */
function getProposalsByGovernance(connection, programId, governancePk) {
    return __awaiter(this, void 0, void 0, function* () {
        return getGovernanceAccounts(connection, programId, accounts_1.Proposal, [
            (0, api_1.pubkeyFilter)(1, governancePk),
        ]);
    });
}
exports.getProposalsByGovernance = getProposalsByGovernance;
/**
 * Returns all Proposals for the given Realm
 *
 * @param connection
 * @param programId
 * @param realmPk
 * @returns
 */
function getAllProposals(connection, programId, realmPk) {
    return __awaiter(this, void 0, void 0, function* () {
        return getAllGovernances(connection, programId, realmPk).then(gs => Promise.all(gs.map(g => getProposalsByGovernance(connection, programId, g.pubkey))));
    });
}
exports.getAllProposals = getAllProposals;
// Generic API
function getGovernanceAccounts(connection, programId, accountClass, filters = []) {
    return __awaiter(this, void 0, void 0, function* () {
        const accountTypes = (0, accounts_1.getAccountTypes)(accountClass);
        let all = [];
        for (const accountType of accountTypes) {
            let accounts = yield (0, api_1.getBorshProgramAccounts)(connection, programId, at => (0, serialisation_1.getGovernanceSchemaForAccount)(at), accountClass, filters, accountType);
            all.push(...accounts);
        }
        return all;
    });
}
exports.getGovernanceAccounts = getGovernanceAccounts;
function getGovernanceAccount(connection, accountPk, accountClass) {
    return __awaiter(this, void 0, void 0, function* () {
        const accountInfo = yield connection.getAccountInfo(accountPk);
        if (!accountInfo) {
            throw new Error(`Account ${accountPk} of type ${accountClass.name} not found`);
        }
        return (0, serialisation_1.GovernanceAccountParser)(accountClass)(accountPk, accountInfo);
    });
}
exports.getGovernanceAccount = getGovernanceAccount;
function tryGetGovernanceAccount(connection, accountPk, accountClass) {
    return __awaiter(this, void 0, void 0, function* () {
        const accountInfo = yield connection.getAccountInfo(accountPk);
        if (accountInfo) {
            return (0, serialisation_1.GovernanceAccountParser)(accountClass)(accountPk, accountInfo);
        }
    });
}
exports.tryGetGovernanceAccount = tryGetGovernanceAccount;
//# sourceMappingURL=api.js.map