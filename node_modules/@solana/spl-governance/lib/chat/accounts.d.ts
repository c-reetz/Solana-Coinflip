import { PublicKey } from '@solana/web3.js';
import BN from 'bn.js';
export declare const GOVERNANCE_CHAT_PROGRAM_ID: PublicKey;
export declare enum GovernanceChatAccountType {
    Uninitialized = 0,
    ChatMessage = 1
}
export interface GovernanceChatAccount {
    accountType: GovernanceChatAccountType;
}
export declare type GovernanceChatAccountClass = typeof ChatMessage;
export declare enum ChatMessageBodyType {
    Text = 0,
    Reaction = 1
}
export declare class ChatMessageBody {
    type: ChatMessageBodyType;
    value: string;
    isReply: boolean;
    constructor(args: {
        type: ChatMessageBodyType;
        value: string;
        isReply?: boolean;
    });
}
export declare class ChatMessage {
    accountType: GovernanceChatAccountType;
    proposal: PublicKey;
    author: PublicKey;
    postedAt: BN;
    replyTo: PublicKey | undefined;
    body: ChatMessageBody;
    constructor(args: {
        proposal: PublicKey;
        author: PublicKey;
        postedAt: BN;
        replyTo: PublicKey | undefined;
        body: ChatMessageBody;
    });
}
//# sourceMappingURL=accounts.d.ts.map