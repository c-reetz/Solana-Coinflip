import { u64 } from "@solana/spl-token";
import { PublicKey, Signer, TransactionInstruction } from "@solana/web3.js";
import Decimal from "decimal.js";
import GlobalFarm from "./GlobalFarm";
import UserFarm from "./UserFarm";
export declare type TransactionBuildingBlocks = {
    instructions: TransactionInstruction[];
    signers: Signer[];
};
export default class Aquafarm {
    globalFarm: GlobalFarm;
    programId: PublicKey;
    userFarm: UserFarm | null;
    constructor(globalFarm: GlobalFarm, programId: PublicKey, userFarm: UserFarm | null);
    getEmissionsPer1000USDPerDay(totalLiquidity: number, rewardTokenDecimals: number): Decimal;
    getWeeklyEmissions(rewardTokenDecimals: number): Decimal;
    getHarvestableAmount(): u64 | undefined;
    getCurrentHarvestableAmount(totalFarmedAmount: u64): u64 | undefined;
    isUserFarmInitialized(): boolean;
    constructInitUserFarmIx(owner: PublicKey, userFarmAddress: PublicKey): TransactionInstruction;
    constructConvertTokensIx(userTransferAuthority: PublicKey, userBaseTokenAccountPubkey: PublicKey, userFarmTokenAccountPubkey: PublicKey, userRewardTokenAccountPubkey: PublicKey, amount: u64, userFarmPublicKey?: PublicKey, owner?: PublicKey): TransactionInstruction | null;
    constructRevertTokensIx(userBurnAuthority: PublicKey, userBaseTokenAccountPubkey: PublicKey, userFarmTokenAccountPubkey: PublicKey, userRewardTokenAccountPubkey: PublicKey, amount: u64): TransactionInstruction | null;
    constructHarvestIx(userRewardTokenAccountPubkey: PublicKey): TransactionInstruction;
}
