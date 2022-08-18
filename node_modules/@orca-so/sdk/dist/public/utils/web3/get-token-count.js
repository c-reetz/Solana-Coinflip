"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenCount = void 0;
const spl_token_1 = require("@solana/spl-token");
const deserialize_account_1 = require("./deserialize-account");
function getTokenCount(connection, poolParams, inputPoolToken, outputPoolToken) {
    return __awaiter(this, void 0, void 0, function* () {
        if (poolParams.tokens[inputPoolToken.mint.toString()] == undefined) {
            throw new Error("Input token not part of pool");
        }
        if (poolParams.tokens[outputPoolToken.mint.toString()] == undefined) {
            throw new Error("Output token not part of pool");
        }
        const accountInfos = yield connection.getMultipleAccountsInfo([
            inputPoolToken.addr,
            outputPoolToken.addr,
        ]);
        const tokens = accountInfos.map((info) => info != undefined ? (0, deserialize_account_1.deserializeAccount)(info.data) : undefined);
        const inputTokenAccount = tokens[0], outputTokenAccount = tokens[1];
        if (inputTokenAccount === undefined || outputTokenAccount === undefined) {
            throw new Error("Unable to fetch accounts for specified tokens.");
        }
        return {
            inputTokenCount: new spl_token_1.u64(inputTokenAccount.amount),
            outputTokenCount: new spl_token_1.u64(outputTokenAccount.amount),
        };
    });
}
exports.getTokenCount = getTokenCount;
