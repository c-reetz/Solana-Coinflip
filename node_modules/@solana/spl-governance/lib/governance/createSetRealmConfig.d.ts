import { PublicKey, TransactionInstruction } from '@solana/web3.js';
import { MintMaxVoteWeightSource } from './accounts';
import BN from 'bn.js';
export declare function createSetRealmConfig(programId: PublicKey, programVersion: number, realm: PublicKey, realmAuthority: PublicKey, councilMint: PublicKey | undefined, communityMintMaxVoteWeightSource: MintMaxVoteWeightSource, minCommunityTokensToCreateGovernance: BN, communityVoterWeightAddin: PublicKey | undefined, maxCommunityVoterWeightAddin: PublicKey | undefined, payer: PublicKey): Promise<TransactionInstruction>;
//# sourceMappingURL=createSetRealmConfig.d.ts.map