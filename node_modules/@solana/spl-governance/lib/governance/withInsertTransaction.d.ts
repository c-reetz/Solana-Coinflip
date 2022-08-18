import { PublicKey, TransactionInstruction } from '@solana/web3.js';
import { InstructionData } from './accounts';
export declare const withInsertTransaction: (instructions: TransactionInstruction[], programId: PublicKey, programVersion: number, governance: PublicKey, proposal: PublicKey, tokenOwnerRecord: PublicKey, governanceAuthority: PublicKey, index: number, optionIndex: number, holdUpTime: number, transactionInstructions: InstructionData[], payer: PublicKey) => Promise<PublicKey>;
//# sourceMappingURL=withInsertTransaction.d.ts.map