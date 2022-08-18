"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usdtToken = exports.usdcToken = exports.solToken = exports.orcaToken = exports.ethToken = void 0;
const web3_js_1 = require("@solana/web3.js");
/**
 * The following content is auto-generated.
 */
exports.ethToken = Object.freeze({
    tag: "ETH",
    name: "Ethereum",
    mint: new web3_js_1.PublicKey("Ff5JqsAYUD4vAfQUtfRprT4nXu9e28tTBZTDFMnJNdvd"),
    scale: 9,
});
exports.orcaToken = Object.freeze({
    tag: "ORCA",
    name: "Orca",
    mint: new web3_js_1.PublicKey("orcarKHSqC5CDDsGbho8GKvwExejWHxTqGzXgcewB9L"),
    scale: 6,
});
exports.solToken = Object.freeze({
    tag: "SOL",
    name: "Solana",
    mint: new web3_js_1.PublicKey("So11111111111111111111111111111111111111112"),
    scale: 9,
});
exports.usdcToken = Object.freeze({
    tag: "USDC",
    name: "USD Coin",
    mint: new web3_js_1.PublicKey("EmXq3Ni9gfudTiyNKzzYvpnQqnJEMRw2ttnVXoJXjLo1"),
    scale: 6,
});
exports.usdtToken = Object.freeze({
    tag: "USDT",
    name: "Tether USD",
    mint: new web3_js_1.PublicKey("6PE3Mwjzx9h8kCoBp5YPed9TFoG7du8L98yucBP5ps3x"),
    scale: 6,
});
