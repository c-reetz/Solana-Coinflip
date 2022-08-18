import { u64 } from "@solana/spl-token";
import { Keypair, PublicKey } from "@solana/web3.js";
import { OrcaPoolParams } from "../../../../model/orca/pool/pool-types";
import { OrcaPoolToken } from "../../../pools";
import { Instruction } from "../../models";
import { Owner } from "../key-utils";
export declare const createApprovalInstruction: (ownerAddress: PublicKey, approveAmount: u64, tokenUserAddress: PublicKey, userTransferAuthority?: Keypair | undefined) => {
    userTransferAuthority: Keypair;
} & Instruction;
export declare const createSwapInstruction: (poolParams: OrcaPoolParams, owner: Owner, inputToken: OrcaPoolToken, inputTokenUserAddress: PublicKey, outputToken: OrcaPoolToken, outputTokenUserAddress: PublicKey, amountIn: u64, minimumAmountOut: u64, userTransferAuthority: PublicKey, orcaTokenSwapId: PublicKey) => Promise<Instruction>;
export declare const createDepositInstruction: (poolParams: OrcaPoolParams, userTransferAuthorityPublicKey: PublicKey, userTokenAPublicKey: PublicKey, userTokenBPublicKey: PublicKey, userPoolTokenPublicKey: PublicKey, poolTokenAmount: u64, maximumTokenA: u64, maximumTokenB: u64, tokenAPublicKey: PublicKey, tokenBPublicKey: PublicKey, orcaTokenSwapId: PublicKey, owner: Owner) => Promise<Instruction>;
export declare const createWithdrawInstruction: (poolParams: OrcaPoolParams, userTransferAuthorityPublicKey: PublicKey, userTokenAPublicKey: PublicKey, userTokenBPublicKey: PublicKey, userPoolTokenPublicKey: PublicKey, poolTokenAmount: u64, minimumTokenA: u64, minimumTokenB: u64, tokenAPublicKey: PublicKey, tokenBPublicKey: PublicKey, orcaTokenSwapId: PublicKey, owner: Owner) => Promise<Instruction>;
