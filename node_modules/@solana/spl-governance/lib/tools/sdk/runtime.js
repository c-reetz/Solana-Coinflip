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
exports.SendTransactionError = exports.simulateTransaction = exports.SYSTEM_PROGRAM_ID = void 0;
const web3_js_1 = require("@solana/web3.js");
exports.SYSTEM_PROGRAM_ID = new web3_js_1.PublicKey('11111111111111111111111111111111');
function simulateTransaction(connection, transaction, commitment) {
    return __awaiter(this, void 0, void 0, function* () {
        // @ts-ignore
        transaction.recentBlockhash = yield connection._recentBlockhash(
        // @ts-ignore
        connection._disableBlockhashCaching);
        const signData = transaction.serializeMessage();
        // @ts-ignore
        const wireTransaction = transaction._serialize(signData);
        const encodedTransaction = wireTransaction.toString('base64');
        const config = { encoding: 'base64', commitment };
        const args = [encodedTransaction, config];
        // @ts-ignore
        const res = yield connection._rpcRequest('simulateTransaction', args);
        if (res.error) {
            throw new Error('failed to simulate transaction: ' + res.error.message);
        }
        return res.result;
    });
}
exports.simulateTransaction = simulateTransaction;
class SendTransactionError extends Error {
    constructor(message, txId, txError) {
        super(message);
        this.txError = txError;
        this.txId = txId;
    }
}
exports.SendTransactionError = SendTransactionError;
//# sourceMappingURL=runtime.js.map