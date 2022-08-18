import { PublicKey } from "@solana/web3.js";
import { u64 } from "@solana/spl-token";
import Decimal from "decimal.js";
export default class UserFarm {
    publicKey: PublicKey;
    isInitialized: boolean;
    owner: PublicKey;
    baseTokensConverted: u64;
    cumulativeEmissionsCheckpoint: Decimal;
    constructor(params: {
        publicKey: PublicKey;
        isInitialized: boolean;
        owner: PublicKey;
        baseTokensConverted: u64;
        cumulativeEmissionsCheckpoint: Decimal;
    });
    toString(): string;
}
export declare function getUserFarmAddress(globalFarm: PublicKey, owner: PublicKey, tokenProgramId: PublicKey, aquafarmProgramId: PublicKey): Promise<[PublicKey, number]>;
