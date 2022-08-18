import { PublicKey, TransactionInstruction } from '@solana/web3.js';
import { MintMaxVoteWeightSource } from './accounts';
import BN from 'bn.js';
export declare function withCreateRealm(instructions: TransactionInstruction[], programId: PublicKey, programVersion: number, name: string, realmAuthority: PublicKey, communityMint: PublicKey, payer: PublicKey, councilMint: PublicKey | undefined, communityMintMaxVoteWeightSource: MintMaxVoteWeightSource, minCommunityWeightToCreateGovernance: BN, communityVoterWeightAddin?: PublicKey | undefined, maxCommunityVoterWeightAddin?: PublicKey | undefined): Promise<PublicKey>;
//# sourceMappingURL=withCreateRealm.d.ts.map