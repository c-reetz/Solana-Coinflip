"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokens = void 0;
function getTokens(poolParams, inputTokenId) {
    if (poolParams.tokens[inputTokenId] == undefined) {
        throw new Error("Input token not part of pool");
    }
    const tokenAId = poolParams.tokenIds[0];
    const tokenBId = poolParams.tokenIds[1];
    const forward = tokenAId == inputTokenId;
    const inputOrcaToken = forward ? poolParams.tokens[tokenAId] : poolParams.tokens[tokenBId];
    const outputOrcaToken = forward ? poolParams.tokens[tokenBId] : poolParams.tokens[tokenAId];
    return { inputPoolToken: inputOrcaToken, outputPoolToken: outputOrcaToken };
}
exports.getTokens = getTokens;
