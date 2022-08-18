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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrcaFarmImpl = void 0;
const aquafarm_1 = require("@orca-so/aquafarm");
const spl_token_1 = require("@solana/spl-token");
const decimal_js_1 = __importDefault(require("decimal.js"));
const __1 = require("../../..");
const public_1 = require("../../../public/");
const farm_instructions_1 = require("../../../public/utils/web3/instructions/farm-instructions");
const pool_instructions_1 = require("../../../public/utils/web3/instructions/pool-instructions");
const key_utils_1 = require("../../../public/utils/web3/key-utils");
class OrcaFarmImpl {
    constructor(connection, config) {
        this.connection = connection;
        this.farmParams = config;
    }
    getFarmBalance(owner) {
        return __awaiter(this, void 0, void 0, function* () {
            const address = yield (0, __1.deriveAssociatedTokenAddress)(owner, this.farmParams.farmTokenMint);
            const accountInfo = yield this.connection.getAccountInfo(address);
            // User does not have a balance for this account
            if (accountInfo == undefined) {
                return __1.OrcaU64.fromNumber(0, this.farmParams.baseTokenDecimals);
            }
            const result = (0, __1.deserializeAccount)(accountInfo === null || accountInfo === void 0 ? void 0 : accountInfo.data);
            if (result == undefined) {
                throw new Error("Failed to parse user account for LP token.");
            }
            return __1.OrcaU64.fromU64(result.amount, this.farmParams.baseTokenDecimals);
        });
    }
    getFarmSupply() {
        return __awaiter(this, void 0, void 0, function* () {
            const context = yield this.connection.getTokenSupply(this.farmParams.farmTokenMint);
            const amt = new spl_token_1.u64(context.value.amount);
            return __1.OrcaU64.fromU64(amt, this.farmParams.baseTokenDecimals);
        });
    }
    deposit(owner, baseTokenAmount) {
        return __awaiter(this, void 0, void 0, function* () {
            const _owner = new key_utils_1.Owner(owner);
            const ownerAddress = _owner.publicKey;
            const baseTokenAmount_U64 = __1.U64Utils.toFarmU64(baseTokenAmount, this.farmParams, "baseTokenAmount");
            const { address: farmAddress, rewardTokenMint } = this.farmParams;
            const userFarmPublicKey = (yield (0, aquafarm_1.getUserFarmAddress)(farmAddress, ownerAddress, spl_token_1.TOKEN_PROGRAM_ID, __1.ORCA_FARM_ID))[0];
            const globalFarms = yield (0, aquafarm_1.fetchGlobalFarms)(this.connection, [farmAddress], __1.ORCA_FARM_ID);
            const userFarms = yield (0, aquafarm_1.fetchUserFarms)(this.connection, ownerAddress, [farmAddress], __1.ORCA_FARM_ID);
            if (!globalFarms) {
                throw new Error("Failed to get globalFarms information");
            }
            const farm = new aquafarm_1.Aquafarm(globalFarms[0], __1.ORCA_FARM_ID, userFarms && userFarms[0]);
            // If the user lacks the user farm, create it
            const initUserFarmInstruction = yield (0, farm_instructions_1.createInitUserFarmInstruction)(farm, userFarmPublicKey, _owner);
            // If the user lacks the farm token account, create it
            const _a = yield (0, __1.resolveOrCreateAssociatedTokenAddress)(this.connection, _owner, farm.globalFarm.farmTokenMint), { address: userFarmTokenPublicKey } = _a, resolveFarmTokenInstructions = __rest(_a, ["address"]);
            // If the user lacks the reward token account, create it
            const _b = yield (0, __1.resolveOrCreateAssociatedTokenAddress)(this.connection, _owner, rewardTokenMint), { address: userRewardTokenPublicKey } = _b, resolveRewardTokenInstructions = __rest(_b, ["address"]);
            // If the user lacks the base token account, create it
            const _c = yield (0, __1.resolveOrCreateAssociatedTokenAddress)(this.connection, _owner, this.farmParams.baseTokenMint), { address: userBaseTokenPublicKey } = _c, resolveBaseTokenInstructions = __rest(_c, ["address"]);
            // Approve transfer of base token to be converted to farm tokens
            const _d = (0, pool_instructions_1.createApprovalInstruction)(ownerAddress, baseTokenAmount_U64, userBaseTokenPublicKey), { userTransferAuthority } = _d, transferBaseTokenInstruction = __rest(_d, ["userTransferAuthority"]);
            // Convert base tokens to farm tokens
            const convertToFarmTokens = yield (0, farm_instructions_1.createFarmConvertTokensInstruction)(farm, userTransferAuthority.publicKey, userBaseTokenPublicKey, userFarmTokenPublicKey, userRewardTokenPublicKey, baseTokenAmount_U64, userFarmPublicKey, _owner);
            return yield new __1.TransactionBuilder(this.connection, ownerAddress, _owner)
                .addInstruction(initUserFarmInstruction)
                .addInstruction(resolveFarmTokenInstructions)
                .addInstruction(resolveBaseTokenInstructions)
                .addInstruction(resolveRewardTokenInstructions)
                .addInstruction(transferBaseTokenInstruction)
                .addInstruction(convertToFarmTokens)
                .build();
        });
    }
    withdraw(owner, baseTokenAmount) {
        return __awaiter(this, void 0, void 0, function* () {
            const _owner = new key_utils_1.Owner(owner);
            const ownerAddress = _owner.publicKey;
            const baseTokenAmount_U64 = __1.U64Utils.toFarmU64(baseTokenAmount, this.farmParams, "baseTokenAmount");
            const { address: farmAddress, rewardTokenMint } = this.farmParams;
            const userFarmPublicKey = (yield (0, aquafarm_1.getUserFarmAddress)(farmAddress, ownerAddress, spl_token_1.TOKEN_PROGRAM_ID, __1.ORCA_FARM_ID))[0];
            const globalFarms = yield (0, aquafarm_1.fetchGlobalFarms)(this.connection, [farmAddress], __1.ORCA_FARM_ID);
            const userFarms = yield (0, aquafarm_1.fetchUserFarms)(this.connection, ownerAddress, [farmAddress], __1.ORCA_FARM_ID);
            if (!globalFarms) {
                throw new Error("Failed to get globalFarms information");
            }
            const farm = new aquafarm_1.Aquafarm(globalFarms[0], __1.ORCA_FARM_ID, userFarms && userFarms[0]);
            if (!farm.isUserFarmInitialized()) {
                throw new Error("Failed to get userFarm information. Warning: withdraw from deposit address");
            }
            // If the user lacks the farm token account, create it
            const _a = yield (0, __1.resolveOrCreateAssociatedTokenAddress)(this.connection, _owner, farm.globalFarm.farmTokenMint), { address: userFarmTokenPublicKey } = _a, resolveFarmTokenInstructions = __rest(_a, ["address"]);
            // If the user lacks the reward token account, create it
            const _b = yield (0, __1.resolveOrCreateAssociatedTokenAddress)(this.connection, _owner, rewardTokenMint), { address: userRewardTokenPublicKey } = _b, resolveRewardTokenInstructions = __rest(_b, ["address"]);
            // Get user's baseToken token account
            const _c = yield (0, __1.resolveOrCreateAssociatedTokenAddress)(this.connection, _owner, this.farmParams.baseTokenMint), { address: userBaseTokenPublicKey } = _c, resolveBaseTokenInstructions = __rest(_c, ["address"]);
            // Approve transfer of farm tokens to be reverted to base tokens
            const _d = (0, pool_instructions_1.createApprovalInstruction)(ownerAddress, baseTokenAmount_U64, userFarmTokenPublicKey), { userTransferAuthority } = _d, transferFarmTokenInstruction = __rest(_d, ["userTransferAuthority"]);
            // Revert farm tokens to base tokens
            const revertFromFarmTokens = yield (0, farm_instructions_1.createFarmRevertTokensInstruction)(farm, userTransferAuthority.publicKey, userBaseTokenPublicKey, userFarmTokenPublicKey, userRewardTokenPublicKey, baseTokenAmount_U64, _owner);
            return yield new __1.TransactionBuilder(this.connection, ownerAddress, _owner)
                .addInstruction(resolveFarmTokenInstructions)
                .addInstruction(resolveRewardTokenInstructions)
                .addInstruction(resolveBaseTokenInstructions)
                .addInstruction(transferFarmTokenInstruction)
                .addInstruction(revertFromFarmTokens)
                .build();
        });
    }
    getHarvestableAmount(ownerPublicKey) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { address: farmAddress, baseTokenDecimals } = this.farmParams;
            const globalFarms = yield (0, aquafarm_1.fetchGlobalFarms)(this.connection, [farmAddress], __1.ORCA_FARM_ID);
            const userFarms = yield (0, aquafarm_1.fetchUserFarms)(this.connection, ownerPublicKey, [farmAddress], __1.ORCA_FARM_ID);
            if (!globalFarms) {
                throw new Error("Failed to get globalFarms information");
            }
            const farm = new aquafarm_1.Aquafarm(globalFarms[0], __1.ORCA_FARM_ID, userFarms && userFarms[0]);
            if (!farm.isUserFarmInitialized()) {
                return __1.OrcaU64.fromU64(public_1.ZERO, baseTokenDecimals);
            }
            const farmSupply = yield this.getFarmSupply();
            const harvestableAmount = (_a = farm.getCurrentHarvestableAmount(farmSupply.toU64())) !== null && _a !== void 0 ? _a : public_1.ZERO;
            return __1.OrcaU64.fromU64(harvestableAmount, baseTokenDecimals);
        });
    }
    harvest(owner) {
        return __awaiter(this, void 0, void 0, function* () {
            const _owner = new key_utils_1.Owner(owner);
            const ownerAddress = _owner.publicKey;
            const { address: farmAddress, rewardTokenMint } = this.farmParams;
            const globalFarms = yield (0, aquafarm_1.fetchGlobalFarms)(this.connection, [farmAddress], __1.ORCA_FARM_ID);
            const userFarms = yield (0, aquafarm_1.fetchUserFarms)(this.connection, ownerAddress, [farmAddress], __1.ORCA_FARM_ID);
            if (!globalFarms) {
                throw new Error("Failed to get globalFarms information");
            }
            const farm = new aquafarm_1.Aquafarm(globalFarms[0], __1.ORCA_FARM_ID, userFarms && userFarms[0]);
            if (!farm.isUserFarmInitialized()) {
                throw new Error("Failed to get userFarm information");
            }
            // If the user lacks the reward token account, create it
            const _a = yield (0, __1.resolveOrCreateAssociatedTokenAddress)(this.connection, _owner, rewardTokenMint), { address: userRewardTokenPublicKey } = _a, resolveRewardTokenInstructions = __rest(_a, ["address"]);
            const harvestRewardInstruction = yield (0, farm_instructions_1.createFarmHarvestRewardInstruction)(farm, userRewardTokenPublicKey, _owner);
            return yield new __1.TransactionBuilder(this.connection, ownerAddress, _owner)
                .addInstruction(resolveRewardTokenInstructions)
                .addInstruction(harvestRewardInstruction)
                .build();
        });
    }
    getDailyEmissions() {
        return __awaiter(this, void 0, void 0, function* () {
            const { address, rewardTokenDecimals } = this.farmParams;
            const globalFarms = yield (0, aquafarm_1.fetchGlobalFarms)(this.connection, [address], __1.ORCA_FARM_ID);
            if (!globalFarms) {
                throw new Error("Failed to get globalFarms information");
            }
            const value = new decimal_js_1.default(globalFarms[0].emissionsPerSecondNumerator.toString())
                .mul(60 * 60 * 24)
                .div(globalFarms[0].emissionsPerSecondDenominator.toString())
                .div(new decimal_js_1.default(10).pow(rewardTokenDecimals));
            return __1.OrcaU64.fromDecimal(value, rewardTokenDecimals);
        });
    }
}
exports.OrcaFarmImpl = OrcaFarmImpl;
