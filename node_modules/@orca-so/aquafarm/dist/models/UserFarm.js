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
exports.getUserFarmAddress = void 0;
const web3_js_1 = require("@solana/web3.js");
class UserFarm {
    constructor(params) {
        this.publicKey = params.publicKey;
        this.isInitialized = params.isInitialized;
        this.owner = params.owner;
        this.baseTokensConverted = params.baseTokensConverted;
        this.cumulativeEmissionsCheckpoint = params.cumulativeEmissionsCheckpoint;
    }
    toString() {
        return JSON.stringify({
            publicKey: this.publicKey.toBase58(),
            isInitialized: this.isInitialized,
            owner: this.owner.toBase58(),
            baseTokensConverted: this.baseTokensConverted.toString(),
            cumulativeEmissionsCheckpoint: this.cumulativeEmissionsCheckpoint.toString(),
        }, null, 2);
    }
}
exports.default = UserFarm;
function getUserFarmAddress(globalFarm, owner, tokenProgramId, aquafarmProgramId) {
    return __awaiter(this, void 0, void 0, function* () {
        return web3_js_1.PublicKey.findProgramAddress([globalFarm.toBuffer(), owner.toBuffer(), tokenProgramId.toBuffer()], aquafarmProgramId);
    });
}
exports.getUserFarmAddress = getUserFarmAddress;
//# sourceMappingURL=UserFarm.js.map