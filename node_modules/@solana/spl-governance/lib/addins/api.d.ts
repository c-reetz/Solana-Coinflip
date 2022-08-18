import { Connection, PublicKey } from '@solana/web3.js';
import { ProgramAccount } from '../tools/sdk/runtime';
import { MaxVoterWeightRecord, VoterWeightRecord } from './accounts';
export declare function getMaxVoterWeightRecord(connection: Connection, maxVoterWeightRecordPk: PublicKey): Promise<ProgramAccount<MaxVoterWeightRecord>>;
export declare function getVoterWeightRecord(connection: Connection, voterWeightRecordPk: PublicKey): Promise<ProgramAccount<VoterWeightRecord>>;
export declare function getGovernanceAddinAccount<TAccount>(connection: Connection, accountPk: PublicKey, accountClass: new (args: any) => TAccount): Promise<ProgramAccount<TAccount>>;
//# sourceMappingURL=api.d.ts.map