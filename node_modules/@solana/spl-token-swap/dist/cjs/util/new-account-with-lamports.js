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
exports.newAccountWithLamports = void 0;
const web3_js_1 = require("@solana/web3.js");
const sleep_1 = require("./sleep");
function newAccountWithLamports(connection, lamports = 1000000) {
    return __awaiter(this, void 0, void 0, function* () {
        const account = new web3_js_1.Account();
        let retries = 30;
        yield connection.requestAirdrop(account.publicKey, lamports);
        for (;;) {
            yield (0, sleep_1.sleep)(500);
            if (lamports == (yield connection.getBalance(account.publicKey))) {
                return account;
            }
            if (--retries <= 0) {
                break;
            }
        }
        throw new Error(`Airdrop of ${lamports} failed`);
    });
}
exports.newAccountWithLamports = newAccountWithLamports;
