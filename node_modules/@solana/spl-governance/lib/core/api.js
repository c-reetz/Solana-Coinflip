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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBorshProgramAccounts = exports.booleanFilter = exports.pubkeyFilter = exports.MemcmpFilter = exports.RpcContext = void 0;
const web3_js_1 = require("@solana/web3.js");
const bs58_1 = __importDefault(require("bs58"));
const script_1 = require("../tools/script");
const borsh_1 = require("../tools/borsh");
const walletAdapter_1 = require("../tools/walletAdapter");
// Context to make RPC calls for given clone programId, current connection, endpoint and wallet
class RpcContext {
    constructor(programId, programVersion, wallet, connection, endpoint) {
        this.programId = programId;
        this.wallet = wallet;
        this.connection = connection;
        this.endpoint = endpoint;
        this.programVersion = programVersion;
    }
    get walletPubkey() {
        var _a;
        if (!((_a = this.wallet) === null || _a === void 0 ? void 0 : _a.publicKey)) {
            throw new walletAdapter_1.WalletNotConnectedError();
        }
        return this.wallet.publicKey;
    }
    get programIdBase58() {
        return this.programId.toBase58();
    }
}
exports.RpcContext = RpcContext;
class MemcmpFilter {
    constructor(offset, bytes) {
        this.offset = offset;
        this.bytes = bytes;
    }
    isMatch(buffer) {
        if (this.offset + this.bytes.length > buffer.length) {
            return false;
        }
        for (let i = 0; i < this.bytes.length; i++) {
            if (this.bytes[i] !== buffer[this.offset + i])
                return false;
        }
        return true;
    }
}
exports.MemcmpFilter = MemcmpFilter;
// PublicKey MemcmpFilter
const pubkeyFilter = (offset, pubkey) => (!pubkey ? undefined : new MemcmpFilter(offset, pubkey.toBuffer()));
exports.pubkeyFilter = pubkeyFilter;
// Boolean MemcmpFilter
const booleanFilter = (offset, value) => new MemcmpFilter(offset, Buffer.from(value ? [1] : [0]));
exports.booleanFilter = booleanFilter;
function getBorshProgramAccounts(connection, programId, getSchema, accountFactory, filters = [], accountType) {
    return __awaiter(this, void 0, void 0, function* () {
        accountType = accountType !== null && accountType !== void 0 ? accountType : new accountFactory({}).accountType;
        const programAccounts = yield connection.getProgramAccounts(programId, {
            commitment: connection.commitment,
            filters: [
                {
                    memcmp: {
                        offset: 0,
                        bytes: bs58_1.default.encode([accountType]),
                    },
                },
                ...filters.map(f => ({
                    memcmp: { offset: f.offset, bytes: bs58_1.default.encode(f.bytes) },
                })),
            ],
        });
        let accounts = [];
        for (let rawAccount of programAccounts) {
            try {
                const data = rawAccount.account.data;
                const accountType = data[0];
                const account = {
                    pubkey: new web3_js_1.PublicKey(rawAccount.pubkey),
                    account: (0, borsh_1.deserializeBorsh)(getSchema(accountType), accountFactory, data),
                    owner: rawAccount.account.owner,
                };
                accounts.push(account);
            }
            catch (ex) {
                console.info(`Can't deserialize ${accountFactory.name} @ ${rawAccount.pubkey}.`, (0, script_1.getErrorMessage)(ex));
            }
        }
        return accounts;
    });
}
exports.getBorshProgramAccounts = getBorshProgramAccounts;
//# sourceMappingURL=api.js.map