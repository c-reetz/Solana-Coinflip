/// <reference types="node" />
import { AccountInfo, PublicKey } from "@solana/web3.js";
import { u64 } from "@solana/spl-token";
import BufferLayout from "buffer-layout";
import Decimal from "decimal.js";
/**
 * Layout for a public key
 */
export declare const publicKey: (property?: string) => Object;
/**
 * Layout for a 64bit unsigned value
 */
export declare const uint64: (property?: string) => Object;
/**
 * Layout for a 256bit unsigned value
 */
export declare const uint256: (property?: string) => Object;
export declare function uint8ToPubkey(data: Uint8Array): PublicKey;
export declare function uint8ToNumber(data: Uint8Array): number;
export declare function uint8ToU64(data: Uint8Array): u64;
export declare function uint256ToString(data: Uint8Array): string;
export declare function uint256ToDecimal(data: Uint8Array): Decimal;
export declare function u64ToBuffer(num: u64): Buffer;
export declare function generateBufferData(dataLayout: typeof BufferLayout, instructionData: any): Buffer;
export declare function decodeGlobalFarmBuffer(accountInfo: AccountInfo<Buffer>): {
    isInitialized: boolean;
    accountType: number;
    nonce: number;
    tokenProgramId: PublicKey;
    emissionsAuthority: PublicKey;
    removeRewardsAuthority: PublicKey;
    baseTokenMint: PublicKey;
    baseTokenVault: PublicKey;
    rewardTokenVault: PublicKey;
    farmTokenMint: PublicKey;
    emissionsPerSecondNumerator: u64;
    emissionsPerSecondDenominator: u64;
    lastUpdatedTimestamp: u64;
    cumulativeEmissionsPerFarmToken: Decimal;
};
export declare const GLOBAL_FARM_DATA_LAYOUT: any;
export interface GlobalFarmStateLayout {
    isInitialized: number;
    accountType: number;
    nonce: number;
    tokenProgramId: Uint8Array;
    emissionsAuthority: Uint8Array;
    removeRewardsAuthority: Uint8Array;
    baseTokenMint: Uint8Array;
    baseTokenVault: Uint8Array;
    rewardTokenVault: Uint8Array;
    farmTokenMint: Uint8Array;
    emissionsPerSecondNumerator: Uint8Array;
    emissionsPerSecondDenominator: Uint8Array;
    lastUpdatedTimestamp: Uint8Array;
    cumulativeEmissionsPerFarmToken: Uint8Array;
}
export declare const INIT_GLOBAL_FARM_DATA_LAYOUT: any;
export declare function decodeUserFarmBuffer(accountInfo: AccountInfo<Buffer>): {
    isInitialized: boolean;
    accountType: number;
    globalFarm: PublicKey;
    owner: PublicKey;
    baseTokensConverted: u64;
    cumulativeEmissionsCheckpoint: Decimal;
};
export declare const USER_FARM_DATA_LAYOUT: any;
export interface UserFarmStateLayout {
    isInitialized: number;
    accountType: number;
    globalFarm: Uint8Array;
    owner: Uint8Array;
    baseTokensConverted: Uint8Array;
    cumulativeEmissionsCheckpoint: Uint8Array;
}
export declare const INIT_USER_FARM_DATA_LAYOUT: any;
