import { Signer, Transaction, TransactionInstruction, TransactionSignature } from "@solana/web3.js";
export declare const emptyInstruction: Instruction;
export declare type Instruction = {
    instructions: TransactionInstruction[];
    cleanupInstructions: TransactionInstruction[];
    signers: Signer[];
};
export declare type TransactionPayload = {
    transaction: Transaction;
    signers: Signer[];
    execute: () => Promise<TransactionSignature>;
};
