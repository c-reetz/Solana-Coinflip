"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMessage = exports.ChatMessageBody = exports.ChatMessageBodyType = exports.GovernanceChatAccountType = exports.GOVERNANCE_CHAT_PROGRAM_ID = void 0;
const web3_js_1 = require("@solana/web3.js");
exports.GOVERNANCE_CHAT_PROGRAM_ID = new web3_js_1.PublicKey('gCHAtYKrUUktTVzE4hEnZdLV4LXrdBf6Hh9qMaJALET');
var GovernanceChatAccountType;
(function (GovernanceChatAccountType) {
    GovernanceChatAccountType[GovernanceChatAccountType["Uninitialized"] = 0] = "Uninitialized";
    GovernanceChatAccountType[GovernanceChatAccountType["ChatMessage"] = 1] = "ChatMessage";
})(GovernanceChatAccountType = exports.GovernanceChatAccountType || (exports.GovernanceChatAccountType = {}));
var ChatMessageBodyType;
(function (ChatMessageBodyType) {
    ChatMessageBodyType[ChatMessageBodyType["Text"] = 0] = "Text";
    ChatMessageBodyType[ChatMessageBodyType["Reaction"] = 1] = "Reaction";
})(ChatMessageBodyType = exports.ChatMessageBodyType || (exports.ChatMessageBodyType = {}));
class ChatMessageBody {
    constructor(args) {
        var _a;
        this.type = args.type;
        this.value = args.value;
        this.isReply = (_a = args.isReply) !== null && _a !== void 0 ? _a : false;
    }
}
exports.ChatMessageBody = ChatMessageBody;
class ChatMessage {
    constructor(args) {
        this.accountType = GovernanceChatAccountType.ChatMessage;
        this.proposal = args.proposal;
        this.author = args.author;
        this.postedAt = args.postedAt;
        this.replyTo = args.replyTo;
        this.body = args.body;
    }
}
exports.ChatMessage = ChatMessage;
//# sourceMappingURL=accounts.js.map