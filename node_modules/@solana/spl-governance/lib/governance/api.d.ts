import { Connection, PublicKey } from '@solana/web3.js';
import { Governance, GovernanceAccount, Proposal, Realm, TokenOwnerRecord, VoteRecord, RealmConfigAccount } from './accounts';
import { MemcmpFilter } from '../core/api';
import { ProgramAccount } from '../tools/sdk/runtime';
export declare function getRealm(connection: Connection, realm: PublicKey): Promise<ProgramAccount<Realm>>;
export declare function getRealms(connection: Connection, programId: PublicKey): Promise<ProgramAccount<Realm>[]>;
export declare function tryGetRealmConfig(connection: Connection, programId: PublicKey, realmPk: PublicKey): Promise<ProgramAccount<RealmConfigAccount>>;
export declare function getVoteRecordsByVoter(connection: Connection, programId: PublicKey, voter: PublicKey): Promise<ProgramAccount<VoteRecord>[]>;
export declare function getTokenOwnerRecordForRealm(connection: Connection, programId: PublicKey, realm: PublicKey, governingTokenMint: PublicKey, governingTokenOwner: PublicKey): Promise<ProgramAccount<TokenOwnerRecord>>;
export declare function getTokenOwnerRecord(connection: Connection, tokenOwnerRecordPk: PublicKey): Promise<ProgramAccount<TokenOwnerRecord>>;
/**
 * Returns TokenOwnerRecords for the given token owner (voter)
 * Note: The function returns TokenOwnerRecords for both council and community token holders
 *
 * @param connection
 * @param programId
 * @param governingTokenOwner
 * @returns
 */
export declare function getTokenOwnerRecordsByOwner(connection: Connection, programId: PublicKey, governingTokenOwner: PublicKey): Promise<ProgramAccount<TokenOwnerRecord>[]>;
/**
 * Returns all TokenOwnerRecords for all members for the given Realm
 * Note: The function returns TokenOwnerRecords for both council and community token holders
 *
 * @param connection
 * @param programId
 * @param realmPk
 * @returns
 */
export declare function getAllTokenOwnerRecords(connection: Connection, programId: PublicKey, realmPk: PublicKey): Promise<ProgramAccount<TokenOwnerRecord>[]>;
export declare function getGovernance(connection: Connection, governance: PublicKey): Promise<ProgramAccount<Governance>>;
/**
 * Returns all governances for the given program instance and realm
 *
 * @param connection
 * @param programId
 * @param realmPk
 * @returns
 */
export declare function getAllGovernances(connection: Connection, programId: PublicKey, realmPk: PublicKey): Promise<ProgramAccount<Governance>[]>;
export declare function getProposal(connection: Connection, proposal: PublicKey): Promise<ProgramAccount<Proposal>>;
/**
 * Returns all Proposals for the given Governance
 *
 * @param connection
 * @param programId
 * @param governancePk
 * @returns
 */
export declare function getProposalsByGovernance(connection: Connection, programId: PublicKey, governancePk: PublicKey): Promise<ProgramAccount<Proposal>[]>;
/**
 * Returns all Proposals for the given Realm
 *
 * @param connection
 * @param programId
 * @param realmPk
 * @returns
 */
export declare function getAllProposals(connection: Connection, programId: PublicKey, realmPk: PublicKey): Promise<ProgramAccount<Proposal>[][]>;
export declare function getGovernanceAccounts<TAccount extends GovernanceAccount>(connection: Connection, programId: PublicKey, accountClass: new (args: any) => TAccount, filters?: MemcmpFilter[]): Promise<ProgramAccount<TAccount>[]>;
export declare function getGovernanceAccount<TAccount extends GovernanceAccount>(connection: Connection, accountPk: PublicKey, accountClass: new (args: any) => TAccount): Promise<ProgramAccount<TAccount>>;
export declare function tryGetGovernanceAccount<TAccount extends GovernanceAccount>(connection: Connection, accountPk: PublicKey, accountClass: new (args: any) => TAccount | undefined): Promise<ProgramAccount<TAccount> | undefined>;
//# sourceMappingURL=api.d.ts.map