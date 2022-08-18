import { Connection, PublicKey } from '@solana/web3.js';
export declare const BPF_UPGRADE_LOADER_ID: PublicKey;
import { Infer } from 'superstruct';
export declare const PublicKeyFromString: import("superstruct").Struct<PublicKey, null>;
export declare type ProgramDataAccountInfo = Infer<typeof ProgramDataAccountInfo>;
export declare const ProgramDataAccountInfo: import("superstruct").Struct<{
    authority: PublicKey | null;
    slot: number;
}, {
    authority: import("superstruct").Struct<PublicKey | null, null>;
    slot: import("superstruct").Struct<number, null>;
}>;
export declare function getProgramDataAddress(programId: PublicKey): Promise<PublicKey>;
export declare function getProgramDataAccount(connection: Connection, programId: PublicKey): Promise<{
    authority: PublicKey | null;
    slot: number;
}>;
//# sourceMappingURL=bpfUpgradeableLoader.d.ts.map