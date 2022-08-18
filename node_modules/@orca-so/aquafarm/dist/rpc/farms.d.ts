/// <reference types="node" />
import { AccountInfo, PublicKey } from "@solana/web3.js";
import { ConnectionInternal } from "../utils/types";
import GlobalFarm from "../models/GlobalFarm";
import UserFarm from "../models/UserFarm";
export declare function fetchBatchedAccountInfos(connection: ConnectionInternal, pubkeys: PublicKey[]): Promise<AccountInfo<Buffer>[] | null>;
/**
 *
 * @param connection A Solana RPC connection
 * @param farmPubkeys The public keys for the GlobalFarm accounts
 * @returns An array of GlobalFarm models
 */
export declare function fetchGlobalFarms(connection: ConnectionInternal, farmPubkeys: PublicKey[], programId: PublicKey): Promise<GlobalFarm[]>;
/**
 *
 * @param connection A Solana RPC connection
 * @param userPubkey The user's SOL address (UserFarm.owner)
 * @param farmPubkeys The public keys for the GlobalFarm accounts for which to fetch UserFarm accounts
 * @returns An array of GlobalFarm models
 */
export declare function fetchUserFarms(connection: ConnectionInternal, userPubkey: PublicKey, farmPubkeys: PublicKey[], programId: PublicKey): Promise<(UserFarm | null)[]>;
