"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseVersion = void 0;
function parseVersion(version) {
    var arr = version.split('.');
    // parse int or default to 0
    var major = parseInt(arr[0]) || 0;
    var minor = parseInt(arr[1]) || 0;
    var patch = parseInt(arr[2]) || 0;
    return {
        major,
        minor,
        patch,
    };
}
exports.parseVersion = parseVersion;
//# sourceMappingURL=version.js.map