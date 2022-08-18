"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGovernanceChatMessagesByVoter = exports.getGovernanceChatMessages = void 0;
const api_1 = require("../core/api");
const accounts_1 = require("./accounts");
const serialisation_1 = require("./serialisation");
function getGovernanceChatMessages(connection, chatProgramId, proposal) {
    return (0, api_1.getBorshProgramAccounts)(connection, chatProgramId, _ => serialisation_1.GOVERNANCE_CHAT_SCHEMA, accounts_1.ChatMessage, [(0, api_1.pubkeyFilter)(1, proposal)]);
}
exports.getGovernanceChatMessages = getGovernanceChatMessages;
function getGovernanceChatMessagesByVoter(connection, chatProgramId, voter) {
    return (0, api_1.getBorshProgramAccounts)(connection, chatProgramId, _ => serialisation_1.GOVERNANCE_CHAT_SCHEMA, accounts_1.ChatMessage, [(0, api_1.pubkeyFilter)(33, voter)]);
}
exports.getGovernanceChatMessagesByVoter = getGovernanceChatMessagesByVoter;
//# sourceMappingURL=api.js.map