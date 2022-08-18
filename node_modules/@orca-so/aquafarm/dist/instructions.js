"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructRemoveRewardsIx = exports.constructSetEmissionsPerSecondIx = exports.constructHarvestIx = exports.constructRevertTokensIx = exports.constructConvertTokensIx = exports.constructInitUserFarmIx = exports.constructInitGlobalFarmIx = exports.INSTRUCTIONS = void 0;
const spl_token_1 = require("@solana/spl-token");
const web3_js_1 = require("@solana/web3.js");
const layout_1 = require("./utils/layout");
const buffer_layout_1 = __importDefault(require("buffer-layout"));
var INSTRUCTIONS;
(function (INSTRUCTIONS) {
    INSTRUCTIONS[INSTRUCTIONS["InitGlobalFarm"] = 0] = "InitGlobalFarm";
    INSTRUCTIONS[INSTRUCTIONS["InitUserFarm"] = 1] = "InitUserFarm";
    INSTRUCTIONS[INSTRUCTIONS["ConvertTokens"] = 2] = "ConvertTokens";
    INSTRUCTIONS[INSTRUCTIONS["RevertTokens"] = 3] = "RevertTokens";
    INSTRUCTIONS[INSTRUCTIONS["Harvest"] = 4] = "Harvest";
    INSTRUCTIONS[INSTRUCTIONS["RemoveRewards"] = 5] = "RemoveRewards";
    INSTRUCTIONS[INSTRUCTIONS["SetEmissionsPerSecond"] = 6] = "SetEmissionsPerSecond";
})(INSTRUCTIONS = exports.INSTRUCTIONS || (exports.INSTRUCTIONS = {}));
function constructInitGlobalFarmIx(globalFarmStatePubkey, baseTokenMintPubkey, globalBaseTokenVaultPubkey, rewardTokenVaultPubkey, farmTokenMintPubkey, emissionsAuthorityPubkey, removeRewardsAuthorityPubkey, emissionsPerSecondNumerator, emissionsPerSecondDenominator, nonce, aquafarmProgramId, funderPubkey) {
    const keys = [
        { pubkey: baseTokenMintPubkey, isSigner: false, isWritable: false },
        {
            pubkey: globalBaseTokenVaultPubkey,
            isSigner: false,
            isWritable: false,
        },
        { pubkey: rewardTokenVaultPubkey, isSigner: false, isWritable: false },
        { pubkey: farmTokenMintPubkey, isSigner: false, isWritable: false },
        { pubkey: globalFarmStatePubkey, isSigner: false, isWritable: true },
        { pubkey: funderPubkey, isSigner: true, isWritable: false },
        { pubkey: web3_js_1.SystemProgram.programId, isSigner: false, isWritable: false },
    ];
    return new web3_js_1.TransactionInstruction({
        keys,
        programId: aquafarmProgramId,
        data: layout_1.generateBufferData(layout_1.INIT_GLOBAL_FARM_DATA_LAYOUT, {
            instruction: INSTRUCTIONS.InitGlobalFarm,
            nonce,
            tokenProgramId: spl_token_1.TOKEN_PROGRAM_ID.toBuffer(),
            emissionsAuthority: emissionsAuthorityPubkey.toBuffer(),
            removeRewardsAuthority: removeRewardsAuthorityPubkey.toBuffer(),
            emissionsPerSecondNumerator: emissionsPerSecondNumerator.toBuffer(),
            emissionsPerSecondDenominator: emissionsPerSecondDenominator.toBuffer(),
        }),
    });
}
exports.constructInitGlobalFarmIx = constructInitGlobalFarmIx;
function constructInitUserFarmIx(globalFarmStatePubkey, userFarmStatePubkey, ownerPubkey, aquafarmProgramId) {
    const keys = [
        {
            pubkey: globalFarmStatePubkey,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: userFarmStatePubkey,
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: ownerPubkey,
            isSigner: true,
            isWritable: false,
        },
        {
            pubkey: web3_js_1.SystemProgram.programId,
            isSigner: false,
            isWritable: false,
        },
    ];
    return new web3_js_1.TransactionInstruction({
        keys,
        programId: aquafarmProgramId,
        data: layout_1.generateBufferData(layout_1.INIT_USER_FARM_DATA_LAYOUT, {
            instruction: INSTRUCTIONS.InitUserFarm,
        }), // Initialize user farm instruction
    });
}
exports.constructInitUserFarmIx = constructInitUserFarmIx;
function constructConvertTokensIx(userFarmOwner, userTransferAuthority, userBaseTokenAccountPubkey, userFarmTokenAccountPubkey, userRewardTokenAccountPubkey, globalBaseTokenVaultPubkey, farmTokenMintPubkey, globalFarm, userFarm, globalRewardTokenVaultPubkey, authority, aquafarmProgramId, amountToConvert) {
    return new web3_js_1.TransactionInstruction({
        keys: [
            {
                pubkey: userFarmOwner,
                isSigner: true,
                isWritable: false,
            },
            {
                pubkey: userBaseTokenAccountPubkey,
                isSigner: false,
                isWritable: true,
            },
            {
                pubkey: globalBaseTokenVaultPubkey,
                isSigner: false,
                isWritable: true,
            },
            {
                pubkey: userTransferAuthority,
                isSigner: true,
                isWritable: false,
            },
            {
                pubkey: farmTokenMintPubkey,
                isSigner: false,
                isWritable: true,
            },
            {
                pubkey: userFarmTokenAccountPubkey,
                isSigner: false,
                isWritable: true,
            },
            {
                pubkey: globalFarm,
                isSigner: false,
                isWritable: true,
            },
            {
                pubkey: userFarm,
                isSigner: false,
                isWritable: true,
            },
            {
                pubkey: globalRewardTokenVaultPubkey,
                isSigner: false,
                isWritable: true,
            },
            {
                pubkey: userRewardTokenAccountPubkey,
                isSigner: false,
                isWritable: true,
            },
            {
                pubkey: authority,
                isSigner: false,
                isWritable: false,
            },
            {
                pubkey: spl_token_1.TOKEN_PROGRAM_ID,
                isSigner: false,
                isWritable: false,
            },
        ],
        programId: aquafarmProgramId,
        data: layout_1.generateBufferData(buffer_layout_1.default.struct([
            buffer_layout_1.default.u8("instruction"),
            layout_1.uint64("amountToConvert"),
        ]), {
            instruction: INSTRUCTIONS.ConvertTokens,
            amountToConvert: amountToConvert.toBuffer(), // The time period over which to distribute: 2 weeks
        }),
    });
}
exports.constructConvertTokensIx = constructConvertTokensIx;
function constructRevertTokensIx(userFarmOwner, userBurnAuthority, userBaseTokenAccountPubkey, userFarmTokenAccountPubkey, userRewardTokenAccountPubkey, globalBaseTokenVaultPubkey, farmTokenMintPubkey, globalFarm, userFarm, globalRewardTokenVaultPubkey, authority, aquafarmProgramId, amountToRevert) {
    return new web3_js_1.TransactionInstruction({
        keys: [
            {
                pubkey: userFarmOwner,
                isSigner: true,
                isWritable: false,
            },
            {
                pubkey: userBaseTokenAccountPubkey,
                isSigner: false,
                isWritable: true,
            },
            {
                pubkey: globalBaseTokenVaultPubkey,
                isSigner: false,
                isWritable: true,
            },
            {
                pubkey: farmTokenMintPubkey,
                isSigner: false,
                isWritable: true,
            },
            {
                pubkey: userFarmTokenAccountPubkey,
                isSigner: false,
                isWritable: true,
            },
            {
                pubkey: userBurnAuthority,
                isSigner: true,
                isWritable: false,
            },
            {
                pubkey: globalFarm,
                isSigner: false,
                isWritable: true,
            },
            {
                pubkey: userFarm,
                isSigner: false,
                isWritable: true,
            },
            {
                pubkey: globalRewardTokenVaultPubkey,
                isSigner: false,
                isWritable: true,
            },
            {
                pubkey: userRewardTokenAccountPubkey,
                isSigner: false,
                isWritable: true,
            },
            {
                pubkey: authority,
                isSigner: false,
                isWritable: false,
            },
            {
                pubkey: spl_token_1.TOKEN_PROGRAM_ID,
                isSigner: false,
                isWritable: false,
            },
        ],
        programId: aquafarmProgramId,
        data: layout_1.generateBufferData(buffer_layout_1.default.struct([
            buffer_layout_1.default.u8("instruction"),
            layout_1.uint64("amountToRevert"),
        ]), {
            instruction: INSTRUCTIONS.RevertTokens,
            amountToRevert: amountToRevert.toBuffer(),
        }),
    });
}
exports.constructRevertTokensIx = constructRevertTokensIx;
function constructHarvestIx(userFarmOwner, userRewardTokenAccountPubkey, globalBaseTokenVaultPubkey, globalFarm, userFarm, globalRewardTokenVaultPubkey, authority, aquafarmProgramId) {
    return new web3_js_1.TransactionInstruction({
        keys: [
            {
                pubkey: userFarmOwner,
                isSigner: true,
                isWritable: false,
            },
            {
                pubkey: globalFarm,
                isSigner: false,
                isWritable: true,
            },
            {
                pubkey: userFarm,
                isSigner: false,
                isWritable: true,
            },
            {
                pubkey: globalBaseTokenVaultPubkey,
                isSigner: false,
                isWritable: false,
            },
            {
                pubkey: globalRewardTokenVaultPubkey,
                isSigner: false,
                isWritable: true,
            },
            {
                pubkey: userRewardTokenAccountPubkey,
                isSigner: false,
                isWritable: true,
            },
            {
                pubkey: authority,
                isSigner: false,
                isWritable: false,
            },
            {
                pubkey: spl_token_1.TOKEN_PROGRAM_ID,
                isSigner: false,
                isWritable: false,
            },
        ],
        programId: aquafarmProgramId,
        data: layout_1.generateBufferData(buffer_layout_1.default.struct([buffer_layout_1.default.u8("instruction")]), {
            instruction: INSTRUCTIONS.Harvest,
        }),
    });
}
exports.constructHarvestIx = constructHarvestIx;
function constructSetEmissionsPerSecondIx(emissionsAuthorityPubkey, globalFarmStatePubkey, globalBaseTokenVaultKey, aquafarmProgramId, numerator, denominator) {
    return new web3_js_1.TransactionInstruction({
        keys: [
            {
                pubkey: emissionsAuthorityPubkey,
                isSigner: true,
                isWritable: false,
            },
            {
                pubkey: globalFarmStatePubkey,
                isSigner: false,
                isWritable: true,
            },
            {
                pubkey: globalBaseTokenVaultKey,
                isSigner: false,
                isWritable: false,
            },
        ],
        programId: aquafarmProgramId,
        data: layout_1.generateBufferData(buffer_layout_1.default.struct([
            buffer_layout_1.default.u8("instruction"),
            layout_1.uint64("emissionsPerSecondNumerator"),
            layout_1.uint64("emissionsPerSecondDenominator"),
        ]), {
            instruction: INSTRUCTIONS.SetEmissionsPerSecond,
            emissionsPerSecondNumerator: layout_1.u64ToBuffer(numerator),
            emissionsPerSecondDenominator: layout_1.u64ToBuffer(denominator),
        }),
    });
}
exports.constructSetEmissionsPerSecondIx = constructSetEmissionsPerSecondIx;
function constructRemoveRewardsIx(globalFarmStatePubkey, removeRewardsAuthorityPubkey, destRewardTokenAccountPubkey, globalRewardTokenVaultPubkey, authority, aquafarmProgramId, amountToConvert) {
    return new web3_js_1.TransactionInstruction({
        keys: [
            {
                pubkey: globalFarmStatePubkey,
                isSigner: false,
                isWritable: false,
            },
            {
                pubkey: removeRewardsAuthorityPubkey,
                isSigner: true,
                isWritable: false,
            },
            {
                pubkey: destRewardTokenAccountPubkey,
                isSigner: false,
                isWritable: true,
            },
            {
                pubkey: globalRewardTokenVaultPubkey,
                isSigner: false,
                isWritable: true,
            },
            {
                pubkey: authority,
                isSigner: false,
                isWritable: false,
            },
            {
                pubkey: spl_token_1.TOKEN_PROGRAM_ID,
                isSigner: false,
                isWritable: false,
            },
        ],
        programId: aquafarmProgramId,
        data: layout_1.generateBufferData(buffer_layout_1.default.struct([
            buffer_layout_1.default.u8("instruction"),
            layout_1.uint64("amountToRemove"),
        ]), {
            instruction: INSTRUCTIONS.RemoveRewards,
            amountToRemove: amountToConvert.toBuffer(), // The time period over which to distribute: 2 weeks
        }),
    });
}
exports.constructRemoveRewardsIx = constructRemoveRewardsIx;
//# sourceMappingURL=instructions.js.map