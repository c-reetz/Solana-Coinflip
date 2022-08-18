import { PublicKey, TransactionInstruction } from '@solana/web3.js';
import { SetRealmAuthorityAction } from './instructions';
export declare const withSetRealmAuthority: (instructions: TransactionInstruction[], programId: PublicKey, programVersion: number, realm: PublicKey, realmAuthority: PublicKey, newRealmAuthority: PublicKey | undefined, action: SetRealmAuthorityAction | undefined) => void;
//# sourceMappingURL=withSetRealmAuthority.d.ts.map