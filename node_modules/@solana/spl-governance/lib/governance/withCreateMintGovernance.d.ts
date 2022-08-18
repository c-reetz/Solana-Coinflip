import { PublicKey, TransactionInstruction } from '@solana/web3.js';
import { GovernanceConfig } from './accounts';
export declare const withCreateMintGovernance: (instructions: TransactionInstruction[], programId: PublicKey, programVersion: number, realm: PublicKey, governedMint: PublicKey, config: GovernanceConfig, transferMintAuthorities: boolean, mintAuthority: PublicKey, tokenOwnerRecord: PublicKey, payer: PublicKey, governanceAuthority: PublicKey, voterWeightRecord?: PublicKey | undefined) => Promise<PublicKey>;
//# sourceMappingURL=withCreateMintGovernance.d.ts.map