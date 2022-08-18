/// <reference types="node" />
/// <reference types="@solana/web3.js" />
import { GovernanceChatAccountClass } from './accounts';
export declare const GOVERNANCE_CHAT_SCHEMA: Map<any, any>;
export declare const ChatAccountParser: (classType: GovernanceChatAccountClass) => (pubKey: import("@solana/web3.js").PublicKey, info: import("@solana/web3.js").AccountInfo<Buffer>) => import("..").ProgramAccount<any>;
//# sourceMappingURL=serialisation.d.ts.map