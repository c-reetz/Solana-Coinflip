import { PublicKey, TransactionInstruction } from '@solana/web3.js';
import BN from 'bn.js';
export declare const withDepositGoverningTokens: (instructions: TransactionInstruction[], programId: PublicKey, programVersion: number, realm: PublicKey, governingTokenSource: PublicKey, governingTokenMint: PublicKey, governingTokenOwner: PublicKey, transferAuthority: PublicKey, payer: PublicKey, amount: BN) => Promise<PublicKey>;
//# sourceMappingURL=withDepositGoverningTokens.d.ts.map