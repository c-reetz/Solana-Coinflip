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
exports.createSetRealmAuthority = void 0;
const _1 = require(".");
function createSetRealmAuthority(programId, programVersion, realm, realmAuthority, newRealmAuthority, action) {
    return __awaiter(this, void 0, void 0, function* () {
        const instructions = [];
        (0, _1.withSetRealmAuthority)(instructions, programId, programVersion, realm, realmAuthority, newRealmAuthority, action);
        return instructions[0];
    });
}
exports.createSetRealmAuthority = createSetRealmAuthority;
//# sourceMappingURL=createSetRealmConfig%20copy.js.map