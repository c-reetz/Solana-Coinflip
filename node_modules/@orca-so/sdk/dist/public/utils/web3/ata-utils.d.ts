import { u64 } from "@solana/spl-token";
import { Connection, PublicKey } from "@solana/web3.js";
import { Instruction } from "../models/instruction";
import { Owner } from "./key-utils";
export declare type ResolvedTokenAddressInstruction = {
    address: PublicKey;
} & Instruction;
/**
 * IMPORTANT: wrappedSolAmountIn should only be used for input/source token that
 *            could be SOL. This is because when SOL is the output, it is the end
 *            destination, and thus does not need to be wrapped with an amount.
 *
 * @param connection Solana connection class
 * @param owner The keypair for the user's wallet or just the user's public key
 * @param tokenMint Token mint address
 * @param wrappedSolAmountIn Optional. Only use for input/source token that could be SOL
 * @returns
 */
export declare function resolveOrCreateAssociatedTokenAddress(connection: Connection, owner: Owner, tokenMint: PublicKey, wrappedSolAmountIn?: u64): Promise<ResolvedTokenAddressInstruction>;
export declare function deriveAssociatedTokenAddress(walletAddress: PublicKey, tokenMint: PublicKey): Promise<PublicKey>;
