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
exports.withVoterWeightAccounts = void 0;
const accounts_1 = require("./accounts");
function withVoterWeightAccounts(keys, programId, realm, voterWeightRecord) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!voterWeightRecord) {
            return;
        }
        const realmConfigAddress = yield (0, accounts_1.getRealmConfigAddress)(programId, realm);
        keys.push({
            pubkey: realmConfigAddress,
            isWritable: false,
            isSigner: false,
        });
        keys.push({
            pubkey: voterWeightRecord,
            isWritable: false,
            isSigner: false,
        });
    });
}
exports.withVoterWeightAccounts = withVoterWeightAccounts;
//# sourceMappingURL=withVoterWeightAccounts.js.map