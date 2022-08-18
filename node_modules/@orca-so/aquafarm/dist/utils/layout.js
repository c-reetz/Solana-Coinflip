"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.INIT_USER_FARM_DATA_LAYOUT = exports.USER_FARM_DATA_LAYOUT = exports.decodeUserFarmBuffer = exports.INIT_GLOBAL_FARM_DATA_LAYOUT = exports.GLOBAL_FARM_DATA_LAYOUT = exports.decodeGlobalFarmBuffer = exports.generateBufferData = exports.u64ToBuffer = exports.uint256ToDecimal = exports.uint256ToString = exports.uint8ToU64 = exports.uint8ToNumber = exports.uint8ToPubkey = exports.uint256 = exports.uint64 = exports.publicKey = void 0;
const web3_js_1 = require("@solana/web3.js");
const spl_token_1 = require("@solana/spl-token");
const buffer_layout_1 = __importDefault(require("buffer-layout"));
const bn_js_1 = __importDefault(require("bn.js"));
const decimal_js_1 = __importDefault(require("decimal.js"));
/**
 * Layout for a public key
 */
const publicKey = (property = "publicKey") => {
    return buffer_layout_1.default.blob(32, property);
};
exports.publicKey = publicKey;
/**
 * Layout for a 64bit unsigned value
 */
const uint64 = (property = "uint64") => {
    return buffer_layout_1.default.blob(8, property);
};
exports.uint64 = uint64;
/**
 * Layout for a 256bit unsigned value
 */
const uint256 = (property = "uint256") => {
    return buffer_layout_1.default.blob(32, property);
};
exports.uint256 = uint256;
// Converts from a Uint8 buffer to a Public Key
function uint8ToPubkey(data) {
    return new web3_js_1.PublicKey(data);
}
exports.uint8ToPubkey = uint8ToPubkey;
// Converts from a little-endian Uint8-encoded u64 to a JS number
function uint8ToNumber(data) {
    return new bn_js_1.default(data, 10, "le").toNumber();
}
exports.uint8ToNumber = uint8ToNumber;
// Converts from a little-endian Uint8-encoded u64 to a JS number
function uint8ToU64(data) {
    return new spl_token_1.u64(data, 10, "le");
}
exports.uint8ToU64 = uint8ToU64;
// Converts from a little-endian Uint8-encoded u64 to a JS str
function uint256ToString(data) {
    return new bn_js_1.default(data, 10, "le").toString();
}
exports.uint256ToString = uint256ToString;
// Converts from a little-endian Uint8-encoded u64 to a Decimal
function uint256ToDecimal(data) {
    return new decimal_js_1.default(new bn_js_1.default(data, 10, "le").toString()).dividedBy("1_000_000_000_000");
}
exports.uint256ToDecimal = uint256ToDecimal;
function u64ToBuffer(num) {
    return num.toBuffer("le", 8);
}
exports.u64ToBuffer = u64ToBuffer;
function generateBufferData(dataLayout, instructionData) {
    // Outline the structure of data expected
    let data = Buffer.alloc(dataLayout.span);
    {
        const encodeLength = dataLayout.encode(instructionData, data);
        data = data.slice(0, encodeLength);
    }
    return data;
}
exports.generateBufferData = generateBufferData;
function decodeGlobalFarmBuffer(accountInfo) {
    const decoded = exports.GLOBAL_FARM_DATA_LAYOUT.decode(accountInfo.data);
    return {
        isInitialized: !!decoded.isInitialized,
        accountType: decoded.accountType,
        nonce: decoded.nonce,
        tokenProgramId: uint8ToPubkey(decoded.tokenProgramId),
        emissionsAuthority: uint8ToPubkey(decoded.emissionsAuthority),
        removeRewardsAuthority: uint8ToPubkey(decoded.removeRewardsAuthority),
        baseTokenMint: uint8ToPubkey(decoded.baseTokenMint),
        baseTokenVault: uint8ToPubkey(decoded.baseTokenVault),
        rewardTokenVault: uint8ToPubkey(decoded.rewardTokenVault),
        farmTokenMint: uint8ToPubkey(decoded.farmTokenMint),
        emissionsPerSecondNumerator: uint8ToU64(decoded.emissionsPerSecondNumerator),
        emissionsPerSecondDenominator: uint8ToU64(decoded.emissionsPerSecondDenominator),
        lastUpdatedTimestamp: uint8ToU64(decoded.lastUpdatedTimestamp),
        cumulativeEmissionsPerFarmToken: uint256ToDecimal(decoded.cumulativeEmissionsPerFarmToken),
    };
}
exports.decodeGlobalFarmBuffer = decodeGlobalFarmBuffer;
exports.GLOBAL_FARM_DATA_LAYOUT = buffer_layout_1.default.struct([
    buffer_layout_1.default.u8("isInitialized"),
    buffer_layout_1.default.u8("accountType"),
    buffer_layout_1.default.u8("nonce"),
    exports.publicKey("tokenProgramId"),
    exports.publicKey("emissionsAuthority"),
    exports.publicKey("removeRewardsAuthority"),
    exports.publicKey("baseTokenMint"),
    exports.publicKey("baseTokenVault"),
    exports.publicKey("rewardTokenVault"),
    exports.publicKey("farmTokenMint"),
    exports.uint64("emissionsPerSecondNumerator"),
    exports.uint64("emissionsPerSecondDenominator"),
    exports.uint64("lastUpdatedTimestamp"),
    exports.uint256("cumulativeEmissionsPerFarmToken"),
]);
exports.INIT_GLOBAL_FARM_DATA_LAYOUT = buffer_layout_1.default.struct([
    buffer_layout_1.default.u8("instruction"),
    buffer_layout_1.default.u8("nonce"),
    exports.publicKey("tokenProgramId"),
    exports.publicKey("emissionsAuthority"),
    exports.publicKey("removeRewardsAuthority"),
    exports.uint64("emissionsPerSecondNumerator"),
    exports.uint64("emissionsPerSecondDenominator"),
]);
function decodeUserFarmBuffer(accountInfo) {
    const decoded = exports.USER_FARM_DATA_LAYOUT.decode(accountInfo.data);
    return {
        isInitialized: !!decoded.isInitialized,
        accountType: decoded.accountType,
        globalFarm: uint8ToPubkey(decoded.globalFarm),
        owner: uint8ToPubkey(decoded.owner),
        baseTokensConverted: uint8ToU64(decoded.baseTokensConverted),
        cumulativeEmissionsCheckpoint: uint256ToDecimal(decoded.cumulativeEmissionsCheckpoint),
    };
}
exports.decodeUserFarmBuffer = decodeUserFarmBuffer;
exports.USER_FARM_DATA_LAYOUT = buffer_layout_1.default.struct([
    buffer_layout_1.default.u8("isInitialized"),
    buffer_layout_1.default.u8("accountType"),
    exports.publicKey("globalFarm"),
    exports.publicKey("owner"),
    exports.uint64("baseTokensConverted"),
    exports.uint256("cumulativeEmissionsCheckpoint"),
]);
exports.INIT_USER_FARM_DATA_LAYOUT = buffer_layout_1.default.struct([
    buffer_layout_1.default.u8("instruction"),
]);
//# sourceMappingURL=layout.js.map