import { Connection, PublicKey } from '@solana/web3.js';
import { ChatMessage } from './accounts';
export declare function getGovernanceChatMessages(connection: Connection, chatProgramId: PublicKey, proposal: PublicKey): Promise<import("..").ProgramAccount<ChatMessage>[]>;
export declare function getGovernanceChatMessagesByVoter(connection: Connection, chatProgramId: PublicKey, voter: PublicKey): Promise<import("..").ProgramAccount<ChatMessage>[]>;
//# sourceMappingURL=api.d.ts.map