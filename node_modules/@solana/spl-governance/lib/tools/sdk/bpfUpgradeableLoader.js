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
exports.getProgramDataAccount = exports.getProgramDataAddress = exports.ProgramDataAccountInfo = exports.PublicKeyFromString = exports.BPF_UPGRADE_LOADER_ID = void 0;
const web3_js_1 = require("@solana/web3.js");
const superstruct_1 = require("superstruct");
exports.BPF_UPGRADE_LOADER_ID = new web3_js_1.PublicKey('BPFLoaderUpgradeab1e11111111111111111111111');
// Copied from Explorer code https://github.com/solana-labs/solana/blob/master/explorer/src/validators/accounts/upgradeable-program.ts
const superstruct_2 = require("superstruct");
const superstruct_3 = require("superstruct");
exports.PublicKeyFromString = (0, superstruct_3.coerce)((0, superstruct_3.instance)(web3_js_1.PublicKey), (0, superstruct_3.string)(), value => new web3_js_1.PublicKey(value));
exports.ProgramDataAccountInfo = (0, superstruct_2.type)({
    authority: (0, superstruct_2.nullable)(exports.PublicKeyFromString),
    // don't care about data yet
    slot: (0, superstruct_2.number)(),
});
function getProgramDataAddress(programId) {
    return __awaiter(this, void 0, void 0, function* () {
        const [programDataAddress] = yield web3_js_1.PublicKey.findProgramAddress([programId.toBuffer()], exports.BPF_UPGRADE_LOADER_ID);
        return programDataAddress;
    });
}
exports.getProgramDataAddress = getProgramDataAddress;
function getProgramDataAccount(connection, programId) {
    return __awaiter(this, void 0, void 0, function* () {
        const programDataAddress = yield getProgramDataAddress(programId);
        const account = yield connection.getParsedAccountInfo(programDataAddress);
        if (!account || !account.value) {
            throw new Error(`Program data account ${programDataAddress.toBase58()} for program ${programId.toBase58()} not found`);
        }
        const accountInfo = account.value;
        if (!('parsed' in accountInfo.data &&
            accountInfo.data.program === 'bpf-upgradeable-loader')) {
            throw new Error(`Invalid program data account ${programDataAddress.toBase58()} for program ${programId.toBase58()}`);
        }
        let programData = (0, superstruct_1.create)(accountInfo.data.parsed.info, exports.ProgramDataAccountInfo);
        return programData;
    });
}
exports.getProgramDataAccount = getProgramDataAccount;
//# sourceMappingURL=bpfUpgradeableLoader.js.map