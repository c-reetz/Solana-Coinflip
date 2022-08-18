import { PublicKey, TransactionInstruction } from '@solana/web3.js';
import { GovernanceConfig } from './accounts';
export declare const withCreateGovernance: (instructions: TransactionInstruction[], programId: PublicKey, programVersion: number, realm: PublicKey, governedAccount: PublicKey | undefined, config: GovernanceConfig, tokenOwnerRecord: PublicKey, payer: PublicKey, createAuthority: PublicKey, voterWeightRecord?: PublicKey | undefined) => Promise<PublicKey>;
//# sourceMappingURL=withCreateGovernance.d.ts.map