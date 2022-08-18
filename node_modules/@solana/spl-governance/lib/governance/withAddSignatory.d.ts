import { PublicKey, TransactionInstruction } from '@solana/web3.js';
export declare const withAddSignatory: (instructions: TransactionInstruction[], programId: PublicKey, programVersion: number, proposal: PublicKey, tokenOwnerRecord: PublicKey, governanceAuthority: PublicKey, signatory: PublicKey, payer: PublicKey) => Promise<PublicKey>;
//# sourceMappingURL=withAddSignatory.d.ts.map