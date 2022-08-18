import { ChatMessageBody } from './accounts';
export declare enum GovernanceChatInstruction {
    PostMessage = 0
}
export declare class PostChatMessageArgs {
    instruction: GovernanceChatInstruction;
    body: ChatMessageBody;
    constructor(args: {
        body: ChatMessageBody;
    });
}
//# sourceMappingURL=instructions.d.ts.map