import { u64 } from "@solana/spl-token";
import { PublicKey, TransactionInstruction } from "@solana/web3.js";
export declare enum INSTRUCTIONS {
    InitGlobalFarm = 0,
    InitUserFarm = 1,
    ConvertTokens = 2,
    RevertTokens = 3,
    Harvest = 4,
    RemoveRewards = 5,
    SetEmissionsPerSecond = 6
}
export declare function constructInitGlobalFarmIx(globalFarmStatePubkey: PublicKey, baseTokenMintPubkey: PublicKey, globalBaseTokenVaultPubkey: PublicKey, rewardTokenVaultPubkey: PublicKey, farmTokenMintPubkey: PublicKey, emissionsAuthorityPubkey: PublicKey, removeRewardsAuthorityPubkey: PublicKey, emissionsPerSecondNumerator: u64, emissionsPerSecondDenominator: u64, nonce: number, aquafarmProgramId: PublicKey, funderPubkey: PublicKey): TransactionInstruction;
export declare function constructInitUserFarmIx(globalFarmStatePubkey: PublicKey, userFarmStatePubkey: PublicKey, ownerPubkey: PublicKey, aquafarmProgramId: PublicKey): TransactionInstruction;
export declare function constructConvertTokensIx(userFarmOwner: PublicKey, userTransferAuthority: PublicKey, userBaseTokenAccountPubkey: PublicKey, userFarmTokenAccountPubkey: PublicKey, userRewardTokenAccountPubkey: PublicKey, globalBaseTokenVaultPubkey: PublicKey, farmTokenMintPubkey: PublicKey, globalFarm: PublicKey, userFarm: PublicKey, globalRewardTokenVaultPubkey: PublicKey, authority: PublicKey, aquafarmProgramId: PublicKey, amountToConvert: u64): TransactionInstruction;
export declare function constructRevertTokensIx(userFarmOwner: PublicKey, userBurnAuthority: PublicKey, userBaseTokenAccountPubkey: PublicKey, userFarmTokenAccountPubkey: PublicKey, userRewardTokenAccountPubkey: PublicKey, globalBaseTokenVaultPubkey: PublicKey, farmTokenMintPubkey: PublicKey, globalFarm: PublicKey, userFarm: PublicKey, globalRewardTokenVaultPubkey: PublicKey, authority: PublicKey, aquafarmProgramId: PublicKey, amountToRevert: u64): TransactionInstruction;
export declare function constructHarvestIx(userFarmOwner: PublicKey, userRewardTokenAccountPubkey: PublicKey, globalBaseTokenVaultPubkey: PublicKey, globalFarm: PublicKey, userFarm: PublicKey, globalRewardTokenVaultPubkey: PublicKey, authority: PublicKey, aquafarmProgramId: PublicKey): TransactionInstruction;
export declare function constructSetEmissionsPerSecondIx(emissionsAuthorityPubkey: PublicKey, globalFarmStatePubkey: PublicKey, globalBaseTokenVaultKey: PublicKey, aquafarmProgramId: PublicKey, numerator: u64, denominator: u64): TransactionInstruction;
export declare function constructRemoveRewardsIx(globalFarmStatePubkey: PublicKey, removeRewardsAuthorityPubkey: PublicKey, destRewardTokenAccountPubkey: PublicKey, globalRewardTokenVaultPubkey: PublicKey, authority: PublicKey, aquafarmProgramId: PublicKey, amountToConvert: u64): TransactionInstruction;
