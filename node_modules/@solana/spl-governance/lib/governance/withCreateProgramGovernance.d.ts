import { PublicKey, TransactionInstruction } from '@solana/web3.js';
import { GovernanceConfig } from './accounts';
export declare const withCreateProgramGovernance: (instructions: TransactionInstruction[], programId: PublicKey, programVersion: number, realm: PublicKey, governedProgram: PublicKey, config: GovernanceConfig, transferUpgradeAuthority: boolean, programUpgradeAuthority: PublicKey, tokenOwnerRecord: PublicKey, payer: PublicKey, governanceAuthority: PublicKey, voterWeightRecord?: PublicKey | undefined) => Promise<PublicKey>;
//# sourceMappingURL=withCreateProgramGovernance.d.ts.map