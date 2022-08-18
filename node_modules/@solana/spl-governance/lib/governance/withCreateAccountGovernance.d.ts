import { PublicKey, TransactionInstruction } from '@solana/web3.js';
import { GovernanceConfig } from './accounts';
export declare const withCreateAccountGovernance: (instructions: TransactionInstruction[], programId: PublicKey, realm: PublicKey, governedAccount: PublicKey, config: GovernanceConfig, tokenOwnerRecord: PublicKey, payer: PublicKey, governanceAuthority: PublicKey, voterWeightRecord?: PublicKey | undefined) => Promise<PublicKey>;
//# sourceMappingURL=withCreateAccountGovernance.d.ts.map