import { PublicKey, TransactionInstruction } from '@solana/web3.js';
import { InstructionData } from './accounts';
export declare const withExecuteTransaction: (instructions: TransactionInstruction[], programId: PublicKey, programVersion: number, governance: PublicKey, proposal: PublicKey, transactionAddress: PublicKey, transactionInstructions: InstructionData[]) => Promise<void>;
//# sourceMappingURL=withExecuteTransaction.d.ts.map