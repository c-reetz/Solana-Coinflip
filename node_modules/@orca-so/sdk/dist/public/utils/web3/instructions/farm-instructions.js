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
exports.createFarmHarvestRewardInstruction = exports.createFarmRevertTokensInstruction = exports.createFarmConvertTokensInstruction = exports.createInitUserFarmInstruction = void 0;
const __1 = require("../..");
const createInitUserFarmInstruction = (farm, userFarmPublicKey, owner) => __awaiter(void 0, void 0, void 0, function* () {
    if (farm.isUserFarmInitialized()) {
        return __1.emptyInstruction;
    }
    const initUserFarmIx = farm.constructInitUserFarmIx(owner.publicKey, userFarmPublicKey);
    return {
        instructions: [initUserFarmIx],
        cleanupInstructions: [],
        signers: owner.signer ? [owner.signer] : [],
    };
});
exports.createInitUserFarmInstruction = createInitUserFarmInstruction;
const createFarmConvertTokensInstruction = (farm, userTransferAuthorityPublicKey, userBaseTokenPublicKey, userFarmTokenPublicKey, userRewardTokenPublicKey, baseTokenAmount, userFarmPublicKey, owner) => __awaiter(void 0, void 0, void 0, function* () {
    let convertIx;
    if (!farm.userFarm) {
        convertIx = farm.constructConvertTokensIx(userTransferAuthorityPublicKey, userBaseTokenPublicKey, userFarmTokenPublicKey, userRewardTokenPublicKey, baseTokenAmount, userFarmPublicKey, owner.publicKey);
    }
    else {
        convertIx = farm.constructConvertTokensIx(userTransferAuthorityPublicKey, userBaseTokenPublicKey, userFarmTokenPublicKey, userRewardTokenPublicKey, baseTokenAmount);
    }
    if (!convertIx) {
        throw new Error("constructConvertTokensIx returned null");
    }
    return {
        instructions: [convertIx],
        cleanupInstructions: [],
        signers: owner.signer ? [owner.signer] : [],
    };
});
exports.createFarmConvertTokensInstruction = createFarmConvertTokensInstruction;
const createFarmRevertTokensInstruction = (farm, userBurnAuthorityPublicKey, userBaseTokenPublicKey, userFarmTokenPublicKey, userRewardTokenPublicKey, baseTokenAmount, owner) => __awaiter(void 0, void 0, void 0, function* () {
    const revertIx = farm.constructRevertTokensIx(userBurnAuthorityPublicKey, userBaseTokenPublicKey, userFarmTokenPublicKey, userRewardTokenPublicKey, baseTokenAmount);
    if (!revertIx) {
        throw new Error("constructRevertTokensIx returned null");
    }
    return {
        instructions: [revertIx],
        cleanupInstructions: [],
        signers: owner.signer ? [owner.signer] : [],
    };
});
exports.createFarmRevertTokensInstruction = createFarmRevertTokensInstruction;
const createFarmHarvestRewardInstruction = (farm, userRewardTokenPublicKey, owner) => __awaiter(void 0, void 0, void 0, function* () {
    const harvestIx = farm.constructHarvestIx(userRewardTokenPublicKey);
    return {
        instructions: [harvestIx],
        cleanupInstructions: [],
        signers: owner.signer ? [owner.signer] : [],
    };
});
exports.createFarmHarvestRewardInstruction = createFarmHarvestRewardInstruction;
