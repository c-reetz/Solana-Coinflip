"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostChatMessageArgs = exports.GovernanceChatInstruction = void 0;
var GovernanceChatInstruction;
(function (GovernanceChatInstruction) {
    GovernanceChatInstruction[GovernanceChatInstruction["PostMessage"] = 0] = "PostMessage";
})(GovernanceChatInstruction = exports.GovernanceChatInstruction || (exports.GovernanceChatInstruction = {}));
class PostChatMessageArgs {
    constructor(args) {
        this.instruction = GovernanceChatInstruction.PostMessage;
        this.body = args.body;
    }
}
exports.PostChatMessageArgs = PostChatMessageArgs;
//# sourceMappingURL=instructions.js.map