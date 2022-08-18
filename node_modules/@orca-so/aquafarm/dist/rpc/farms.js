"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUserFarms = exports.fetchGlobalFarms = exports.fetchBatchedAccountInfos = void 0;
const GlobalFarm_1 = __importStar(require("../models/GlobalFarm"));
const layout_1 = require("../utils/layout");
const UserFarm_1 = __importDefault(require("../models/UserFarm"));
const UserFarm_2 = require("../models/UserFarm");
const spl_token_1 = require("@solana/spl-token");
function fetchBatchedAccountInfos(connection, pubkeys) {
    return __awaiter(this, void 0, void 0, function* () {
        const requests = pubkeys.map((pubkey) => ({
            methodName: "getAccountInfo",
            // Passing "jsonParsed" as the encoding allows the address to be treated as a base58 string
            args: connection._buildArgs([pubkey.toBase58()], "singleGossip", "jsonParsed"),
        }));
        const results = yield connection._rpcBatchRequest(requests);
        return (results
            // Convert from RPC request response to AccountInfo<Buffer>
            .map((res) => res.result.value
            ? Object.assign({}, res.result.value, {
                // This Buffer conversion is based on
                // https://github.com/solana-labs/solana-web3.js/blob/master/src/connection.ts#L57
                // Below, data[0] is the actual data, data[1] is the format (base64)
                data: Buffer.from(res.result.value.data[0], "base64"),
            })
            : null));
    });
}
exports.fetchBatchedAccountInfos = fetchBatchedAccountInfos;
/**
 *
 * @param connection A Solana RPC connection
 * @param farmPubkeys The public keys for the GlobalFarm accounts
 * @returns An array of GlobalFarm models
 */
function fetchGlobalFarms(connection, farmPubkeys, programId) {
    return __awaiter(this, void 0, void 0, function* () {
        const accountInfos = yield fetchBatchedAccountInfos(connection, farmPubkeys);
        return Promise.all(accountInfos.map((accountInfo, i) => __awaiter(this, void 0, void 0, function* () {
            if (!accountInfo) {
                throw new Error("GlobalFarm not found");
            }
            const decoded = layout_1.decodeGlobalFarmBuffer(accountInfo);
            const publicKey = farmPubkeys[i];
            const authority = (yield GlobalFarm_1.getAuthorityAndNonce(publicKey, programId))[0];
            return new GlobalFarm_1.default(Object.assign(Object.assign({}, decoded), { publicKey,
                authority }));
        })));
    });
}
exports.fetchGlobalFarms = fetchGlobalFarms;
/**
 *
 * @param connection A Solana RPC connection
 * @param userPubkey The user's SOL address (UserFarm.owner)
 * @param farmPubkeys The public keys for the GlobalFarm accounts for which to fetch UserFarm accounts
 * @returns An array of GlobalFarm models
 */
function fetchUserFarms(connection, userPubkey, farmPubkeys, programId) {
    return __awaiter(this, void 0, void 0, function* () {
        const addresses = yield Promise.all(farmPubkeys.map((globalFarmPubkey) => __awaiter(this, void 0, void 0, function* () {
            return (yield UserFarm_2.getUserFarmAddress(globalFarmPubkey, userPubkey, spl_token_1.TOKEN_PROGRAM_ID, programId))[0];
        })));
        const accountInfos = yield fetchBatchedAccountInfos(connection, addresses);
        return accountInfos.map((accountInfo, i) => {
            if (!accountInfo) {
                return null;
            }
            const decoded = layout_1.decodeUserFarmBuffer(accountInfo);
            return new UserFarm_1.default(Object.assign(Object.assign({}, decoded), { publicKey: addresses[i] }));
        });
    });
}
exports.fetchUserFarms = fetchUserFarms;
//# sourceMappingURL=farms.js.map