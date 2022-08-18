import { PublicKey, TransactionInstruction } from '@solana/web3.js';
import { MintMaxVoteWeightSource } from './accounts';
import BN from 'bn.js';
export declare function withSetRealmConfig(instructions: TransactionInstruction[], programId: PublicKey, programVersion: number, realm: PublicKey, realmAuthority: PublicKey, councilMint: PublicKey | undefined, communityMintMaxVoteWeightSource: MintMaxVoteWeightSource, minCommunityTokensToCreateGovernance: BN, communityVoterWeightAddin: PublicKey | undefined, maxCommunityVoterWeightAddin: PublicKey | undefined, payer: PublicKey): Promise<void>;
//# sourceMappingURL=withSetRealmConfig.d.ts.map