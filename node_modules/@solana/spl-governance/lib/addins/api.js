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
exports.getGovernanceAddinAccount = exports.getVoterWeightRecord = exports.getMaxVoterWeightRecord = void 0;
const accounts_1 = require("./accounts");
const serialisation_1 = require("./serialisation");
function getMaxVoterWeightRecord(connection, maxVoterWeightRecordPk) {
    return __awaiter(this, void 0, void 0, function* () {
        return getGovernanceAddinAccount(connection, maxVoterWeightRecordPk, accounts_1.MaxVoterWeightRecord);
    });
}
exports.getMaxVoterWeightRecord = getMaxVoterWeightRecord;
function getVoterWeightRecord(connection, voterWeightRecordPk) {
    return __awaiter(this, void 0, void 0, function* () {
        return getGovernanceAddinAccount(connection, voterWeightRecordPk, accounts_1.VoterWeightRecord);
    });
}
exports.getVoterWeightRecord = getVoterWeightRecord;
function getGovernanceAddinAccount(connection, accountPk, accountClass) {
    return __awaiter(this, void 0, void 0, function* () {
        const accountInfo = yield connection.getAccountInfo(accountPk);
        if (!accountInfo) {
            throw new Error(`Account ${accountPk} of type ${accountClass.name} not found`);
        }
        return (0, serialisation_1.GovernanceAddinAccountParser)(accountClass)(accountPk, accountInfo);
    });
}
exports.getGovernanceAddinAccount = getGovernanceAddinAccount;
//# sourceMappingURL=api.js.map