import { Aquafarm } from "@orca-so/aquafarm";
import { u64 } from "@solana/spl-token";
import { PublicKey } from "@solana/web3.js";
import { Instruction } from "../..";
import { Owner } from "../key-utils";
export declare const createInitUserFarmInstruction: (farm: Aquafarm, userFarmPublicKey: PublicKey, owner: Owner) => Promise<Instruction>;
export declare const createFarmConvertTokensInstruction: (farm: Aquafarm, userTransferAuthorityPublicKey: PublicKey, userBaseTokenPublicKey: PublicKey, userFarmTokenPublicKey: PublicKey, userRewardTokenPublicKey: PublicKey, baseTokenAmount: u64, userFarmPublicKey: PublicKey, owner: Owner) => Promise<Instruction>;
export declare const createFarmRevertTokensInstruction: (farm: Aquafarm, userBurnAuthorityPublicKey: PublicKey, userBaseTokenPublicKey: PublicKey, userFarmTokenPublicKey: PublicKey, userRewardTokenPublicKey: PublicKey, baseTokenAmount: u64, owner: Owner) => Promise<Instruction>;
export declare const createFarmHarvestRewardInstruction: (farm: Aquafarm, userRewardTokenPublicKey: PublicKey, owner: Owner) => Promise<Instruction>;
