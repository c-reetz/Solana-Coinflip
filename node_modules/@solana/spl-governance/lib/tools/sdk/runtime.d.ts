import { Commitment, Connection, PublicKey, RpcResponseAndContext, SimulatedTransactionResponse, Transaction, TransactionError } from '@solana/web3.js';
export declare const SYSTEM_PROGRAM_ID: PublicKey;
export declare type ProgramAccount<T> = {
    pubkey: PublicKey;
    account: T;
    owner: PublicKey;
};
export declare function simulateTransaction(connection: Connection, transaction: Transaction, commitment: Commitment): Promise<RpcResponseAndContext<SimulatedTransactionResponse>>;
export declare class SendTransactionError extends Error {
    txError: TransactionError | undefined;
    txId: string;
    constructor(message: string, txId: string, txError?: TransactionError);
}
//# sourceMappingURL=runtime.d.ts.map