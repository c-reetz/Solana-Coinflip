import { PublicKey, Transaction } from '@solana/web3.js';
export declare type WalletSigner = {
    publicKey: PublicKey | null;
    signTransaction(transaction: Transaction): Promise<Transaction>;
    signAllTransactions(transaction: Transaction[]): Promise<Transaction[]>;
};
export declare class WalletError extends Error {
    error: any;
    constructor(message?: string, error?: any);
}
export declare class WalletNotConnectedError extends WalletError {
    name: string;
}
export declare function isWalletNotConnectedError(error: any): error is WalletNotConnectedError;
//# sourceMappingURL=walletAdapter.d.ts.map