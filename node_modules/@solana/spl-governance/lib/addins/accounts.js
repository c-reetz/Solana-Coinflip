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
exports.getMaxVoterWeightRecordAddress = exports.MaxVoterWeightRecord = exports.getVoterWeightRecordAddress = exports.VoterWeightRecord = exports.VoterWeightAction = void 0;
const web3_js_1 = require("@solana/web3.js");
var VoterWeightAction;
(function (VoterWeightAction) {
    VoterWeightAction[VoterWeightAction["CastVote"] = 0] = "CastVote";
    VoterWeightAction[VoterWeightAction["CommentProposal"] = 1] = "CommentProposal";
    VoterWeightAction[VoterWeightAction["CreateGovernance"] = 2] = "CreateGovernance";
    VoterWeightAction[VoterWeightAction["CreateProposal"] = 3] = "CreateProposal";
    VoterWeightAction[VoterWeightAction["SignOffProposal"] = 4] = "SignOffProposal";
})(VoterWeightAction = exports.VoterWeightAction || (exports.VoterWeightAction = {}));
class VoterWeightRecord {
    constructor(args) {
        this.accountDiscriminator = new Uint8Array([50, 101, 102, 57, 57, 98, 52, 98]);
        this.realm = args.realm;
        this.governingTokenMint = args.governingTokenMint;
        this.governingTokenOwner = args.governingTokenOwner;
        this.voterWeight = args.voterWeight;
        this.voterWeightExpiry = args.voterWeightExpiry;
        this.weightAction = args.weightAction;
        this.weightActionTarget = args.weightActionTarget;
    }
}
exports.VoterWeightRecord = VoterWeightRecord;
/**
 * Returns the default address for VoterWeightRecord
 * Note: individual addins are not required to use the default address and it can vary between different implementations
 **/
function getVoterWeightRecordAddress(programId, realm, governingTokenMint, governingTokenOwner) {
    return __awaiter(this, void 0, void 0, function* () {
        const [voterWeightRecordAddress] = yield web3_js_1.PublicKey.findProgramAddress([
            Buffer.from('voter-weight-record'),
            realm.toBuffer(),
            governingTokenMint.toBuffer(),
            governingTokenOwner.toBuffer(),
        ], programId);
        return voterWeightRecordAddress;
    });
}
exports.getVoterWeightRecordAddress = getVoterWeightRecordAddress;
class MaxVoterWeightRecord {
    constructor(args) {
        this.accountDiscriminator = new Uint8Array([57, 100, 53, 102, 102, 50, 57, 55]);
        this.realm = args.realm;
        this.governingTokenMint = args.governingTokenMint;
        this.maxVoterWeight = args.maxVoterWeight;
        this.maxVoterWeightExpiry = args.maxVoterWeightExpiry;
    }
}
exports.MaxVoterWeightRecord = MaxVoterWeightRecord;
/**
 * Returns the default address for MaxVoterWeightRecord
 * Note: individual addins are not required to use the default address and it can vary between different implementations
 **/
function getMaxVoterWeightRecordAddress(programId, realm, governingTokenMint) {
    return __awaiter(this, void 0, void 0, function* () {
        const [maxVoterWeightRecordAddress] = yield web3_js_1.PublicKey.findProgramAddress([
            Buffer.from('max-voter-weight-record'),
            realm.toBuffer(),
            governingTokenMint.toBuffer(),
        ], programId);
        return maxVoterWeightRecordAddress;
    });
}
exports.getMaxVoterWeightRecordAddress = getMaxVoterWeightRecordAddress;
//# sourceMappingURL=accounts.js.map