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
Object.defineProperty(exports, "__esModule", { value: true });
exports.orcaDevnetPoolConfigs = exports.orcaUsdcPool = exports.orcaSolPool = exports.ethUsdcPool = exports.ethSolPool = exports.usdcUsdtPool = exports.solUsdtPool = exports.solUsdcPool = void 0;
const web3_js_1 = require("@solana/web3.js");
const pool_types_1 = require("../../model/orca/pool/pool-types");
const percentage_1 = require("../../public/utils/models/percentage");
const Tokens = __importStar(require("./tokens"));
/**
 * The following content is auto-generated.
 */
exports.solUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("8DT1oKJPHcdJzdSf3cb2WT7L8eRjLUJeDFSe7M2QDtQE"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("BVSZP6RsqAtjvuJrXYsYN5U4XY7pLwW4PawfgVPkLbjN"),
    poolTokenMint: new web3_js_1.PublicKey("4GpUivZ2jvZqQ3vJRsoq5PwnYv6gdV9fJ9BzHT2JcRr7"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("HPzaLqtZGhTbs7WcdGMfLswKze28W75nrYytNSw7qdvi"),
    tokenIds: [Tokens.solToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("4ShvTPQ3jYZzwUpxoQFSCDZxLtxQYNPUfeL3sR9mzLjJ") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("9eKgmUSfTkQLRBvowV9zjY3BbhAQVaGSw1jfon5UwUJM") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.solUsdtPool = Object.freeze({
    address: new web3_js_1.PublicKey("65AsoozQfBedPU3rGCB7CfBbSFhiFGaVQaeoF9mLFM3g"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("59Pu3srqBDSgWrSJKuh7xcb5omJeVkMw41eFswDWKPat"),
    poolTokenMint: new web3_js_1.PublicKey("2E4Mp6y2gFRteXiANnwzAJEhHwD3NX1wru3XvxJpGBq2"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("HmRP17zbgJUPPeueLjT2b1HVKt16CTixSJX6UpGkkZnp"),
    tokenIds: [Tokens.solToken.mint.toString(), Tokens.usdtToken.mint.toString()],
    tokens: {
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("BhJsBxGoe39HWtwFTCxRZGhPNVZ5x9Rr2gFzNsaA6ES8") }),
        [Tokens.usdtToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdtToken), { addr: new web3_js_1.PublicKey("Ea2gPV96MQthA5CCS4NincVidxsN8JifWhBoMJVHx8mZ") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.usdcUsdtPool = Object.freeze({
    address: new web3_js_1.PublicKey("4UJqLypzZzDvoAWCLt6qWEoddMYoSLjrJEB13AfRmV68"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("52Sp73fASLtZhBPyZu7rQoejG9sNzpNLaTTF4mJJGZge"),
    poolTokenMint: new web3_js_1.PublicKey("EBor1PR5XNGHjRVB6JDJuKVCQbvdr1CVZTaX1hTAdvQv"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("6RjV63TfeJDL7K6j8cUnaT6mWXKxqsrDFrumvqGRwss6"),
    tokenIds: [Tokens.usdcToken.mint.toString(), Tokens.usdtToken.mint.toString()],
    tokens: {
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("Fp9PioKwFc6vmQZ5yB2pPSSx5VqkLhgX21dQYug79yUQ") }),
        [Tokens.usdtToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdtToken), { addr: new web3_js_1.PublicKey("GazSkg8GU4cti8Dm1cYD74CQf9UXQdUzBsP27YhC4SCt") }),
    },
    curveType: pool_types_1.CurveType.Stable,
    amp: 100,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(9, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(1, 10000),
    },
});
exports.ethSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("F9MgdfFEshXCTGbppcVr2DzpVxqkiVowGqd95S4vpC6D"),
    nonce: 251,
    authority: new web3_js_1.PublicKey("FD1UJqbXtiYnMcKxcDG4MYY1vasupm2sYXAkStQhSpTb"),
    poolTokenMint: new web3_js_1.PublicKey("8sFnpd7mM1AWxP1LXX2FWbbkaVtAopBPmPNZ9y6172WL"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("8zyAMewVQuHBxJeqn5oRvanDaaEZ9uYxjHxJ9DYCRsgn"),
    tokenIds: [Tokens.ethToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.ethToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.ethToken), { addr: new web3_js_1.PublicKey("FJetz1Du8p2NWmfa9DNvHR8zC42tUCHsY3YfnkZNyZfT") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("37o62xYE1a43Ap8neq6SdrutxQKFsFHicRamkcjHigKs") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.ethUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("CVH3UX1fePV3fn4dE2irNgni2uRkPdEWyZeCZS5b63F3"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("3uf9wngmqKdBdrWPM9iKsXQE829sg7gH9oJghcrpePhh"),
    poolTokenMint: new web3_js_1.PublicKey("9pRnvg7ihSJDLi6DGf3PLwr6xRRRrBPXsHYEgGL5hzgA"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("9AekLW8Dq5T1XnLLC2rQscS4Y5YN2QwrYA7eaGdq7Xje"),
    tokenIds: [Tokens.ethToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.ethToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.ethToken), { addr: new web3_js_1.PublicKey("C7eYGeiroWzuPgqruxRmgj3xw978gRZpPTov2kqxBRpx") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("DRdNFrRqWpqQHhJDymyZvgHBH2vTkUo5jzzTwWy7RT4h") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.orcaSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("B4v9urCKnrdCMWt7rEPyA5xyuEeYQv4aDpCfGFVaCvox"),
    nonce: 252,
    authority: new web3_js_1.PublicKey("38Q2148y3BKU6pDUfv1zpeEeKNuDHBH34WdEwo5EiTfe"),
    poolTokenMint: new web3_js_1.PublicKey("CmDdQhusZWyi9fue27VSktYgkHefm3JXNdzc9kCpyvYi"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("EEWAuP2d1KbwX14dgHwxXspPMYfxXvgf4CNRYvMakPHg"),
    tokenIds: [Tokens.orcaToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.orcaToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.orcaToken), { addr: new web3_js_1.PublicKey("HsGXFtv1uBTtWuPCEJWpxZS4QkcHwAhdPaMVSvS4fhtv") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("3coXPvurzHQ6sYLrYi8zGWG7SLVv9mHnbqmchjKgPEmz") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.orcaUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("GaCKuVZyo6HxUf6bkcWzDETGHqqViF6H77ax7Uxq3LXU"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("3KVqBR9cB4tNHwpNPZtedegXbQ8FbWgjzk5oob7QRnHt"),
    poolTokenMint: new web3_js_1.PublicKey("2ZEEntzoUN7XuMs88ukLGv5HRR1byL7wFWChryF5ZHri"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("9yVp1tUHNxorNZgXAs6thPeizCryHTebjKG4P8uUdXuv"),
    tokenIds: [Tokens.orcaToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.orcaToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.orcaToken), { addr: new web3_js_1.PublicKey("7KAqhu58omLjKjg1XNSw28JULED82mnA1vvAMVoAdA6T") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("8E2CH9fPNXbc5pqu1dWWkNsNZWvLcBEXdBnzzXuhvJNL") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
/**
 * Mapping for OrcaPool parameters
 * Key: poolTokenMint : OrcaPoolParams
 */
exports.orcaDevnetPoolConfigs = {
    "4GpUivZ2jvZqQ3vJRsoq5PwnYv6gdV9fJ9BzHT2JcRr7": exports.solUsdcPool,
    "2E4Mp6y2gFRteXiANnwzAJEhHwD3NX1wru3XvxJpGBq2": exports.solUsdtPool,
    EBor1PR5XNGHjRVB6JDJuKVCQbvdr1CVZTaX1hTAdvQv: exports.usdcUsdtPool,
    "8sFnpd7mM1AWxP1LXX2FWbbkaVtAopBPmPNZ9y6172WL": exports.ethSolPool,
    "9pRnvg7ihSJDLi6DGf3PLwr6xRRRrBPXsHYEgGL5hzgA": exports.ethUsdcPool,
    CmDdQhusZWyi9fue27VSktYgkHefm3JXNdzc9kCpyvYi: exports.orcaSolPool,
    "2ZEEntzoUN7XuMs88ukLGv5HRR1byL7wFWChryF5ZHri": exports.orcaUsdcPool,
};
