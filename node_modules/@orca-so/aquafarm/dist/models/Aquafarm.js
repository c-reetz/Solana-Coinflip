"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const spl_token_1 = require("@solana/spl-token");
const decimal_js_1 = __importDefault(require("decimal.js"));
const __1 = require("..");
const math_1 = require("../utils/math");
const instructions_1 = require("../instructions");
class Aquafarm {
    constructor(globalFarm, programId, userFarm) {
        this.globalFarm = globalFarm;
        this.programId = programId;
        this.userFarm = userFarm;
    }
    getEmissionsPer1000USDPerDay(totalLiquidity, rewardTokenDecimals) {
        return new decimal_js_1.default(this.globalFarm.emissionsPerSecondNumerator.toString())
            .mul(60 * 60 * 24 * 1000)
            .div(this.globalFarm.emissionsPerSecondDenominator.toString())
            .div(totalLiquidity)
            .div(new decimal_js_1.default(10).pow(rewardTokenDecimals));
    }
    getWeeklyEmissions(rewardTokenDecimals) {
        return new decimal_js_1.default(this.globalFarm.emissionsPerSecondNumerator.toString())
            .mul(60 * 60 * 24 * 7)
            .div(this.globalFarm.emissionsPerSecondDenominator.toString())
            .div(new decimal_js_1.default(10).pow(rewardTokenDecimals));
    }
    getHarvestableAmount() {
        if (this.userFarm === null) {
            return undefined;
        }
        // h = numUserFarmTokens * (cumulativeEmissionsPerFarmToken - cumulativeEmissionsCheckpoint)
        const cumulativeEmissionsDelta = this.globalFarm.cumulativeEmissionsPerFarmToken.sub(this.userFarm.cumulativeEmissionsCheckpoint);
        return new spl_token_1.u64(new decimal_js_1.default(this.userFarm.baseTokensConverted.toString())
            .mul(cumulativeEmissionsDelta)
            .floor()
            .toString());
    }
    getCurrentHarvestableAmount(totalFarmedAmount) {
        const baseAmount = this.getHarvestableAmount();
        if (!baseAmount ||
            this.globalFarm.emissionsPerSecondDenominator.eq(math_1.ZERO) ||
            totalFarmedAmount.eq(math_1.ZERO)) {
            return baseAmount;
        }
        const elapsedTimeInSeconds = new spl_token_1.u64(Date.now() / 1000).sub(this.globalFarm.lastUpdatedTimestamp);
        return this.globalFarm.emissionsPerSecondNumerator
            .mul(elapsedTimeInSeconds)
            .mul(this.userFarm.baseTokensConverted)
            .div(this.globalFarm.emissionsPerSecondDenominator)
            .div(totalFarmedAmount)
            .add(baseAmount);
    }
    isUserFarmInitialized() {
        var _a;
        return ((_a = this.userFarm) === null || _a === void 0 ? void 0 : _a.isInitialized) || false;
    }
    constructInitUserFarmIx(owner, userFarmAddress) {
        return instructions_1.constructInitUserFarmIx(this.globalFarm.publicKey, userFarmAddress, owner, this.programId);
    }
    constructConvertTokensIx(userTransferAuthority, userBaseTokenAccountPubkey, userFarmTokenAccountPubkey, userRewardTokenAccountPubkey, amount, userFarmPublicKey, owner) {
        var _a, _b;
        const userFarmOwner = ((_a = this.userFarm) === null || _a === void 0 ? void 0 : _a.owner) || owner;
        userFarmPublicKey = ((_b = this.userFarm) === null || _b === void 0 ? void 0 : _b.publicKey) || userFarmPublicKey;
        if (!userFarmOwner || !userFarmPublicKey) {
            return null;
        }
        return instructions_1.constructConvertTokensIx(userFarmOwner, userTransferAuthority, userBaseTokenAccountPubkey, userFarmTokenAccountPubkey, userRewardTokenAccountPubkey, this.globalFarm.baseTokenVault, this.globalFarm.farmTokenMint, this.globalFarm.publicKey, userFarmPublicKey, this.globalFarm.rewardTokenVault, this.globalFarm.authority, this.programId, amount);
    }
    constructRevertTokensIx(userBurnAuthority, userBaseTokenAccountPubkey, userFarmTokenAccountPubkey, userRewardTokenAccountPubkey, amount) {
        if (!this.userFarm) {
            return null;
        }
        return __1.constructRevertTokensIx(this.userFarm.owner, userBurnAuthority, userBaseTokenAccountPubkey, userFarmTokenAccountPubkey, userRewardTokenAccountPubkey, this.globalFarm.baseTokenVault, this.globalFarm.farmTokenMint, this.globalFarm.publicKey, this.userFarm.publicKey, this.globalFarm.rewardTokenVault, this.globalFarm.authority, this.programId, amount);
    }
    constructHarvestIx(userRewardTokenAccountPubkey) {
        if (!this.userFarm) {
            return null;
        }
        return instructions_1.constructHarvestIx(this.userFarm.owner, userRewardTokenAccountPubkey, this.globalFarm.baseTokenVault, this.globalFarm.publicKey, this.userFarm.publicKey, this.globalFarm.rewardTokenVault, this.globalFarm.authority, this.programId);
    }
}
exports.default = Aquafarm;
//# sourceMappingURL=Aquafarm.js.map