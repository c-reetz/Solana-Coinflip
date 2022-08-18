"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorMessage = void 0;
function getErrorMessage(ex) {
    if (ex instanceof Error) {
        return ex.message;
    }
    return JSON.stringify(ex);
}
exports.getErrorMessage = getErrorMessage;
//# sourceMappingURL=script.js.map