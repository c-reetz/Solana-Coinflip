"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSetRealmAuthority = void 0;
const _1 = require(".");
function createSetRealmAuthority(programId, programVersion, realm, realmAuthority, newRealmAuthority, action) {
    const instructions = [];
    (0, _1.withSetRealmAuthority)(instructions, programId, programVersion, realm, realmAuthority, newRealmAuthority, action);
    return instructions[0];
}
exports.createSetRealmAuthority = createSetRealmAuthority;
//# sourceMappingURL=createSetRealmAuthority.js.map