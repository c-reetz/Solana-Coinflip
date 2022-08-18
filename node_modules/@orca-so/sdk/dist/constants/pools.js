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
exports.stsolWldoPool = exports.sypUsdcPool = exports.stsolWstethPool = exports.mngoUsdcPool = exports.tulipUsdcPool = exports.mediaUsdcPool = exports.kuroUsdcPool = exports.abrUsdcPool = exports.grapeUsdcPool = exports.sunnyUsdcPool = exports.copeUsdcPool = exports.whapiUsdcPool = exports.slimUsdcPool = exports.ninjaSolPool = exports.samoUsdcPool = exports.bopUsdcPool = exports.polisUsdcPool = exports.atlasUsdcPool = exports.scnsolSolPool = exports.orcaMsolPool = exports.orcaPaiPool = exports.msolSolPool = exports.psolUsdcPool = exports.scnsolUsdcPool = exports.sbrUsdcPool = exports.portUsdcPool = exports.slrsUsdcPool = exports.msolUsdcPool = exports.snyUsdcPool = exports.liqUsdcPool = exports.samoSolPool = exports.kinSolPool = exports.orcaUsdcPool = exports.orcaSolPool = exports.usdcUsdtPool = exports.mapsSolPool = exports.fidaSolPool = exports.merSolPool = exports.btcSolPool = exports.oxySolPool = exports.copeSolPool = exports.fttSolPool = exports.srmSolPool = exports.stepSolPool = exports.ropeSolPool = exports.raySolPool = exports.ethUsdcPool = exports.ethSolPool = exports.solUsdtPool = exports.solUsdcPool = void 0;
exports.wustUsdcPool = exports.wustSolPool = exports.slcUsdcPool = exports.scyUsdcPool = exports.shdwSolPool = exports.shdwUsdcPool = exports.aartUsdcPool = exports.meanUsdcPool = exports.gstUsdcPool = exports.basisUsdcPool = exports.unqUsdcPool = exports.wmpUsdcPool = exports.onesolUsdcPool = exports.chicksUsdcPool = exports.mndeUsdcPool = exports.btcUsdcPool = exports.uxpUsdcPool = exports.runUsdcPool = exports.blockUsdcPool = exports.fantUsdcPool = exports.upsUsdcPool = exports.tttUsdcPool = exports.frktUsdcPool = exports.dflSolPool = exports.dflUsdcPool = exports.aptUsdcPool = exports.sonarUsdcPool = exports.oogiUsdcPool = exports.catoUsdcPool = exports.sdogeUsdcPool = exports.woofUsdcPool = exports.gofxUsdcPool = exports.slndUsdcPool = exports.rayUsdcPool = exports.fttUsdcPool = exports.avaxUsdcPool = exports.auryUsdcPool = exports.wstethUsdcPool = exports.stsolUsdcPool = exports.jetUsdcPool = exports.prtUsdcPool = exports.larixUsdcPool = exports.ivnSolPool = exports.btcMsolPool = exports.msolWhethPool = exports.msolUsdtPool = exports.wagUsdcPool = exports.mndeMsolPool = exports.whethUsdcPool = exports.whethSolPool = void 0;
exports.orcaPoolConfigs = exports.stsolWhethPool = exports.btcStsolPool = exports.stsolSolPool = exports.takiSrlyPool = exports.srlySolPool = exports.zigUsdcPool = exports.takiSrlyv2Pool = exports.hbbUsdhPool = exports.novaUsdcPool = exports.gmtUsdcPool = exports.zbcUsdcPool = exports.srlyv2SolPool = exports.saoUsdcPool = exports.puffSolPool = exports.onesolSolPool = exports.mmaUsdcPool = exports.audioUsdcPool = exports.seededUsdcPool = exports.stsolUsdtPool = exports.sbUsdcPool = exports.hbbSolPool = exports.hbbUsdcPool = exports.btcOrcaPool = exports.ftmUsdcPool = exports.celoUsdcPool = exports.cmfiUsdcPool = exports.geneUsdcPool = exports.orcaWhethPool = exports.orcaUsdtPool = exports.daosolUsdcPool = exports.jsolUsdcPool = exports.stsolWustPool = exports.wlunaWustPool = exports.msolWustPool = void 0;
const web3_js_1 = require("@solana/web3.js");
const pool_types_1 = require("../model/orca/pool/pool-types");
const percentage_1 = require("../public/utils/models/percentage");
const Tokens = __importStar(require("./tokens"));
/**
 * The following content is auto-generated.
 */
exports.solUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("EGZ7tiLeH62TPV1gL8WwbXGzEPa9zmcpVnnkPKKnrE2U"),
    nonce: 252,
    authority: new web3_js_1.PublicKey("JU8kmKzDHF9sXWsnoznaFDFezLsE5uomX2JkRMbmsQP"),
    poolTokenMint: new web3_js_1.PublicKey("APDFRM3HMr8CAGXwKHiu2f5ePSpaiEJhaURwhsRrUUt9"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("8JnSiuvQq3BVuCU3n4DrSTw9chBSPvEMswrhtifVkr1o"),
    tokenIds: [Tokens.solToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("ANP74VNsHwSrq9uUSjiSNyNWvf6ZPrKTmE4gHoNd13Lg") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("75HgnSvXbWKZBpZHveX68ZzAhDqMzNDS29X6BGLtxMo1") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.solUsdtPool = Object.freeze({
    address: new web3_js_1.PublicKey("Dqk7mHQBx2ZWExmyrR2S8X6UG75CrbbpK2FSBZsNYsw6"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("2sxKY7hxVFrY5oNE2DgaPAJFamMzsmFLM2DgVcjK5yTy"),
    poolTokenMint: new web3_js_1.PublicKey("FZthQCuYHhcfiDma7QrX7buDHwrZEd7vL8SjS6LQa3Tx"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("BBKgw75FivTYXj85D2AWyVdaTdTWuSuHVXRm1Xu7fipb"),
    tokenIds: [Tokens.solToken.mint.toString(), Tokens.usdtToken.mint.toString()],
    tokens: {
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("DTb8NKsfhEJGY1TrA7RXN6MBiTrjnkdMAfjPEjtmTT3M") }),
        [Tokens.usdtToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdtToken), { addr: new web3_js_1.PublicKey("E8erPjPEorykpPjFV9yUYMYigEWKQUxuGfL2rJKLJ3KU") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.ethSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("EuK3xDa4rWuHeMQCBsHf1ETZNiEQb5C476oE9u9kp8Ji"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("DffrDbzPiswDJaiicBBo9CjqztKgFLrqXGwNJH4XQefZ"),
    poolTokenMint: new web3_js_1.PublicKey("71FymgN2ZUf7VvVTLE8jYEnjP3jSK1Frp2XT1nHs8Hob"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("unxKgWEc71ZiHwMqZs3VLqjcjmZhfTZEg94ZLGvjdMP"),
    tokenIds: [Tokens.ethToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.ethToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.ethToken), { addr: new web3_js_1.PublicKey("7F2cLdio3i6CCJaypj9VfNDPW2DwT3vkDmZJDEfmxu6A") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("5pUTGvN2AA2BEzBDU4CNDh3LHER15WS6J8oJf5XeZFD8") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.ethUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("FgZut2qVQEyPBibaTJbbX2PxaMZvT1vjDebiVaDp5BWP"),
    nonce: 253,
    authority: new web3_js_1.PublicKey("4dfCZR32xXhoTgMRhnViNaTFwiKP9A34TDjHCR3xM5rg"),
    poolTokenMint: new web3_js_1.PublicKey("3e1W6Aqcbuk2DfHUwRiRcyzpyYRRjg6yhZZcyEARydUX"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("DLWewB12jzGn4wXJmFCddWDeof1Ma4cZYNRv9CP5hTvX"),
    tokenIds: [Tokens.ethToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.ethToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.ethToken), { addr: new web3_js_1.PublicKey("H9h5yTBfCHcb4eRP87fXczzXgNaMzKihr7bf1sjw7iuZ") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("JA98RXv2VdxQD8pRQq4dzJ1Bp4nH8nokCGmxvPWKJ3hx") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.raySolPool = Object.freeze({
    address: new web3_js_1.PublicKey("3THMPkPmcHJ54JtHRyazhs7UN7HbV5KiNJVLJs6hSPSC"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("EUc3MtHPLL956pTDfM5q25jp5Fk9zW7omEzh1uyDY7s6"),
    poolTokenMint: new web3_js_1.PublicKey("5kimD5W6yJpHRHCyPtnEyDsQRdiiJKivu5AqN3si82Jc"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("65XNtnUsP1TMzKMGhMoD3GUFMNbmnZQwDaxDLE3jncUC"),
    tokenIds: [Tokens.rayToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.rayToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.rayToken), { addr: new web3_js_1.PublicKey("GZaUNWf4ov6VZaD5MqZtc5pHB3mWTqczNUB4sstt8CSR") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("GNSZ1rr57QQ6qLcmZnhMcoBymenVezhNpzcFSfJP37h9") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.ropeSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("DCENobjFZK59nLeMCVRkQtnkAWrJkWAVpmVnwVNc8gqH"),
    nonce: 251,
    authority: new web3_js_1.PublicKey("C2DDX95TK3uC9MQXhHp3LWRv9kWtFTp36Ub9VPCKKiCV"),
    poolTokenMint: new web3_js_1.PublicKey("ADrvfPBsRcJfGsN6Bs385zYddH52nuM5FA8UaAkX9o2V"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("88rKjeeDQYJxGVCG39znDvbxzjPc5H37XqHRQCSNJvED"),
    tokenIds: [Tokens.ropeToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.ropeToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.ropeToken), { addr: new web3_js_1.PublicKey("HLHPVwgzYjTHmu1fmV9eZzdE8H3fZwhuCBRNNN2Z5miA") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("7Be3aStQmKgeXC1xqfJnA8qaGzw6keQTLqHYAJprZK2H") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.stepSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("2sNtf8wLZMR7XJm2pzvvVUNPTNRFsGTiC5vgDSGv5QGD"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("HzAJLVqZ7fnmc2LfRPtz2GHu93RpAPQsdDTg6DRoTTmf"),
    poolTokenMint: new web3_js_1.PublicKey("8nTzqDXHriG2CXKbybeuEh1EqDQMtrbYMFWcP7AkiDaP"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("5FEmPmAk72NycwzMXLD3hc2f47zRXocv4mvd3HEUZ5io"),
    tokenIds: [Tokens.stepToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.stepToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.stepToken), { addr: new web3_js_1.PublicKey("35opuEpVvggzfV361hQVNXiC7KAKS1HCeDoVpfVybo8k") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("A3DSsYZJWHiwXSQb7P2AbEoaWhpauJLU1PVdTPnzV5s9") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.srmSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("EJRXAkKyDhDgzdZz1Ss5CpWKWSK9xTR5S6GDLAer8mdh"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("2pQbngWBSWUjBHWVWQ3tppKxW3Y5NzUcye1822itKyzZ"),
    poolTokenMint: new web3_js_1.PublicKey("9tf8rBSEQYG7AqL896fN2nZi1iYPqpWaLEdpbeQaC1Vy"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("APyc1s8wES4Q2FTqHN8jXZtRuWQyRWZ82u7EFfras2iZ"),
    tokenIds: [Tokens.srmToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.srmToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.srmToken), { addr: new web3_js_1.PublicKey("2JCxZv6LaFjtWqBXSC2brsWE9WryS4Cp3VwwDeNGvLyv") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("EdhG3vQbTVVAARZB4AbhU2HsVbvfFqX2yhBAfFV22nzA") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.fttSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("68Bg6yQxWm3mrUYk3XzMiF5ycE41HwPhyEdaB1cp6wuo"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("BpshqwEmPXmJwJfFgTFafmXoHN8Lc7SouvFsh6jyYQAm"),
    poolTokenMint: new web3_js_1.PublicKey("EsYaDKJCmcJtJHFuJYwQZwqohvVMCrFzcg8yo3i328No"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("FWBCbjZnypLKz7uHGJXpBAEez2FurQXi9J3js7ZT1xDe"),
    tokenIds: [Tokens.fttToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.fttToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.fttToken), { addr: new web3_js_1.PublicKey("3eVE92aEAsLYcBACXNu1yxoHVfTM8e8vmQC2zSApGRJX") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("BbsiNbFfJsRDwqF4JaiJ6sKecNuY4eWmEaDHcY6h6HuD") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.copeSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("BRx4dJecxzeGYc1BskCWonfGCeMyv9G7tk66cf2QGhK6"),
    nonce: 254,
    authority: new web3_js_1.PublicKey("JAJr1D6BQHFj9qJ8pfXhvJgLfn9vTcviU9sTA8MhKzN4"),
    poolTokenMint: new web3_js_1.PublicKey("CzieDbGRdN1QGaGDNpSqzEA18bi881ccvkkGZi51pe1k"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("9X8VRnxk6EVKGA7TErdSZYFC8oLUM569pDbZTtycjvXw"),
    tokenIds: [Tokens.copeToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.copeToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.copeToken), { addr: new web3_js_1.PublicKey("7v5GCdHH439SztxcqL4wpfWdPvv9EfMm8GYTHSUQoGoY") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("5tSgRUK6f2x1nAXA4gdcHNXiWdToqni9pr5xvq2Fq82u") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.oxySolPool = Object.freeze({
    address: new web3_js_1.PublicKey("Cq4EZrvuFQpsCz8L3gS6t7iQ7VWzTtqDgSxD4AgVAAfd"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("FxxcJPunf6Vj9Ve5zyM9yatMbmkrzTQ1QSk4NqKW9DvK"),
    poolTokenMint: new web3_js_1.PublicKey("7tYCdLN84EnTMkxM7HNamWJx7F4xgKe9KiiWvLyWjbgT"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("Ch8i2A1GAspivXYfdme7vSxh1mhRjmRgeiKN8KpWhVqo"),
    tokenIds: [Tokens.oxyToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.oxyToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.oxyToken), { addr: new web3_js_1.PublicKey("BoZQMfTLTPcXnevJxNFkECVbKesfhXnTUg4kxLgzV9BX") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("8ZrEcJbgg7BdoBga5RYDR8aMujLf5cAQp8zdPZqk7nNC") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.btcSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("7N2AEJ98qBs4PwEwZ6k5pj8uZBKMkZrKZeiC7A64B47u"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("GqnLhu3bPQ46nTZYNFDnzhwm31iFoqhi3ntXMtc5DPiT"),
    poolTokenMint: new web3_js_1.PublicKey("Acxs19v6eUMTEfdvkvWkRB4bwFCHm3XV9jABCy7c1mXe"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("4yPG4A9jB3ibDMVXEN2aZW4oA1e1xzzA3z5VWjkZd18B"),
    tokenIds: [Tokens.btcToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.btcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.btcToken), { addr: new web3_js_1.PublicKey("9G5TBPbEUg2iaFxJ29uVAT8ZzxY77esRshyHiLYZKRh8") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("5eqcnUasgU2NRrEAeWxvFVRTTYWJWfAJhsdffvc6nJc2") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.merSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("UJBm2tHwDbQZpjQvaHozg5qkjh6prSKhnWheqR5T76Q"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("C8HcMrC9WRqqXVbHRhZWjuZPbbWmszDobKFxevCtGhpT"),
    poolTokenMint: new web3_js_1.PublicKey("HiwRobjfHZ4zsPtqCC4oBS24pSmy4t8GGkXRbQj4yU6L"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("3Fdj69449GhiDmqyvWWTSafjRphGdiDhZ5i5rqfHBdio"),
    tokenIds: [Tokens.merToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.merToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.merToken), { addr: new web3_js_1.PublicKey("DHdkRWTa9SRJNMtWZQYvNNbjrDP3n92EWLHezjFGPipb") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("DC5RwjB3VkXdt2PoWKTA4Ub9KbtcY8xXpmPNKsFjALwq") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.fidaSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("4SUBbivGMvMhem3ajVtkmuPvL4GuQ8kfYTJFuQfG4F8t"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("owuNLod7H14GpQCUodcdBBeD4LiZ2T5U9KpS2sAbTp6"),
    poolTokenMint: new web3_js_1.PublicKey("EYsNdtyu4gGTaGz8N5m5iQ3G1N6rDyMbR72B3CqbWW4W"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("J2s1GpduscTTvMYt3os8LdvT24uhr9bPnTbxSKZZhEma"),
    tokenIds: [Tokens.fidaToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.fidaToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.fidaToken), { addr: new web3_js_1.PublicKey("9ofyx5yFzjH1XWmJzfiGCDfhq6ho8yFbszGQrrJXe54") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("55moYcq91pXbSRpL2DR8P3BehqSNWiJrdTn5SZFc2STn") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.mapsSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("4rkgbbCPKk5zx3KiwcCNiSpNSSLgAkswKGfX7CJjGgtC"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("8uuBxVsGf2bqH5t8mct5NfpgcTDb7czXuWVEm6Boia4x"),
    poolTokenMint: new web3_js_1.PublicKey("99pfC8fWymXgbq3CvrExhx3UxQDC1fMWEWLbNT83F45e"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("8w3gx1GQ1UN5sodEVP14qUwzCcgopHWUeWbT26hgK3xh"),
    tokenIds: [Tokens.mapsToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.mapsToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.mapsToken), { addr: new web3_js_1.PublicKey("BqExNTYk7YdeiaREHqnqN2q1F3dBCTPhkwrrWBFD4F1m") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("HdEQ99E979aXn2xTcg5UXEfLynwFkqpPTxLaNkH7Nz7P") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.usdcUsdtPool = Object.freeze({
    address: new web3_js_1.PublicKey("F13xvvx45jVGd84ynK3c8T89UejQVxjCLtmHfPmAXAHP"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("3cGHDS8uWhdxQj14vTmFtYHX3NMouPpE4o9MjQ43Bbf4"),
    poolTokenMint: new web3_js_1.PublicKey("H2uzgruPvonVpCRhwwdukcpXK8TG17swFNzYFr2rtPxy"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("B4RNxMJGRzKFQyTq2Uwkmpyjtew13n7KtdqZy6qgENTu"),
    tokenIds: [Tokens.usdcToken.mint.toString(), Tokens.usdtToken.mint.toString()],
    tokens: {
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("6uUn2okWk5v4x9Gc4n2LLGHtWoa9tmizHq1363dW7t9W") }),
        [Tokens.usdtToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdtToken), { addr: new web3_js_1.PublicKey("AiwmnLy7xPT28dqZpkRm6i1ZGwELUCzCsuN92v4JkSeU") }),
    },
    curveType: pool_types_1.CurveType.Stable,
    amp: 100,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(6, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(1, 10000),
    },
});
exports.orcaSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("2ZnVuidTHpi5WWKUwFXauYGhvdT9jRKYv5MDahtbwtYr"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("2PH1quJj9MHQXATCmNZ6qQ2gZqM8R236DpKaz99ggVpm"),
    poolTokenMint: new web3_js_1.PublicKey("2uVjAuRXavpM6h1scGQaxqb6HVaNRn6T2X7HHXTabz25"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("4Zc4kQZhRQeGztihvcGSWezJE1k44kKEgPCAkdeBfras"),
    tokenIds: [Tokens.orcaToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.orcaToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.orcaToken), { addr: new web3_js_1.PublicKey("AioST8HKQJRqjE1mknk4Rydc8wVADhdQwRJmAAYX1T6Z") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("73zdy95DynZP4exdpuXTDsexcrWbDJX9TFi2E6CDzXh4") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.orcaUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("2p7nYbtPBgtmY69NsE8DAW6szpRJn7tQvDnqvoEWQvjY"),
    nonce: 254,
    authority: new web3_js_1.PublicKey("3fr1AhdiAmWLeNrS24CMoAu9pPgbzVhwLtJ6QUPmw2ob"),
    poolTokenMint: new web3_js_1.PublicKey("n8Mpu28RjeYD7oUX3LG1tPxzhRZh3YYLRSHcHRdS3Zx"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("7CXZED4jfRp3qdHB9Py3up6v1C4UhHofFvfT6RXbJLRN"),
    tokenIds: [Tokens.orcaToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.orcaToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.orcaToken), { addr: new web3_js_1.PublicKey("9vYWHBPz817wJdQpE8u3h8UoY3sZ16ZXdCcvLB7jY4Dj") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("6UczejMUv1tzdvUzKpULKHxrK9sqLm8edR1v9jinVWm9") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.kinSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("Ez52BLSoZw3MxWxMK4ADsJXqzUiYW9sUnwcrrQwQGdLT"),
    nonce: 253,
    authority: new web3_js_1.PublicKey("C6WisvFQzqxTBF3DV6RFbPMPBiVHE816CZHoctB3WzrW"),
    poolTokenMint: new web3_js_1.PublicKey("HEvnD66WcBfTajS9adUYnGRBMDehFtLySiFHSD6kEBWs"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("5bLeJU66qTopjZBa48BUd7EXWcj4UeCMfHjjrvt8Zcgs"),
    tokenIds: [Tokens.kinToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.kinToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.kinToken), { addr: new web3_js_1.PublicKey("2Ssm5Dd1Zc5QpGSZzuqt3Ef4bADteuBbCGiEZJ5n48rV") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("HCS9EpKRxWDS9GCRFStNbPWgRQpvV6EyBWChJja2UbCm") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.samoSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("DiAP9qmp5foN7fLTWfBWjo9KBS1jgvKUJLWi1ZhqKaja"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("3uZcofBKVBYFrQ7jVjTFLEMWAQiZcih4AES5tKBqdo7m"),
    poolTokenMint: new web3_js_1.PublicKey("D6N9j8F2DhtzDtrdpT74y3u2YmYAzcggiLc3nTjqux9M"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("BYAjG645fRRHZ5JFnZKnXc4dzK9WppcoVWDMYj3zm3KF"),
    tokenIds: [Tokens.samoToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.samoToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.samoToken), { addr: new web3_js_1.PublicKey("AFcbD7UTzk9d1njRxyDHNbQ5Q6miPNAE1GctjD96JYAi") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("6kYbPDsYLQUwptV7ZvQKG3gjNreEEgaWh2CM4DQPYTpq") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.liqUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("AXSeEafwPUGSamiZWH8m2PJtvpDVtrofxvycNwxiysdh"),
    nonce: 254,
    authority: new web3_js_1.PublicKey("6Y5TnCwgifc8Z7QYo672nT9uNd2hcivVR1NT6oDkJx6P"),
    poolTokenMint: new web3_js_1.PublicKey("3PD9SZFwXKkXr4akLf4ofo37ZUMycwML89R2P3qxcbZG"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("FSVPcprrTkQLRtDACFEpa2rhEVx4kBvjPuQaxj572SaC"),
    tokenIds: [Tokens.liqToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.liqToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.liqToken), { addr: new web3_js_1.PublicKey("CVspL8Tj5YdqntXJegNeDXHiBn3648QDNB7gex6D9MgY") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("8YzLsZ1FtsruswkBogEaXwmRTf5PMuyVcfSZXRAdi8qA") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.snyUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("BDn3Fj9UXVi2mRVMR2jzpCrAZZphnwfkvFhs192yhCTu"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("FvjsfbbzZAcrVdfrGtZUjGWAjWHXrfMG8Bjwc17vVSK3"),
    poolTokenMint: new web3_js_1.PublicKey("AZpo4BJHHRetF96v6SGinFZBMXM4yWMo4RA8C4PriDLk"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("DiULDJAYXdbtX8CfFsU2jCgHvQWT7u3gwRwpvQxfEMvr"),
    tokenIds: [Tokens.snyToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.snyToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.snyToken), { addr: new web3_js_1.PublicKey("14RHMRzwx9Y4Z41qpr9sTwJZ58wXqV1R9WTkUA7ybmKG") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("Dw9D9T4bBC3oGdMqxE1xWfPSCJ27SYwWD8rFfUxU99QG") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.msolUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("Hme4Jnqhdz2jAPUMnS7jGE5zv6Y1ynqrUEhmUAWkXmzn"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("9Z7E42k46kxnBjAh8YGXDw3rRGwwxQUBYM7Ccrmwg6ZP"),
    poolTokenMint: new web3_js_1.PublicKey("8PSfyiTVwPb6Rr2iZ8F3kNpbg65BCfJM9v8LfB916r44"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("3W3Skj2vQsNEMhGRQprFXQy3Q8ZbM6ojdgiDCokVPWno"),
    tokenIds: [Tokens.msolToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.msolToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.msolToken), { addr: new web3_js_1.PublicKey("GBa7G5f1FqAXEgByuHXsqsEdpyMjRgT9SNxZwmmnEJAY") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("7hFgNawzzmpDM8TTVCKm8jykBrym8C3TQdb8TDAfAVkD") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.slrsUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("87Xz6RK1uzP5NEhSjMewZtDAZyg4V1tYAa1KHnvge17b"),
    nonce: 254,
    authority: new web3_js_1.PublicKey("5D9v9y6Kbswe6k1wnVceuqRXHMsRQJ8xzx8hadSH6EAM"),
    poolTokenMint: new web3_js_1.PublicKey("AtB4nUmdyQfuWWJ9xAHw9xyVnJFfSjSuVWkiYan8y86w"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("CLxeBxNq42AtmD43F5BTqCHTnkVHX8sP9cVPdtRkTL7D"),
    tokenIds: [Tokens.slrsToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.slrsToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.slrsToken), { addr: new web3_js_1.PublicKey("CM7oGYHy1oxzHoum8Cxv4pwnndm6Jbs3NkBZkc6v9S9d") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("3QqPbMcUMZu3Rz762g7JgvpUxhRHPtE9HFk2MSDRmPqa") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.portUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("4if9Gy7dvjU7XwunKxdnCcPsaT3yAHPXdz2XS1eo19LG"),
    nonce: 254,
    authority: new web3_js_1.PublicKey("BshtCZRCHj2RZYC7u5sW3ioRJo9ZiYA4T5p8muFwrKnb"),
    poolTokenMint: new web3_js_1.PublicKey("F8gPSpwVHj8FdAJAYULDuZBxFEJut87hUbARYYx3471w"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("5JZXUbCfaSo3y9PYq47Hj5Yc6hVFa4j7MkDzBJfMSRSN"),
    tokenIds: [Tokens.portToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.portToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.portToken), { addr: new web3_js_1.PublicKey("2wuSqR5z2Guft2yt57Hx7K6i1AYNoUi8fjxHUeAgaKXo") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("AvP1Db3SyUxLGMSc4nSXjJkjm1kAjiLjog7cup19eWa3") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.sbrUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("HiYggjP2fN53Jw46e5UuskqNP3HH98jceRxEgVoeRwNw"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("ATkEV1nEkdp7zgaGpzFCsJ5WAyejcJbxqzGhQpfcDW4S"),
    poolTokenMint: new web3_js_1.PublicKey("CS7fA5n4c2D82dUoHrYzS3gAqgqaoVSfgsr18kitp2xo"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("7S3KKuvcHfcKWBGLDwmoTgtB97JE8LHruP8jbmQkGfH"),
    tokenIds: [Tokens.sbrToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.sbrToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.sbrToken), { addr: new web3_js_1.PublicKey("DrJTQqNZqNCf2HDLpYg9zRCMRwnhZEVQuGjeaWtX6CA7") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("DEVLUv1uiUSukQoBdy9fDQyehi4N2Boojy8J2LQ8bK2E") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.scnsolUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("6Gh36sNXrGWYiWr999d9iZtqgnipJbWuBohyHBN1cJpS"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("GXWEpRURaQZ9E62Q23EreTUfBy4hfemXgWFUWcg7YFgv"),
    poolTokenMint: new web3_js_1.PublicKey("Dkr8B675PGnNwEr9vTKXznjjHke5454EQdz3iaSbparB"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("HsC1Jo38jK3EpoNAkxfoUJhQVPa28anewZpLfeouUNk7"),
    tokenIds: [Tokens.scnsolToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.scnsolToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.scnsolToken), { addr: new web3_js_1.PublicKey("7xs9QsrxQDVoWQ8LQ8VsVjfPKBrPGjvg8ZhaLnU1i2VR") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("FZFJK64Fk1t619zmVPqCx8Uy29zJ3WuvjWitCQuxXRo3") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.psolUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("GW1Xt9HHtvcnky8X7aBA3BoTgiirJKP5XwC5REFcZSsc"),
    nonce: 254,
    authority: new web3_js_1.PublicKey("GXueH9K1MzRncoTYbpLiXXC3WrKkmHUFxV5JEu8oADbw"),
    poolTokenMint: new web3_js_1.PublicKey("C2YzN6MymD5HM2kPaH7bzcbqciyjfmpqyVaR3KA5V6z1"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("BhHd49JYH3Hk6TV5kCjmUgf7fQSQKDjaWTokMmBhTx9o"),
    tokenIds: [Tokens.psolToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.psolToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.psolToken), { addr: new web3_js_1.PublicKey("F7XioZaGe99nosYJQCahx25TKgdUGufYf6sudm1JSgu") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("BT14DfFyNS7qcBGc8TY4HAzDev4vvqsoFBJgjtQpdM2Z") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.msolSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("9EQMEzJdE2LDAY1hw1RytpufdwAXzatYfQ3M2UuT9b88"),
    nonce: 250,
    authority: new web3_js_1.PublicKey("6cwehd4xhKkJ2s7iGh4CaDb7KhMgqczSBnyNJieUYbHn"),
    poolTokenMint: new web3_js_1.PublicKey("29cdoMgu6MS2VXpcMo1sqRdWEzdUR9tjvoh8fcK8Z87R"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("6j2tt2UVYMQwqG3hRtyydW3odzBFwy3pN33tyB3xCKQ6"),
    tokenIds: [Tokens.msolToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.msolToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.msolToken), { addr: new web3_js_1.PublicKey("6xmki5RtGNHrfhTiHFfp9k3RQ9t8qgL1cYP2YCG2h179") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("Ew2coQtVGLeca31vqB2ssHntjzZgUy1ad9VuuAX8yw7p") }),
    },
    curveType: pool_types_1.CurveType.Stable,
    amp: 100,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(6, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(1, 10000),
    },
});
exports.orcaPaiPool = Object.freeze({
    address: new web3_js_1.PublicKey("7LfLiCnoLPefaCVuh6z92TK2tPZUa9bPjW7gHT4jqrec"),
    nonce: 254,
    authority: new web3_js_1.PublicKey("AwUWHxHyQHomqCGJJvagiSDhb2xMqJUiE25qDytdMw49"),
    poolTokenMint: new web3_js_1.PublicKey("C7TH2jEJJaxVwwuvkbcDGfHUiZvEkkeYjyAcdTMi5ujb"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("DrC2aGWrUmsnK6yAphSXEs8GW5nKUCkityaG8Bikn5Ne"),
    tokenIds: [Tokens.orcaToken.mint.toString(), Tokens.paiToken.mint.toString()],
    tokens: {
        [Tokens.orcaToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.orcaToken), { addr: new web3_js_1.PublicKey("HSUFpGyNXEogXQLgEMQ7aMTxE4HZneRaBovbi9btXepM") }),
        [Tokens.paiToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.paiToken), { addr: new web3_js_1.PublicKey("4c9rkBiqAY6fXpVvCbDwpDD44AGQ3MXSaCLcpmLUFtrX") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.orcaMsolPool = Object.freeze({
    address: new web3_js_1.PublicKey("49tTgthTYLMPEqozZNyEQifqkGYxHqqDie9YxVczS3iB"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("9FQ9gDtS6uNr5SMPafuzkDit2rMftHfQuz5mg2X3TqHT"),
    poolTokenMint: new web3_js_1.PublicKey("CVapmQn7HaU1yMDW3q6oUV4hx6XoYv54T4zfGXkuJqkA"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("Hq9xxKdMavJd4teMZusF4PiGNGV3hxdcMZwAdngkHCg7"),
    tokenIds: [Tokens.orcaToken.mint.toString(), Tokens.msolToken.mint.toString()],
    tokens: {
        [Tokens.orcaToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.orcaToken), { addr: new web3_js_1.PublicKey("7hoYJc4aqttctANrNe75gscdmQD9HcXZED6AjdDdZMQ9") }),
        [Tokens.msolToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.msolToken), { addr: new web3_js_1.PublicKey("7MuvRUFT1wWiL7uJKdZqNwk9Fmz2HJ36bEArhDTnyFij") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.scnsolSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("2q6UMko5kTnv866W9MTeAFau94pLpsdeNjDdSYSgZUXr"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("Gyd77CwV23qq937x9UDa4TDkxEeQF9tp8ifotYxqW3Kd"),
    poolTokenMint: new web3_js_1.PublicKey("APNpzQvR91v1THbsAyG3HHrUEwvexWYeNCFLQuVnxgMc"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("42Xzazs9EvjtidvEDrj3JXbDtf6fpTq5XHh96mPctvBV"),
    tokenIds: [Tokens.scnsolToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.scnsolToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.scnsolToken), { addr: new web3_js_1.PublicKey("C8DRXUqxXtUgvgBR7BPAmy6tnRJYgVjG27VU44wWDMNV") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("DzdxH5qJ68PiM1p5o6PbPLPpDj8m1ZshcaMFATcxDZix") }),
    },
    curveType: pool_types_1.CurveType.Stable,
    amp: 100,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(6, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(1, 10000),
    },
});
exports.atlasUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("3V5sjXj1mrWjjB1Xt6Xwp554QwHE5fppGSxbk4GzAtEW"),
    nonce: 254,
    authority: new web3_js_1.PublicKey("8UYN675AJn5htWydDs724xqintBZ4XzsCWqMozUSDU8m"),
    poolTokenMint: new web3_js_1.PublicKey("FZ8x1LCRSPDeHBDoAc3Gc6Y7ETCynuHEr5q5YWV7uRCJ"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("CFN4DQ2p3qroX92pPNy3mov3Dw1aCNGLrU5AXHpHxbko"),
    tokenIds: [Tokens.atlasToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.atlasToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.atlasToken), { addr: new web3_js_1.PublicKey("xotXsNCx4tBhnwhrajGTaVgKq1sfuMkeYHc77ZegCqE") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("8YswVYsTi66umBF2Bnkh4LB2VWMKPssDpe54VAgiuJZQ") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.polisUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("CdKPtCb5fBRaGFS4bJgytfReeHuFyhpe9YUyWHPnEWZG"),
    nonce: 251,
    authority: new web3_js_1.PublicKey("8XB9V3VuHtPBzHqvxzcmpkpaoXNXjZMD8VBHC79SxcEL"),
    poolTokenMint: new web3_js_1.PublicKey("GteBdo9sqE7T41G8AJsaG9WHW48uXBwsLLznmu2TBdgy"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("3gZQ2YnrXbnRwJj5poffLirF7CwacatvtfGCNRFrbJdr"),
    tokenIds: [Tokens.polisToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.polisToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.polisToken), { addr: new web3_js_1.PublicKey("EbXNEUiKxSU1vwwhrbVNVk3qX4o1yU3p75SQUUMfc1zH") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("CLCj9b1vdPutrkvZS8ACTM5q42SXB2Q7khnMLVxDMGEK") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.bopUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("9pheQ8EX2wDKHZYm75G9haEbTyAcg8F2gFWybw2w6Vyc"),
    nonce: 253,
    authority: new web3_js_1.PublicKey("3rxJPYuiRijipJbciewUDacab2Wo3yAe1yWBGzmqn5f1"),
    poolTokenMint: new web3_js_1.PublicKey("2gXDJZ7XAtQEtf4PRSQZKoq1WMuu1H44tQanbMA3YVpu"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("2bei4349W8FUcu5gvP5Zt8yhkpwqcCngZxUkb3xRMJZJ"),
    tokenIds: [Tokens.bopToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.bopToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.bopToken), { addr: new web3_js_1.PublicKey("HkHjLSaP9yyWTzMGD1DKyoc1Dfvhvw4vakRhyjcVUCKs") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("CqRoKMF4kh2o568nFdDNHs7cszBjrkQME4RtCuTqcjCe") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.samoUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("Epvp7qMYAF21VVjacdB3VfKn6nnXQSF4rGYu8sD6Bkow"),
    nonce: 252,
    authority: new web3_js_1.PublicKey("AB4rTE2JiKFhnfynUQCovbW75CUxT9LxcJX2SDTbY9gy"),
    poolTokenMint: new web3_js_1.PublicKey("6VK1ksrmYGMBWUUZfygGF8tHRGpNxQEWv8pfvzQHdyyc"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("9U8UF7d8kBvsS25XoZnjmVQ9vGkP4BUnHJgfc615BvG1"),
    tokenIds: [Tokens.samoToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.samoToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.samoToken), { addr: new web3_js_1.PublicKey("7jwHW4Lw3nVaSJXskN5pUoKU6YB9RBVfZtGBp3VbR43U") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("G7Gqjxk9EaJMeFfoFTSy9WfH8uurgQkbNQCREWAc56DZ") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.ninjaSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("3ECUtPokme1nimJfuAkMtcm7QYjDEfXRQzmGC16LuYnz"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("H8f9n2PfehUc73gRWSRTPXvqUhUHVywdAxcfEtYmmyAo"),
    poolTokenMint: new web3_js_1.PublicKey("4X1oYoFWYtLebk51zuh889r1WFLe8Z9qWApj87hQMfML"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("43ViAbUVujnYtJyzGP4AhabMYCbLsExenT3WKsZjqJ7N"),
    tokenIds: [Tokens.ninjaToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.ninjaToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.ninjaToken), { addr: new web3_js_1.PublicKey("6Y9VyEYHgxVahiixzphNh4HAywpab9zVoD4S8q1sfuL8") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("9SxzphwrrDVDkwkyvmtag9NLgpjSkTw35cRwg9rLMYWk") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.slimUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("8JPid6GtND2tU3A7x7GDfPPEWwS36rMtzF7YoHU44UoA"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("749y4fXb9SzqmrLEetQdui5iDucnNiMgCJ2uzc3y7cou"),
    poolTokenMint: new web3_js_1.PublicKey("BVWwyiHVHZQMPHsiW7dZH7bnBVKmbxdeEjWqVRciHCyo"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("E6aTzkZKdCECgpDtBZtVpqiGjxRDSAFh1SC9CdSoVK7a"),
    tokenIds: [Tokens.slimToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.slimToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.slimToken), { addr: new web3_js_1.PublicKey("ErcxwkPgLdyoVL6j2SsekZ5iysPZEDRGfAggh282kQb8") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("EFYW6YEiCGpavuMPS1zoXhgfNkPisWkQ3bQz1b4UfKek") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.whapiUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("2Y1Jmpkf5wt1X5zcFHNBDoHxqjTXbMJfj1UFtrYQwUbG"),
    nonce: 254,
    authority: new web3_js_1.PublicKey("8K4eRHeyPhBGB9zCjKtyBHoPPZ75zLN64oxBF6GyF4Qg"),
    poolTokenMint: new web3_js_1.PublicKey("ELfBngAgvLEHVBuJQhhE7AW6eqLX7id2sfrBngVNVAUW"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("Bx3ZhEBFedDqCBzuzKVS4eMKTtW1MmHkcMGU45FcyxRT"),
    tokenIds: [Tokens.whapiToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.whapiToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.whapiToken), { addr: new web3_js_1.PublicKey("DRYADMQevoJHDFCYbDQeS4p551MpsDN2d7CJU3LxfNHa") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("HzsECCX6RZ2ccbR3FarRSEfc5rkuETfywXJnRZut5JzU") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.copeUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("DhGTKyT6RVkpvPxXAJodi4Z41RSvQZxV1f5eRvJ5bE4r"),
    nonce: 254,
    authority: new web3_js_1.PublicKey("Hu8AWoRBa7ZaYQFdHQyRHeEZGB16Me86fA5vAZzjVUmv"),
    poolTokenMint: new web3_js_1.PublicKey("HsauTv9s52Zv12eaDuSp6y7BEm4e4BHEyAsbdjyyWzPK"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("JEGcxfGxWJpRkGtvA6J6kEgTBebDz6kxURoeB3SX8vaW"),
    tokenIds: [Tokens.copeToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.copeToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.copeToken), { addr: new web3_js_1.PublicKey("6N3P3etaUYGeBs2C67ZQTDRqHsExNsfj85dDWPwHtQBS") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("36VVz3eY8YmWBGskQVjvGGBfyUKHHCEDBgkFtzMpFqeU") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.sunnyUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("3Ukqqshh3kZ8UPbcYYFSRaeJcsgttcmShtNNn12F1rj2"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("7NP8DTzPdpbQofhNyhLW3j2khutmfy1kuFp2AjaD8rrp"),
    poolTokenMint: new web3_js_1.PublicKey("GHuoeq9UnFBsBhMwH43eL3RWX5XVXbSRYJymmyMYpT7n"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("CCuSVbnnq8SUj7cpPe7BbHLuKanyxfvfrwypzCBnaDdf"),
    tokenIds: [Tokens.sunnyToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.sunnyToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.sunnyToken), { addr: new web3_js_1.PublicKey("F6nCAMYEFxsyRDVonQXLNufXgAHsgAa1Br8DhBoX3KAV") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("HWCTHmQppFSsKQEk1bHUqPC2WLaidgnfTG9MQGD4XKEt") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.grapeUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("6MxUhBLXHCqpdYaFPTmw1D9fQ7zYnm9grZyJvpGiqr15"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("SvWmpVVUkv8cwoRnBQ5Gqt2FFYjdpWLS665gE2ZLNQp"),
    poolTokenMint: new web3_js_1.PublicKey("EorFh8siFyLF1QTZ7cCXQaPGqyo7eb4SAgKtRH8Jcxjd"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("6vWYnRDEHu7kRLbA2dnBgEfbdba72iDMDD9k3munyPaP"),
    tokenIds: [Tokens.grapeToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.grapeToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.grapeToken), { addr: new web3_js_1.PublicKey("686KiYDMMkbredNoWx8yqvAdKSiHuWSG3dnbL6yWYmZp") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("9i14ZKzaDmzKCAQb8hCv4h5GCo2Xiq83JcL7bofk4Ddj") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.abrUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("rxwsjytcEBvXpXrXBL1rpsjhoh78imBn8WbxjKmLRge"),
    nonce: 252,
    authority: new web3_js_1.PublicKey("AcaxutE6Rh9vRxipTLdqinEdRK6R4ayUAAv2bZPh6UU9"),
    poolTokenMint: new web3_js_1.PublicKey("GMzPbaCuQmeMUm1opH3oSCgKUjVgJUW14myq99RVPGX5"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("7pPJGwd8Vq7aYmHaocQpQSfTn3UWYGKUgFkFhpMmRdDF"),
    tokenIds: [Tokens.abrToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.abrToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.abrToken), { addr: new web3_js_1.PublicKey("6FRxhbY7bvSiDojPiqoidjTyDjxaUyCoPQk3ifEdfFbm") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("8aTapFecZRZmC2bTeKr2voHFW2twNvbrh8nWYdXYQWkZ") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.kuroUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("HdeYs4bpJKN2oTb7PHxbqq4kzKiLr772A5N2gWjY57ZT"),
    nonce: 250,
    authority: new web3_js_1.PublicKey("2KRcBDQJWEPygxcMMFMvR6dMTVtMkJV6kbxr5e9Kdj5Q"),
    poolTokenMint: new web3_js_1.PublicKey("DRknxb4ZFxXUTG6UJ5HupNHG1SmvBSCPzsZ1o9gAhyBi"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("5XuLrZqpX9gW3pJw7274EYwAft1ciTXndU4on96ERi9J"),
    tokenIds: [Tokens.kuroToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.kuroToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.kuroToken), { addr: new web3_js_1.PublicKey("DBckbD9CoRBFE8WdbbnFLDz6WdDDSZ7ReEeqdjL62fpG") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("B252w7ZkUX4WyLUJKLEymEpRkYMqJhgv2PSj2Z2LWH34") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.mediaUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("5L2aVMnNsmrnkxU4B25ajb2pR5AJWBRfUa73wjasjyaB"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("HX3JKg5HtboRw9nQRWm47rSJkBHczdcXwBgWASyHi3Wk"),
    poolTokenMint: new web3_js_1.PublicKey("2toFgkQDoPrTJYGDEVoCasPXuL9uQnjvXJaDwa9LHyTx"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("5BkyYnBWnzBWQKnU9AcUaDrmyhjLpAcFxCvVTTnRGyYk"),
    tokenIds: [Tokens.mediaToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.mediaToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.mediaToken), { addr: new web3_js_1.PublicKey("BFAyLvCbMhgF7CQ9fsWWK46jD9mPXfBMDWvXgk5LTgsT") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("7CvBsWsfEif4sAo9dnsf1JKVAfBGcZUVTktqtxBSkgwB") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.tulipUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("BNwrRN23RCoq5MAneJ6Cot7iN2FLtyt9rtcjaVfAXTLt"),
    nonce: 253,
    authority: new web3_js_1.PublicKey("EFZs7veYVdWBHt7RcAPvXQc46gDzccpZTxAcEm6NyXFg"),
    poolTokenMint: new web3_js_1.PublicKey("4SBx8GXu8HhcVHWydQv1vsDdZs3G93XSL9CtMBny6hS5"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("8BiqDTCBQ77qjGpED2was7C4iHJrQx9bXhzRt3Wz9xJG"),
    tokenIds: [Tokens.tulipToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.tulipToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.tulipToken), { addr: new web3_js_1.PublicKey("5CKd5M2nXdPM1TMXxqK6Up6GZehKL5uU9Z9Ytm2sFCiz") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("HjMQnuxjVRodoaAg9WcNXb9TAssDaFNpgwcUUKNjWdh5") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.mngoUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("Hk9ZCvmqVT1FHNkWJMrtMkkVnH1WqssWPAvmio5Vs3se"),
    nonce: 254,
    authority: new web3_js_1.PublicKey("5RyiYaHFDVupwnwxzKCRk7JY1CKhsczZXefMs3UUmx4Z"),
    poolTokenMint: new web3_js_1.PublicKey("H9yC7jDng974WwcU4kTGs7BKf7nBNswpdsP5bzbdXjib"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("FWKcKaMfaVezLRFr946MdgmpTZHG4A2GgqehAxjTyDAB"),
    tokenIds: [Tokens.mngoToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.mngoToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.mngoToken), { addr: new web3_js_1.PublicKey("J8bQnhcNyixFGBskQoJ2aSPXPWjvSzaaxF4YPs96XHDJ") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("5yMoAhjfFaCPwEwKM2VeFFh2iBs5mHWLTJ4LuqZifsgN") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.stsolWstethPool = Object.freeze({
    address: new web3_js_1.PublicKey("B32UuhPSp6srSBbRTh4qZNjkegsehY9qXTwQgnPWYMZy"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("EtwQJxu8wih29vMpdTa74K9W9tgtL4LT6hbWBkhHwvU5"),
    poolTokenMint: new web3_js_1.PublicKey("Eswigpwm3xsipkTqahGi2PEJsJcULQBwZgxhQpr6yBEa"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("74b9j23njRpt3PYPxoze2XS29ZgGmucziLB7WrsDpBdD"),
    tokenIds: [Tokens.stsolToken.mint.toString(), Tokens.wstethToken.mint.toString()],
    tokens: {
        [Tokens.stsolToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.stsolToken), { addr: new web3_js_1.PublicKey("CeSEpgqc3zV8xDr7Q6PiwJju6a6e92wpAv7Kg6QyFfQB") }),
        [Tokens.wstethToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.wstethToken), { addr: new web3_js_1.PublicKey("Fb3XpEJgghTURUGd1wphWr93ruX5egnesfdZtjWCxJFy") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.sypUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("5DnwMqYAGEKekYXJdN8Bue6vN1p5zrEnBpmd53jEK61S"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("4NfadURWeSDPJBGcKQRt39mPhbG9M7EJx6FZDwwcFB9f"),
    poolTokenMint: new web3_js_1.PublicKey("qJxKN9BhxbYvRNbjfK2uAVWboto6sonj8XC1ZEW5XTB"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("57L2bEFecsAv4jnaM2PBaeAVyPZEYtTmXBi7eaG2xWXw"),
    tokenIds: [Tokens.sypToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.sypToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.sypToken), { addr: new web3_js_1.PublicKey("6d19CQA1FP2MLLAzA7XoZEc9Agc32FaKUS175UVWLGtv") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("HpPnUHyo19VjmXbP6FbbKXu7WQCUEn6h7be76fZdHVmf") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.stsolWldoPool = Object.freeze({
    address: new web3_js_1.PublicKey("CqwyVxWeaiikQ3VhvEZSEmupmG1Wmc2FeaUjsCV492Sx"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("213QoNt5dR56Ye2sx9cwPwpR3NpJUEStQXn8EbbWKkfJ"),
    poolTokenMint: new web3_js_1.PublicKey("74B9aMS7SA832xKngt5VLKmWAP3pa3qkUzWncTmQSsGF"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("D4kH4fcwwDtGMj4LpcynB977YVnmvDUcuDQoo5sqAgRz"),
    tokenIds: [Tokens.stsolToken.mint.toString(), Tokens.wldoToken.mint.toString()],
    tokens: {
        [Tokens.stsolToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.stsolToken), { addr: new web3_js_1.PublicKey("GDprNAcXeR5GVGnCtkS5UqyPGMm2Sy5Lk15qqN36faMT") }),
        [Tokens.wldoToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.wldoToken), { addr: new web3_js_1.PublicKey("VCgdcsExfmxUDQwusLP2xqZ3ap7VuYyQMMHDPSva2hx") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.whethSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("FcEro2uFpHcb7Z785CBs6q12KMJqUJKa8VTXPi4TTBMf"),
    nonce: 252,
    authority: new web3_js_1.PublicKey("HMxZz8fv2uR9suzAPRbJGNB3wZL1eT3eKL3cpYWUbM8K"),
    poolTokenMint: new web3_js_1.PublicKey("7aYnrdmdCRodDy2Czn6keUquUhjF1jPEmfwZPh488z8U"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("YCVJDKdHNi1mhJtWz7QGbBRreMmw1soeipz7wZbQKEK"),
    tokenIds: [Tokens.whethToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.whethToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.whethToken), { addr: new web3_js_1.PublicKey("3uQytDKNd5H6XK8FhTei4wCUmj2eTbLTbiLAtWk2SmbA") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("GR3g8Wej3jmv92hYM1t22kaXog2xjkGjQ7V1XzLd1efT") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.whethUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("4reGGLbesqpAeAZdAJv9hhgA2tgj45oGcyRuEvhATdMm"),
    nonce: 252,
    authority: new web3_js_1.PublicKey("8uLtzZ1iTLTCPsm3b4QttRmDXcFjhVHRuMS9VTVEwo7E"),
    poolTokenMint: new web3_js_1.PublicKey("7NPtjjAP7vhp4t5NCLyY4DY5rurvyc8cgZ2a2rYabRia"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("AVw52spXtzFh4bb5ghhpJaDbLx3XWuY85eQNDEo3X1yN"),
    tokenIds: [Tokens.whethToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.whethToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.whethToken), { addr: new web3_js_1.PublicKey("9KpjcpKwhoFPbixvKDfcAhBQcVXk1CSBTGsJdzojDPRv") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("5HaG31FQS4McBVcHxVfwaKaWXE3VCGqvJ1ZDkTxs94cQ") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.mndeMsolPool = Object.freeze({
    address: new web3_js_1.PublicKey("vjHagYsgZwG9icyFLHu2xWHWdtiS5gfeNzRhDcPt5xq"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("3HWcojnC1ruEMmsE92Ez1BoebdDXzYQa4USaeWX7eTuM"),
    poolTokenMint: new web3_js_1.PublicKey("5PHS5w6hQwFNnLz1jJFe7TVTxSQ98cDYC3akmiAoFMXs"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("46mdANZ2DCA2sTFchvD7WwbffbLQa4jCFkkRL23WuYG8"),
    tokenIds: [Tokens.mndeToken.mint.toString(), Tokens.msolToken.mint.toString()],
    tokens: {
        [Tokens.mndeToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.mndeToken), { addr: new web3_js_1.PublicKey("2LferrWvYWtHFfdkmixzt9g3aKa3yBNfgbRrP1CcWMMp") }),
        [Tokens.msolToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.msolToken), { addr: new web3_js_1.PublicKey("GimsuZjYqMXM6xK6S3e9JpGvX6jaMPuNeR6s2piDESmy") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.wagUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("B76e3wtCDTKBgKQjvx87EBkDLPGcCY9w1SGiwjD5kaK7"),
    nonce: 254,
    authority: new web3_js_1.PublicKey("FRUmMZDiZrDrwioiUYi3tdqF7SEBeT219bBu54PGxoCo"),
    poolTokenMint: new web3_js_1.PublicKey("Df6XNHMF3uRVZnz7LCEGiZVax6rXgz76owtVkBHEjSb6"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("BCuRKfsM99LJFCchKUBLBZ26UuziDewJDRkkKMwx2qnd"),
    tokenIds: [Tokens.wagToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.wagToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.wagToken), { addr: new web3_js_1.PublicKey("8voSogytL9jLgE73GS3WuujBinKFRQJjvUFsVGYexWZd") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("HEP7mACuN13cT95eDAYTNjgwriqJnMQVhnyRctqnBRe4") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.msolUsdtPool = Object.freeze({
    address: new web3_js_1.PublicKey("Afofkb7JTc32rdpqiyc3RDmGF5s9N6W1ujcdYVfGZ5Je"),
    nonce: 251,
    authority: new web3_js_1.PublicKey("8vrC1FAnW6hQMwJuU5waZdRrBbDJTULqjpdc4GjDtKR6"),
    poolTokenMint: new web3_js_1.PublicKey("9cMWe4UYRPGAUUsTkjShJWVM7bk8DUBgxtwwH8asFJoV"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("7GPvi21QbwMyBoXU5Zqf8VhnuEh7VH4A1SRPgHJ36eE7"),
    tokenIds: [Tokens.msolToken.mint.toString(), Tokens.usdtToken.mint.toString()],
    tokens: {
        [Tokens.msolToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.msolToken), { addr: new web3_js_1.PublicKey("RTXKRxghfWJpE344UG7UhKnCwN2Gyv6KnNSTFDnaASF") }),
        [Tokens.usdtToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdtToken), { addr: new web3_js_1.PublicKey("J15KntYr6iout4ce2kcD2QEdkVbLN4EHHFLfCtke3f6Y") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.msolWhethPool = Object.freeze({
    address: new web3_js_1.PublicKey("A71DQffTzgxBSzXjPL3tmf8XXTNtS5mR2D78Y8rmV2hk"),
    nonce: 250,
    authority: new web3_js_1.PublicKey("FPWpe7QEQnDMivnHksQW2uvcw9tvX1oxejKBX136WRkr"),
    poolTokenMint: new web3_js_1.PublicKey("5qoTq3qC4U7vFxo3iCzbXcaD1UEmDeCD63Dsuoct71oV"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("FSqUYVzF3XZzLcnj132eT6ed3bK95G1yG4MazcHZi99Q"),
    tokenIds: [Tokens.msolToken.mint.toString(), Tokens.whethToken.mint.toString()],
    tokens: {
        [Tokens.msolToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.msolToken), { addr: new web3_js_1.PublicKey("Fcp5u8bL3V24MXjA4noSfMpcEAP2vSj1WTaA1ZNxACZL") }),
        [Tokens.whethToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.whethToken), { addr: new web3_js_1.PublicKey("DuBCBX3y2FjDWUn2ncK5EKQh229JiJ7HTCjYJhNC87K8") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.btcMsolPool = Object.freeze({
    address: new web3_js_1.PublicKey("8DRw5wQE1pyg6RB1UwypGNFgb2Pzp2hpyDDNwo76Lcc8"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("3X1aLdyvcQNc8TvBMPiucMsRCnGMBnGsjJHpZEyCf3pn"),
    poolTokenMint: new web3_js_1.PublicKey("8nKJ4z9FSw6wrVZKASqBiS9DS1CiNsRnqwCCKVQjqdkB"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("AqiLHbUAy4UWWKGVVgbHsaUVCMg1zemNkgsYBPSirT92"),
    tokenIds: [Tokens.btcToken.mint.toString(), Tokens.msolToken.mint.toString()],
    tokens: {
        [Tokens.btcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.btcToken), { addr: new web3_js_1.PublicKey("6D3sxC6yEe84FUnF5Kpbgx6gN57N9poJCKAtrCeCWdJo") }),
        [Tokens.msolToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.msolToken), { addr: new web3_js_1.PublicKey("EPoVJLhi9QtVPVo8n31M5k5Knvb48j8zbYyRrUbrHwC5") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.ivnSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("CFCivUWXBuULVNfJezj1fAhX6hdwVFi2BsCtpu6m96bR"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("JGhNs5r7YNnJokzzXZWE3REKV8x4GiUvn2xSg7XGg59"),
    poolTokenMint: new web3_js_1.PublicKey("DfgCnzaiTXfPkAH1C1Z441b5MzjjTCEh134ioxqRZxYf"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("HwwgrSjJGFBtRN8h2daWnVLBciwoo79wNeKi6b5SZmE2"),
    tokenIds: [Tokens.ivnToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.ivnToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.ivnToken), { addr: new web3_js_1.PublicKey("C5yDeB3jBz5yZPa6FgP6b7HNoFxLP63Pyzpaosnkikis") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("CCm846T6xj9VAhSAifuUJAXYCR3kaGp5KqhXFHCaeWUh") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.larixUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("DaNULZAv2VyLk75pW3QD5szVzx5dT6iNvoih94Bttqf5"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("FUVkG7fM3i8T49qV7WsJd68rBaYKvqTkAQCdftqTWWNj"),
    poolTokenMint: new web3_js_1.PublicKey("8sfThep3io4gvcGeuoAg1Rs8GDwKJjtcdAFHqQSSNAVE"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("AVb9Bvu4rjFYNCHygEnAYCjwnkgtC8C6UmJ7at3dsfdz"),
    tokenIds: [Tokens.larixToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.larixToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.larixToken), { addr: new web3_js_1.PublicKey("AAjjSJsZM3AKK4h9cbGTHkquEZ2fWjgo9A9Pmrj2ynTH") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("82Fs8dSpMxPPfN1ULsXGFREHWz3JizREpTxwz2MaZ1n1") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.prtUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("CRm5uRBsVmUVHVqKfCCvCUX1RLUkjfcBWAeMQ5D9VuCM"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("A9eqdCXYys7jeoroMFEnkGLoYLa2q5gGbg8RSKHkR2ne"),
    poolTokenMint: new web3_js_1.PublicKey("6jCERp5hKj37PCXP3VTjCDJeoPuSpnMDMz5A6jWQv3yS"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("FHVidN2ZdGnVaCjYwLjLXrimPbVsaqsUEEiGcVZ6WAPq"),
    tokenIds: [Tokens.prtToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.prtToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.prtToken), { addr: new web3_js_1.PublicKey("3oL2GjsUnQLjHw77p78CsRr7t94AVrtsCnW5uf6NYQ3g") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("2EiVwvsH5cvyk4W243zKoywkaEQb9Bwe9WGphRgBSqaP") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.jetUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("ErWwp9HKjk5ZPLDt8SrHKH5PvSKTwFDdFo5E3zDuE5Be"),
    nonce: 253,
    authority: new web3_js_1.PublicKey("GYY1t5d4pZnJC4rMXGY9yKMyCzLqxRqbtSguD2KkxghH"),
    poolTokenMint: new web3_js_1.PublicKey("GBijunwxa4Ni3JmYC6q6zgaVhSUJU6hVX5qTyJDRpNTc"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("6NhybmW42rdWj5TcobNKQT6JaZispgngcfTDrCsgVq4Q"),
    tokenIds: [Tokens.jetToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.jetToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.jetToken), { addr: new web3_js_1.PublicKey("GEtZSc8188t2cCAv21UGCyjvxCeyU5Co99GtRtyTkpdh") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("Bi95f8H7o7zHWuYysxDHEubPv4c3NhsHWhaesXJu91NC") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.stsolUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("EfK84vYEKT1PoTJr6fBVKFbyA7ZoftfPo2LQPAJG1exL"),
    nonce: 252,
    authority: new web3_js_1.PublicKey("8PSN1CQxfyZ7T4sM3HM3RAgF2Y6VCf4tKSc8xY73Tnq5"),
    poolTokenMint: new web3_js_1.PublicKey("GtQ1NT7R5aaTiST7K6ZWdMhwDdFxsSFvVFhBo8vyHGAq"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("CJhL3UGesECFt6fvLB3csrGMuHf3M3G78pUzTopUiV8T"),
    tokenIds: [Tokens.stsolToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.stsolToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.stsolToken), { addr: new web3_js_1.PublicKey("9SEBxqhP8sTAzmfiQfCPim1MqQXuDPb6fkGzJF7Z339i") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("G45yhM5mZ5RXZpLxGWLk3PVzdAp33z8aH6F9mLW8fQj3") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.wstethUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("v51xWrRwmFVH6EKe8eZTjgK5E4uC2tzY5sVt5cHbrkG"),
    nonce: 254,
    authority: new web3_js_1.PublicKey("3Kk8rpjxpc9qv2pJPr1CbmyQqrTDPntpryXActLogQeD"),
    poolTokenMint: new web3_js_1.PublicKey("5a6Y1ephcbKSoyLMQyD1JWbtqawCy8p2FtRL9v3zhaG5"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("ACKiRmbiMaPEc73pz4dVMuJGPaa74Vx9sfYADjnHuzvo"),
    tokenIds: [Tokens.wstethToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.wstethToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.wstethToken), { addr: new web3_js_1.PublicKey("5c4tzhRVaCxpmu8o3HrEZ8PWBDKSR6QNkBdQrUo9oe3e") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("AFNaWHH7ZGFjB7y7jmPM7jVs7QBAciffu7Z5tZidRHPR") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.auryUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("6HSguUukDH9zqJBm6oAAmFkg1WK9dJ5iLgnppTCM6jHm"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("9T1koZp2PNJgspcx3G22yLiChBUfYzAjs2dhj2kgw2LZ"),
    poolTokenMint: new web3_js_1.PublicKey("6mJqqT5TMgveDvxzBt3hrjGkPV5VAj7tacxFCT3GebXh"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("JCqbv7r3mtYhzruNFjc21X14fndDVBLMiaNQrsHVpWui"),
    tokenIds: [Tokens.auryToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.auryToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.auryToken), { addr: new web3_js_1.PublicKey("413s6jiRbayD9didA4VnY8kQVgVBgkYNpYB2tyNf8sbh") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("GdPeogNxRWAZtUj7ZHc7fUpBuGHJosdbukiT2krFtXm8") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.avaxUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("7c2CLgatf2TU36PgpS65WLmvWk94rmaHVf1Z1peZ7mcA"),
    nonce: 251,
    authority: new web3_js_1.PublicKey("Mq46N9EknnxHL9fRkJhS4Eg9YXRifHiWzFJTD11ePWC"),
    poolTokenMint: new web3_js_1.PublicKey("Hmfrtmo93DpSDmVNLQKcBS5D1ia5JatiRSok9ososubz"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("7JH76Kw4dHyC5szRXkx6MFkJ3BEViodfNy15uFJst1cX"),
    tokenIds: [Tokens.avaxToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.avaxToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.avaxToken), { addr: new web3_js_1.PublicKey("5rU6M2jAXQMSmgrsn14BPoVVhoBdCU6y5cP7XMjN4ZYy") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("D28rzq246bcXBrYiCeALY86y8NwvCUmuJGNggvKsh4WR") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.fttUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("8npdwWX2BR39kcFLtTJABbcjNq7NWQvipfqxgsfk9mTX"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("8zU13KiLb1e87skt4rf8q1LhamEKKecyu6Xxb4Hqnm7e"),
    poolTokenMint: new web3_js_1.PublicKey("FwCombynV2fTVizxPCNA2oZKoWXLZgdJThjE4Xv9sjxc"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("C8D52rGuZcsBENhWtR9aqJVRU62cL7jyyEhxesKwc1k8"),
    tokenIds: [Tokens.fttToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.fttToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.fttToken), { addr: new web3_js_1.PublicKey("SasuKsATA2ATrMfFfSJr86wAGVgdS69PkQT3jFASBB8") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("3wADiuUqoakdoYYYxKqwoA4VN3uWZy5UwvLePox1mEsK") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.rayUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("2R2VhohRc5WoNHtRdwnjovAQaZRAmr1DE3QFW5jfgb6v"),
    nonce: 252,
    authority: new web3_js_1.PublicKey("9B9ZcYT8jDQ6XLe6gRLDCFv1zz3uHVKdbZT9DFhsYSQW"),
    poolTokenMint: new web3_js_1.PublicKey("4cXw2MYj94TFBXLL73fEpMCr8DPrW68JvrV8mzWgktbD"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("HURhvCRsrwwR5TiG75Hn274WwL76kaKgjgC6n9h4FEHj"),
    tokenIds: [Tokens.rayToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.rayToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.rayToken), { addr: new web3_js_1.PublicKey("9ASj9zDg7cT6wtvn4euSUiZte8yN2U3Tn6cTVZvMHbU7") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("HGTxSWbb62nxk4oGkLkHUvrEzR5D4GKYRb8ZDcA2dpki") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.slndUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("GhosXH9yZPxqSyTHqJtXQt6w65YfiGjKXcEXciX1P3z8"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("ChmSHndtXRsYnFjYA2F7yRRsnyZ8kCpxSogTsCUgCEsh"),
    poolTokenMint: new web3_js_1.PublicKey("F59gkD7NnsdJbFKrRZsiBC8PAooN4c56T8QmahfW1iXN"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("GMipxN5pu6F6wwUrq6RhpqgcMjcKLTsnDTeNFCuUm5n7"),
    tokenIds: [Tokens.slndToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.slndToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.slndToken), { addr: new web3_js_1.PublicKey("9RcdfprKxbTzp3erTJMwXKznNCLmbCUaKhibaTMXhToi") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("6wEh8r3Czc3nKkN6JXobShnLG7ZqA5Y5DREGzkirYR36") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.gofxUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("C3b5AWQJiyar5g8EWu75zgDE26F55ZJWpqtFVCCVDQQQ"),
    nonce: 253,
    authority: new web3_js_1.PublicKey("3SphkwoHx3d13Eu9RehVVg4gGMZv7FEaDXvPqWbQF9bm"),
    poolTokenMint: new web3_js_1.PublicKey("7vnps4VE5RTGAr5fmPZu7fSrk2VnM4Up838grZfqmxqE"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("CT95CSNqi4nttNW84dDuA8Um7FLAC52PVUvuVRKeCHVK"),
    tokenIds: [Tokens.gofxToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.gofxToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.gofxToken), { addr: new web3_js_1.PublicKey("5AhPVbtyiTV3SiNRJuq5z9xeaqqwoHQWqohR9HvjJkKS") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("6mtcbtTAadVEdnWJZmsq8woqLea7ef7k5WumVXSHr5KQ") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.woofUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("HY6iq1dp7pHwstfmLFu8m2iEvRQtjX3N751jcN6KrQXU"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("8JuHyxYBpemmryQq4bcA1GTuKaub9JJuLPoNNJpwX9aP"),
    poolTokenMint: new web3_js_1.PublicKey("9EjcYfHcG8f1mccpHyaAwpoxaUPiheC6KgLQjyD9aTb6"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("886Yu2fd1x8xpb4icdrhxZemdD8PN9RLdrq6Mn89wR4k"),
    tokenIds: [Tokens.woofToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.woofToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.woofToken), { addr: new web3_js_1.PublicKey("8ju56eRfs9wg3GtoSFVoQoR6NnQn6gsWr6FkQyZ1EeBg") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("5WcqVktXr3Rr78MGGfcuwgB6azoN9EDCZLP4werGnfi4") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.sdogeUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("8GoFKVkoxPyQKWXhoXs3ycGmp9rXYM8hz7eq1EUM1MJe"),
    nonce: 252,
    authority: new web3_js_1.PublicKey("DSuxdCkHQy6rAjFsL75tRu2UpHVQDoYsYFeZt15sVDYL"),
    poolTokenMint: new web3_js_1.PublicKey("CHTKUJGYRtBDqnxCFjxe5KEkZgxV98udbhuYYyzGxup5"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("2gCRgQEySFTXA5v99vRUJHAGhQPTPtHx16Rdgipz7Q1y"),
    tokenIds: [Tokens.sdogeToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.sdogeToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.sdogeToken), { addr: new web3_js_1.PublicKey("ABQfmExcxJt2wE9JeLUxvhkpA2VkoQVvWKDvfusjq226") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("EDBXkzwxu6UXqBDnzb9AJ6Eggjyyct7SmYVoR8PYJkHd") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.catoUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("GumfURfQvPaJ2E5ueCEKYJmymNQbV34gU9TmiKZYRkiv"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("EjoLNSDggfWWE7BxwoL4tJHBEg1cFpdiyKeYTYCec2o2"),
    poolTokenMint: new web3_js_1.PublicKey("55r9txzQtmjTykmTXmBYZCVMg5z9squB8b5cSw2AhxA4"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("F6xCTe256cA6HTX5CYBkDtXoruHvjfbxeHNeqR9kR7oJ"),
    tokenIds: [Tokens.catoToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.catoToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.catoToken), { addr: new web3_js_1.PublicKey("AGNHgSQuPd4EqjLTLJrXEVb3KCkjRxGVDTaag4drV1XX") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("FESKk2kj9oqdYR4dcaP4LyqDyWZt3NttgypRVFoyUQNs") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.oogiUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("9tK2LaapwjxaUmfcAzY9zgC39M3wnaFX558y2Bb4oxWG"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("EGuBsx6HAgAtf1ogzF1uXTUQgwRex61hnhvuZcMwQKUJ"),
    poolTokenMint: new web3_js_1.PublicKey("DSiHyHDn96bUQSZtizyCRLcQzrwohZeMpVu8rYJN1HzG"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("Acom6ebnmbFKQk3XeX5VHPiz8bd7kzfpUMsqHKJDJnry"),
    tokenIds: [Tokens.oogiToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.oogiToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.oogiToken), { addr: new web3_js_1.PublicKey("GgfTGZ5DnAotnXKFM86vqffKQZ9nGgHaX1PDS7RTcKjQ") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("A3rzsPGtqowjKXfscYrPo1jvv2EVYpJwXQPGKxgvvStf") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.sonarUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("Dzp3ZWyUZGXZYWfodXdLdXfiW7gwVZBdWBwQ28eB6cTH"),
    nonce: 253,
    authority: new web3_js_1.PublicKey("3HJw5YCXr69DzUcLSif4BicrMrXjC2jrEMpjQhQ3AwmB"),
    poolTokenMint: new web3_js_1.PublicKey("5MvQHx8eftU39JTucFsT315JFnQASuDQg3FqxTw7xcvN"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("J8tqP1N2fEgMTGhX2PTgRyj5ZFsFWsXneJpXyRjekKWA"),
    tokenIds: [Tokens.sonarToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.sonarToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.sonarToken), { addr: new web3_js_1.PublicKey("DxGfntMLqAjtB287GkPPcfotUGcWdhtpzR6KukdBo39H") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("EVymxW4gFtxw7qjMYGFq4EupxHc1RteffwETa5MKTDPR") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.aptUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("Fg3UabVqnfycMtkiTVoaia9eNafehtT9Y4TicH2iBtvK"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("JDEYn1JsacdxoB4v4mbctFSVrSUPttacX3gxWphFHJKZ"),
    poolTokenMint: new web3_js_1.PublicKey("HNrYngS1eoqkjWro9D3Y5Z9sWBDzPNK2tX4rfV2Up177"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("41H5mWwsZKewJeV4wWiNjQ3U4VYBnwqCpzvAWt86baHd"),
    tokenIds: [Tokens.aptToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.aptToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.aptToken), { addr: new web3_js_1.PublicKey("636crNdZTf46gFUKuedaBCZDBMLahf7KGud2LyTMskU5") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("DGEYFkEHyiuHWtHeCGiQGn1JbkGHqYrNwaP44miRbgxu") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.dflUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("59wJQz25rr38YnD69eXsntbdE4LB7m39KjHqZUUaoyZ3"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("E2kEN96wSW5bYML8qYLgxKM4pvdLjqhCRMyCvqYyVrXt"),
    poolTokenMint: new web3_js_1.PublicKey("AWrtTWG4Zgxw8D92bb3L3sQtGLD3zDztMPWsXSph8iBP"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("bZxTKZNF5gwnuXQ3xt8huUtsLAyFoh2NnQwmDDgbVxd"),
    tokenIds: [Tokens.dflToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.dflToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.dflToken), { addr: new web3_js_1.PublicKey("EXZdhy56TjvArQRfDakjuQdT7DffwFEYdY5F39vn3Wbr") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("Bhch1NY65RNA8uFaj2s8Fzxu36SFMQiniyZidq4jzsTt") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.dflSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("GxkXvW6dJP3KUNWuXi64V99uRsPFEFnuuasNTq6fvZfP"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("H196f95DHGfhNkF3W9h4bjBqpL8g3qesEENHRsDqJshj"),
    poolTokenMint: new web3_js_1.PublicKey("9Y1vPaAsMz8X65DebMMnmBjbMo8i4jh4mcgiggZUUS3M"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("7L7kjeEo5oE9SCZ9vacmyJvfKKmjAevVpdktBGyxBxaF"),
    tokenIds: [Tokens.dflToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.dflToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.dflToken), { addr: new web3_js_1.PublicKey("BpjpdhuMkPPW3HPx4U9tRmNAXdUeb49jxwFGy2PrSNCp") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("HcXqJthqq1UeGHA8xPeDLnWVJFcndoUnKnpULRCjyTzi") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.frktUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("DXNct3MfHDuhKiXHY3AUXPtj5sQVY3feuDxkDRfCw1rL"),
    nonce: 254,
    authority: new web3_js_1.PublicKey("JBCdhgkmW6xHdZUZdKdf56qov9LtHixf47JpoCWm4qcn"),
    poolTokenMint: new web3_js_1.PublicKey("FnDxJPNk7pPmGHUbR4XUHmHevrkXHdna5D3sQKcAtjBL"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("DRn2F5MsWzLihtqsheuJmugJuHQGDR23cvqCLy7eCucw"),
    tokenIds: [Tokens.frktToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.frktToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.frktToken), { addr: new web3_js_1.PublicKey("AUSeFBvVtLiZRppRu8Uvd8NjzCkQzaCi5Si8WWyko9p") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("C3RzSoNiBfTNbAZMyyuV2aLfwGQRyjvkjL3pf9iuvU3R") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.tttUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("HD6pqxyqj4S7eS3orAyQyan5RpwpMPjKEDWgTyYXcfr1"),
    nonce: 254,
    authority: new web3_js_1.PublicKey("Gh1QqgpKGd6zhicNvBh1VLbycpoq6P7QBCZT8MdhWzN1"),
    poolTokenMint: new web3_js_1.PublicKey("FGgP1npQTsC5Q4xBmQtNYSh51NKqNwdxBZy8JCo3igcu"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("AFjaSrdgNJsFDSQTDbkBoBMLHt2qCt5GuPHWDTUV4nHt"),
    tokenIds: [Tokens.tttToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.tttToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.tttToken), { addr: new web3_js_1.PublicKey("HbrvwSnL11K5EALN21FdjmWvG16VNcq5iyHEKjdHtyJe") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("CQvyngoqxCdgFQYjbT8EKved6hTDzmzdp8Xxxv5FkXmd") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.upsUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("G67ZSkxE5N67x6A1WhcTaHiFHqRtRQUb3QHwjtPge1Xr"),
    nonce: 250,
    authority: new web3_js_1.PublicKey("Hj3vg6P2DBfJ6hhvCoucaGvL9cwsvUgeJWZRzuXTZ6hi"),
    poolTokenMint: new web3_js_1.PublicKey("E1U63VXhNiWoUkVvjrfLDdV1oJrwE6zLde3bohr6jCqz"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("Cu8SFyZKsHcUYhxECpt5Wr97CeHSXeDyNjs9kyDWtVJm"),
    tokenIds: [Tokens.upsToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.upsToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.upsToken), { addr: new web3_js_1.PublicKey("CNw37MJdV6gBChtEtUgGrx3zWXz8t3bYxD7u5axPrwdJ") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("5iLVx3LwhWiqjaRyLaiVNsLbYBqy48fvs2sTY6q96nNy") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.fantUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("95aDcNzL8tL17jzHAUQXnRwuCmYBWKUr4xfjV6AMVJY1"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("GeTZHdp1sYgX6J73CBeqS5pjb7xfY8D9Rzf4E615oGMt"),
    poolTokenMint: new web3_js_1.PublicKey("GjG7JjTQfQpDxw4hWx4etP9oTaYCuCbPjsU8WaUT3xHB"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("AdSQYnzmJ4j2hbqT5aumXAf4a3T2AxmGHbCgHER8rf6K"),
    tokenIds: [Tokens.fantToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.fantToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.fantToken), { addr: new web3_js_1.PublicKey("CyLaJ6Y382czGE75yFDg2fneKni6PjZHH9Jh4GZN2Nyo") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("7wHMKRPVsacb3JcBsUxLKLZkAPbX81VNc6Z6J9uvJ2J8") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.blockUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("ExeW62iy4xEUo5b5XnDru5oQCDRDUmBaFNqE4V4u7uvm"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("2fSbre92FnmkeUP5iT7jdFKNB3nfx5yQ5GEW2mjVigMi"),
    poolTokenMint: new web3_js_1.PublicKey("D8WjqtwC9CzBrQKfSf2ccCHFQuPYwyLv5KAy8WjT5vnf"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("BGSDZoQyH8QGJDvQ8toms4Pk4HWHaFEXSUvJ3AAYXxmF"),
    tokenIds: [Tokens.blockToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.blockToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.blockToken), { addr: new web3_js_1.PublicKey("7uJ5SFRGzrnbspUThix8M2wFJNnS8vvSKbCEhKmqMjNm") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("4e5ZVp7u6YWEibveHscZmbmHpujtbJNUHFj14tqtAZKv") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.runUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("9j4FdbK68xUDQVynTWHbNzBRAj7Q7Lywiqb82en4JzZs"),
    nonce: 253,
    authority: new web3_js_1.PublicKey("9RUMuXequVtf9UVYHoKJxwWfqyod478nBfX8H3DvSaKV"),
    poolTokenMint: new web3_js_1.PublicKey("34Ppq6R8NfYBwWwPY4cBK4Afyb8hHaASQFukCzH6cV4n"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("pPH4mFHFu1c3ZR59Zaun5jSCBRn6pU1GWSoVHD4LKUs"),
    tokenIds: [Tokens.runToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.runToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.runToken), { addr: new web3_js_1.PublicKey("tg7YMVac4S2ZpVrbaDqrZgURyTBBrZCQUkQ6Fn6nnrX") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("G2fZDZKa5Y599xzqP1jVQ3EMCfiG6f4dMS6G1f7BKoQe") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.uxpUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("eKuTPdMHmnVzLP63oWwdUH6bBAVcdvBfg4zvH2nWWCj"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("DYwCP16u5pmLMspCb8tdTQaaF2rBvM2qvgzm5uYvPUHT"),
    poolTokenMint: new web3_js_1.PublicKey("HjR8JgqNKQVMvdryqJw5RJ4PCE9WGk8sgbEF7S9S3obv"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("HoaPae92LswzSbvnVbdkBAYFNanrvK3kFvWtYyUhpC2o"),
    tokenIds: [Tokens.uxpToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.uxpToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.uxpToken), { addr: new web3_js_1.PublicKey("BWL9ocg8VEBSfrS7zjUBUidE9T8p95J3p5wF6C4Vaqrs") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("GQC4fM5E6dr9MsXvtMzAR4Z8iCduhyFvYCLdMAAHGCM2") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.btcUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("2dwHmCoAGxCXvTbLTMjqAhvEFAHWUt9kZaroJJJdmoD4"),
    nonce: 253,
    authority: new web3_js_1.PublicKey("BwJ1vMtJiBy7dJaVToR1KUwVbBsGUTNN4QdKVSf8EEh1"),
    poolTokenMint: new web3_js_1.PublicKey("J3kvcay3N16FBdawgnqoJ9v9p6XCvyCLE2Z9F5RLvGkj"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("HR7c67SkeLvCpHrVSu7MiiAERQh6iD1NrCJsj3kWiZnK"),
    tokenIds: [Tokens.btcToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.btcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.btcToken), { addr: new web3_js_1.PublicKey("D3Wv78j9STkfJx3vhzoCzpMZ4RqCg8oaTNGzi1rZpdJg") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("HMFLg2GtbWSSEe92Vuf2LQdUpCacGj2m2PwvMqzwQFNi") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.mndeUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("2yNwARmTmc3NzYMETCZQjAE5GGCPgviH6hiBsxaeikTK"),
    nonce: 253,
    authority: new web3_js_1.PublicKey("2ZzxuHxvPQtPU48Tffs8LD8sy17rgjBRQviRVxQ54fR6"),
    poolTokenMint: new web3_js_1.PublicKey("12Uj74zgUUoBe4yeackwQ4qYtFMr9fk1xL6q5Nha6t2N"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("6AvWhLSuAqTWUdpo4jF84s4gfgAjbRQv5vLf7mYNCgd8"),
    tokenIds: [Tokens.mndeToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.mndeToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.mndeToken), { addr: new web3_js_1.PublicKey("AfF3SJFpyfU7iw9KtrwPyi6corJbyiC24JyVis7oxNVr") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("FT4GQqs5sEvqhsWm845VF1vmHjdQkrB1jdsGPJbzB4oB") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.chicksUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("3abwmh8LDUsXMoDgNzZLq9QvKqKbhYND9N5aXh9yz7Dm"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("HmNqp8F5Bp16dUTUihhL3TnyQxfzJ2GtTo9VEQx6bjB3"),
    poolTokenMint: new web3_js_1.PublicKey("71CBZeJ4tw38L9pSPoCz4fRsuWE64Fipyzotte7haoCS"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("4zRJg9Kod7bd9tR3mxQhxzAQUPqQmUGJbmrWpQ4XDGT4"),
    tokenIds: [Tokens.chicksToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.chicksToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.chicksToken), { addr: new web3_js_1.PublicKey("84Ha1dXH8YAWXt3AC15RstnUCoWT3hg24tUGD1GtqGSm") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("GkonWV6urvzsnKwVmPXe89fTX1zBfv4xrAhx9JnxV9Nq") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.onesolUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("CKKuMECwW75NBNRKtYJz1svCycRHt4KpXmcNnHXiHY73"),
    nonce: 253,
    authority: new web3_js_1.PublicKey("2TSCMpjN6ToLJy8baiFTc9UdB1PuHFsr24mos98Zp57v"),
    poolTokenMint: new web3_js_1.PublicKey("6MF5CHWAj5mS7FhpxiKz37CzR2eYTu236XpBKKMXCrGg"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("9Rw29Mvx6b2RMAbdZoqs3gBRMcfYjBYRyiegNZoaYrWS"),
    tokenIds: [Tokens.onesolToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.onesolToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.onesolToken), { addr: new web3_js_1.PublicKey("2meoejmWQno2q6cbFMRytu7UMqMA8FTx651feSUHfTtC") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("n5CtiZDLm2xNxVU1o4KC98dNGiFb1sbuCazDihahbMy") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.wmpUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("Cqy7PRGRx2QeTLZM3QmLGN68uHxEd9euj2eEeeZWnuvQ"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("9vkbzRnjd9qpmunBUHqS8Fnt9DUEX5akJPm9movtfNxZ"),
    poolTokenMint: new web3_js_1.PublicKey("HDgxKmiA8Pv82fNguhVeMkZqQkos2YksFPoP1KttWxX8"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("Bfr66xExhYijJzc732abX7znkFnj4v3otQDFbHaz7RkK"),
    tokenIds: [Tokens.wmpToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.wmpToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.wmpToken), { addr: new web3_js_1.PublicKey("3WubbpV7W82H6FERR62Bd8Z4fXFGaihtBNqnT1zkGr6f") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("8MxcExnMniQEDs361cZseukEau9Rmd3CmrCXxasmNM1x") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.unqUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("3a3G1RjJe826EB1toShvPPWnyi2jXR53HP4vYb936kwj"),
    nonce: 254,
    authority: new web3_js_1.PublicKey("94V4mU6bWzU86tdzFbBCjkFngqXvf5MwXKhVLgJA83vL"),
    poolTokenMint: new web3_js_1.PublicKey("2VuGzaMrDnDyZfYvDwSXk38s7M2wpud7LDY3dGA1J9sy"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("9iHGnquXmnJnSATN4ijGj7Niz4StxXEMC8KqB1pT51uW"),
    tokenIds: [Tokens.unqToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.unqToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.unqToken), { addr: new web3_js_1.PublicKey("Hf4gYkKNAPhm2RYrXrcP9YVL44VbYnsRsyUuBnZGzqPr") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("BZ9oTLGDL6tsvoooQ9qEBSM3sYKJB1v2e9b4en5ix1Mp") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.basisUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("9wb29L97MmPp7Nw8oaqiAGkXceETGNQurhySiUNLv5wh"),
    nonce: 251,
    authority: new web3_js_1.PublicKey("786ezhfHqkmJUBmjrWYGpzPnVWR8zhy2V71qNws7D89z"),
    poolTokenMint: new web3_js_1.PublicKey("GoaAiajubRgeCFEz9L6mLnSmT2QFegoJDH5tpLfivpj"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("4FjEd37W9FExXq85nLeuNWuhUaTwkFdnqewt3E3qoYAh"),
    tokenIds: [Tokens.basisToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.basisToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.basisToken), { addr: new web3_js_1.PublicKey("7QM71YvJm86bN9RLFoEvyDX8dBgLh2xjnabcHf4d1Q1y") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("AmP22dYrTsG2LrkQX9cLg79jUrzDJcmWqGEWmM3Mdn46") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.gstUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("87E4KtN7F4LivKhjqXaoQAvS3a8HnM4DnMUrbMrkVvXY"),
    nonce: 244,
    authority: new web3_js_1.PublicKey("CwwMfXPXfRT5H5JUatpBctASRGhKW2SqLWWGU3eX5Zgo"),
    poolTokenMint: new web3_js_1.PublicKey("E6FUnQHGHJVJg7oExVr5Moeaj1QpdpZQF5odYjHXWPZb"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("BynpQprCNjcY2KHeffDKzquyKWvJxikty3donrMT4ZPU"),
    tokenIds: [Tokens.gstToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.gstToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.gstToken), { addr: new web3_js_1.PublicKey("9r39vqrJuubgafaJ5aQyDWYAUQVJeyZyveBXeRqp7xev") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("7LFnr5YgUyEgPMCLGNQ9N7wM5MFRNqCuRawLZTe5q4c7") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.meanUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("4jhCSYuGkLCiB8uvCaS34QCtPycBjayxEk27YCartTuW"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("Fawkj9g4s1M26uZDF6QczEviyib2Ge3FaPdCG9TJLYcm"),
    poolTokenMint: new web3_js_1.PublicKey("F5BTnwuMA6rxftTdbZ33VWKr2wrr6DuQHnd4guKmPSYQ"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("EqhWQbxsa36o7YSrCNvJTV1yoTRTWxCiLKcG9pzafprc"),
    tokenIds: [Tokens.meanToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.meanToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.meanToken), { addr: new web3_js_1.PublicKey("5KSCuA99i7PSF6KvvbvV5hDveGse7isqF6e7tFXPeMyn") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("13PtHDhQzswoFWg8Gr4yVrTmUEW4CWxeKFkLVERCmypB") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.aartUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("8wVYTnchy3WbhJvKn4NhTbgtVm6Bfd6yvxR33DsSftse"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("GAWAD19LVUgKmkWWfB4Xg92KMXuVR7M1gUpQPiFAAtxR"),
    poolTokenMint: new web3_js_1.PublicKey("HCtyJzFUtYecXrA52s4Y9atq4J1fhT3cYsTX17XVSFag"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("FmZkn9xAwpZULmF6rSrcz1pHiqqNnAXCUFWs1z5t9LSX"),
    tokenIds: [Tokens.aartToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.aartToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.aartToken), { addr: new web3_js_1.PublicKey("Hy3FDHpTfzqtooUARjgUvYuRcFnjGH5WLftu77DyEnKJ") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("J4Cd9u1WuY1WnCScENuRyL2jGh7qD6vpRsWJG6ZsC5z9") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.shdwUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("25bQ6UzZpgFgnU7MqZdqM9Axi6oJunytRL2LgXruDWZB"),
    nonce: 254,
    authority: new web3_js_1.PublicKey("BjnfpyU3Verx99dKcEJZpL1AqLTPrkAUcd44LpXcXVvn"),
    poolTokenMint: new web3_js_1.PublicKey("DJqqvzSuPaWThfzwMjXx7H2ZmHDdwxza6NtFudtuXcpc"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("9wmHbXURZ4zTPSj1KqoRSCdBRGUF7jrURzf7BB39cxM4"),
    tokenIds: [Tokens.shdwToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.shdwToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.shdwToken), { addr: new web3_js_1.PublicKey("8ZVaNyNZQkcMzF7esuZoRgRo7Rc9eKEN18v4zw7Ng8JZ") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("H8A2xivBXr1RMCYmuhJ7dyEXJqPxaGDyQaaim8WucU7c") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.shdwSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("E3fxkJGNNAWf5xXDfMdq5qofBVkQtLKxkP7gG6Up21Ts"),
    nonce: 253,
    authority: new web3_js_1.PublicKey("ByC5idkRdo2XdU5U6tSoSQmfq6spztUYMaSs2rrcJRPh"),
    poolTokenMint: new web3_js_1.PublicKey("2ws7g3LBPdctfKn42Di9qxzQtUJ8ZL1aEAX2rGEQMNqh"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("G9HR4sFJufdUovMGn4qc97r7fhgJCkTDnn4BT2wPWYar"),
    tokenIds: [Tokens.shdwToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.shdwToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.shdwToken), { addr: new web3_js_1.PublicKey("9LQEB2SZQJxtLQStgXVNzgWU3LVkc4szK22iDHcSr4K9") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("F2qtMkEy3L78wpw64bckvRx5M4w12Zi7bimuPBnYzto1") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.scyUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("Ci2T7KY8xXc3NmSr4JmbhZ2V7SfjZ7Fn2q6VxJsDD1Dg"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("fmoBkLez7cSLnG1XNn6PTf6UH5Vq2hSAPrZ1NbvRppL"),
    poolTokenMint: new web3_js_1.PublicKey("99ZHUQsgxL7K6PHrGNi1gSwawwPr7UA5fbWrYoHQ6qhX"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("HHhxxFKyVt4xrYnJqAiywHCzuoCu45S4itkLKvop2fAe"),
    tokenIds: [Tokens.scyToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.scyToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.scyToken), { addr: new web3_js_1.PublicKey("Hfa6kPY27pgnbXHMd1bKBaYMBoF8RRxUm2AmWHBWudcn") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("CYKEhyhe9JZqLzaM29o8urMu8riDNBE6ycZP6bLQtkbF") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.slcUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("ByfDbpLVNVQHzU6E5dmLE1kcAKWAYRr9LPSGcVxxSRFF"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("7G6i4eQxiJvXg7hPn5kMrso8AHQNsdfPZZdJM3NNJuYz"),
    poolTokenMint: new web3_js_1.PublicKey("E5kSBqTDxFLbLNQaVVtPtnhEYVLMCK2fVSEKoMKL98qR"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("CtBP4cFDLzm3KQCQRKXwwsMgYG9f6hbwuUswUZBzYvvY"),
    tokenIds: [Tokens.slcToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.slcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.slcToken), { addr: new web3_js_1.PublicKey("EnvNSVK9JRQ5jmsz7nvbhYmR3MHSeMvB8Mf1e4VwoyRe") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("CHuUSo3EMCqtGWvUGRj4crmDzV5YKdYvqrhHSEitAP8V") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.wustSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("M3DfDvKZ9WEWYWcBuguvt3rYSbKqj66PgjW69DoEq9C"),
    nonce: 249,
    authority: new web3_js_1.PublicKey("5mYWcs7n1JqDVeYby897eEUNeEJsp2PNMg2Y2VMD5Jrf"),
    poolTokenMint: new web3_js_1.PublicKey("6c13xsmyk7UaHUWZ2rm1MM3ZdrQRSBkQ9waaG25ridVs"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("BSoUBwfNgXSHX8QoZUnjfu8wWKyBmjNyDXwsgW3UEff9"),
    tokenIds: [Tokens.wustToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.wustToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.wustToken), { addr: new web3_js_1.PublicKey("3T7UL3ixF9S8XPjW7SEr9yYY8A5YWTDc7omgjKD2ULhb") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("91NfC8SunFRWF6BqEKnbnJCursfiDB2U3H6GGCqsFVxc") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.wustUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("Awp1hdAi5xi3CTDsXxiZsygSacpZV2a3L8rNNvpNRVn4"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("EtdLVaBnKzfKPqp8E2swCyQcjp8XjoT5FE72kqGxWCkq"),
    poolTokenMint: new web3_js_1.PublicKey("J1KfRtP5y2warpD7LdJhfBLPKoWwSqYuovdArSv1mpQ7"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("2onwniiH5fapr1EPsCDBnY92HGzoQpiHnNPWTmxngKbd"),
    tokenIds: [Tokens.wustToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.wustToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.wustToken), { addr: new web3_js_1.PublicKey("GZWYWkbZ63teAW3tUaThq7k4NMp67TqwF94TqAMRSPx4") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("DMuVdnkRsqP7v8exbrdHNn7WoViNLjf4PVanEQtwgFZ6") }),
    },
    curveType: pool_types_1.CurveType.Stable,
    amp: 100,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(6, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(1, 10000),
    },
});
exports.msolWustPool = Object.freeze({
    address: new web3_js_1.PublicKey("BpiM8jnpbha2TnTKp4AogyLYYA99Ks73GfDGueUWLakT"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("DVSsnD9fid2o6nzqbET1LctDmNMHBthf8LS1u9ZPyebr"),
    poolTokenMint: new web3_js_1.PublicKey("68YVjgPnTUPcBqZyghqvD2WPNsrLKsjYTmBKJzHRr4qd"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("ETX7csSJYTMYFwLAC6oPDKXnYWdpkzsNXyG2JuxVV4tJ"),
    tokenIds: [Tokens.msolToken.mint.toString(), Tokens.wustToken.mint.toString()],
    tokens: {
        [Tokens.msolToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.msolToken), { addr: new web3_js_1.PublicKey("8SuMMuDbSGVpWjp3fW5kzpMWuMhxcdQwGgLJiviP25UD") }),
        [Tokens.wustToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.wustToken), { addr: new web3_js_1.PublicKey("FL5QM8K2AYrqN52ssqr9GA3goYGkUiXQQxXfFFc9xD4f") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.wlunaWustPool = Object.freeze({
    address: new web3_js_1.PublicKey("C9NcP1mx51DLZVX8VtAk2Ldip5v6xCxZGmhx7Bxtqnz8"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("CAsASHduARHrb6pFFYrD9vcqXWhEEj7Z6AatKYVG3dbA"),
    poolTokenMint: new web3_js_1.PublicKey("8Mh7drLbt3jFJYwp948XyvQscGLaLkChNcaH5wwaAoWA"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("J43pVTNEB3AQEeXopMWTEozjPeMHBkwETXQWr4YZDzn3"),
    tokenIds: [Tokens.wlunaToken.mint.toString(), Tokens.wustToken.mint.toString()],
    tokens: {
        [Tokens.wlunaToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.wlunaToken), { addr: new web3_js_1.PublicKey("97aVH3M9cjZmfA5HVu9iJ9AnE41inBG1Sxqj8UQhR2jo") }),
        [Tokens.wustToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.wustToken), { addr: new web3_js_1.PublicKey("Av3RXECkvPCehJTJNbkWmUj3LmP63c4btzMYjbcYLkpm") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.stsolWustPool = Object.freeze({
    address: new web3_js_1.PublicKey("9F3J6RY7PTkDb3SUUpg725uXyCceBGCpZrtmYGJwgMwF"),
    nonce: 253,
    authority: new web3_js_1.PublicKey("wJydc21tAMxYDif8uvy5rWNGWDFNZnPPmqCvegyZRod"),
    poolTokenMint: new web3_js_1.PublicKey("HTZd53fYwYQRyAjiaPsZy9Gf41gobFdqkF4oKe3XLi95"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("5rCbmppxMBHwBjCkLUP6fireQ12cL8LRa26QRUimoxN6"),
    tokenIds: [Tokens.stsolToken.mint.toString(), Tokens.wustToken.mint.toString()],
    tokens: {
        [Tokens.stsolToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.stsolToken), { addr: new web3_js_1.PublicKey("GFso9SAGakm8ZFa3rmuonuerbcQ8ZbACNZN7idkKR5nw") }),
        [Tokens.wustToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.wustToken), { addr: new web3_js_1.PublicKey("EZ7pJskN2a4pDknrdkLzGDHpzjbfgdBj3Tt594K9HZbL") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.jsolUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("5pki97N9a6yEB3YQL3y8gvf4nSWnvEL9V6yms8Amnd9Z"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("BqBc47X3wgrVzi8zPUMUvsaKWsj6JN4wKJ4ArGRKn2QG"),
    poolTokenMint: new web3_js_1.PublicKey("AzEoVuNJyo9ByoLRZ5t6vav2Zg24vULNVJM41PgCKUqR"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("9Qkje8PCpu4LrGwpudcN3sunWLVP6ZP61zNupaPKNRnr"),
    tokenIds: [Tokens.jsolToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.jsolToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.jsolToken), { addr: new web3_js_1.PublicKey("D4Am1hMwzQqULAvmEjwJLDGwoyTgakRXrn7ayWHMhiB7") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("GznbQjBy2KKYYVLaJ6bM59GgekRsKT5QRi2NFMYNRcmf") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.daosolUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("6TwZgp6ABN7pbXbxvaZriHbbxeSAcEgxhKYnqGwphiRD"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("5jFXPUF5mN83WZkT5MJQFpFcZrP5zPZy1ZZwD29Le2Kh"),
    poolTokenMint: new web3_js_1.PublicKey("CCyDxjdW3G7hPTthTMPTZ4bnhFF19XG6rx2fNiKeRQww"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("JCnNHppa7kp9bRc3zfvfnwGqoVR8Li6sJT9pMztgwE9j"),
    tokenIds: [Tokens.daosolToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.daosolToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.daosolToken), { addr: new web3_js_1.PublicKey("EZf2tVoxVgGaBz6ir5iBppxiqFSqBUob2dNpiEuXMYiJ") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("3v29nJzrWebKv3DefSY5WVq4kgHWykF7fdYVaCpohwks") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.orcaUsdtPool = Object.freeze({
    address: new web3_js_1.PublicKey("4YnaUPeZ2fYqpoLrCyprSai8LaDWZxmgb6cGfNHJmyP6"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("35d4qNQiMtNV9Yb2kqk4tSd5M1yEqozWSQaYtjGHCA7b"),
    poolTokenMint: new web3_js_1.PublicKey("Gx4PoxenyQwhGGnKagAT35iVg4im1iKhJxDWqVhgu6tk"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("ABuGLBFTwcbLsqNsiCpZsFuNmHYwHEzfQR9SNpr4y3bP"),
    tokenIds: [Tokens.orcaToken.mint.toString(), Tokens.usdtToken.mint.toString()],
    tokens: {
        [Tokens.orcaToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.orcaToken), { addr: new web3_js_1.PublicKey("D91z1TewbTQ3AVc9RThtTjiMVRqr94CP73XrsbHEhej8") }),
        [Tokens.usdtToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdtToken), { addr: new web3_js_1.PublicKey("Fy4AwXwAwitVdFwgWBdYkqRVv8QjigU86ssL6rqzgp8S") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.orcaWhethPool = Object.freeze({
    address: new web3_js_1.PublicKey("D67u6UEuFp9Q4Fu2gnu5thxBoVj2eRgDDDirdWsMVsgm"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("4kwchkCnCaZPkBdnk85j9bJ9F1P883rwjbvsXGV7H5rM"),
    poolTokenMint: new web3_js_1.PublicKey("GsfyYHkSgC3Ta6aWR9MjB2sxoBrkGGeR2tAwXbpphf3"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("GdHXLai5M8FKedXUsECSzrV72nb1RTCCooFyTWT8WYmT"),
    tokenIds: [Tokens.orcaToken.mint.toString(), Tokens.whethToken.mint.toString()],
    tokens: {
        [Tokens.orcaToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.orcaToken), { addr: new web3_js_1.PublicKey("EMxDw1NjdddQjPk9gCUN4iDMy8HJ5siKYMVjGbjuUCrh") }),
        [Tokens.whethToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.whethToken), { addr: new web3_js_1.PublicKey("DQyhcuEvE1K9DSd51agcNLg4CDrgthnKMVhU7q6R55LV") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.geneUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("PQ1sBpkZYTkXo2aDRqWU2sEJGUj7yaeJ3GePoCRYU4V"),
    nonce: 253,
    authority: new web3_js_1.PublicKey("DvbTrW3tUfdgBDU5TFxfXjBpGUYivQP8MiSA5YmXHZGF"),
    poolTokenMint: new web3_js_1.PublicKey("7cuu94swKL5PtFQohKMAzyd1mjj65rgMW3GzLY31HCnK"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("AsR18ERwBhmTkjNpav9NDWdeUzvmDH2TXCwfy2kinat"),
    tokenIds: [Tokens.geneToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.geneToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.geneToken), { addr: new web3_js_1.PublicKey("LiM9qAQi7ud4fCkAcGcJJzmY47od7vzzeqKBejATbJm") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("APQyCmCvyVFreK2JjFHinmja24jTHdwm4umNJo67Nu2v") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.cmfiUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("AaJERSYSMtWxhRqZzBZ9JFr1gJkfSPgPEd3mBDT2AknQ"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("ERMNbmKrBKk3e8ZBbVWNUTkrqamZYxnRFXvgsPUSLT5j"),
    poolTokenMint: new web3_js_1.PublicKey("85krvT9DxdYgoFLQDHTAGdvtNuLdAsc4xE5FkVLpN2aR"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("3HXU5ABkghqJ3iMEGWsGe88kvZtiEyDJ24ihgFTytRNx"),
    tokenIds: [Tokens.cmfiToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.cmfiToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.cmfiToken), { addr: new web3_js_1.PublicKey("HEqNExFgmyZ4Es53pL2bfBi5pKcZwGzbvwm1UknYLD9s") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("GbK7B7ZGQNZYrEhADC8aV5HdPhYgMZ35f6c8Decie224") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.celoUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("H2bkwBwizcotpWHbruYFKXfHvh29hhoZn52qHq2YZumW"),
    nonce: 254,
    authority: new web3_js_1.PublicKey("E812K73QyqSsGBeU3MLodqVs3gCKJjka4p4gP34hXtns"),
    poolTokenMint: new web3_js_1.PublicKey("HVLyX8mD8YvKgZJ4oB6rXJiCYMLpHKwB6iCiCjE1XwdT"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("35HW4HcFDzVnVsxBhPKptYfwX3HyJWEosv5T9sdBSu8t"),
    tokenIds: [Tokens.celoToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.celoToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.celoToken), { addr: new web3_js_1.PublicKey("H6tFXr3BnF3r21Sv2ykLSbiE7wLxWpDcXroyxBReoXou") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("GnKnjXsmZKVhduVyLiR9Ngsxwo8spfxtruiPtqDqHLNJ") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.ftmUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("4RCU8SoBzvYysNaQBAFpQMmt7LPQgxbto9uiuRjAJPpq"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("HC6aGC7RsgVGonWs1MVy5Qit5R5ruEXZmeywpFwSCmdY"),
    poolTokenMint: new web3_js_1.PublicKey("Gpzd833qSmv3kXpQmxEaqkrZTXZaRjhNAoqhf61qAhTG"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("2cA9XLcSFJ9jgnYViJr5JtnhSpGNrPhebS4RaGm7DHmu"),
    tokenIds: [Tokens.ftmToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.ftmToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.ftmToken), { addr: new web3_js_1.PublicKey("EULHGNmuJWcRHm5Xen9CiG4uqVZoemLorLvAQ7vR9vCi") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("71rJZyRkxxupdqZeLrNQnHjus11C1yEVwsrKgQax6TSx") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.btcOrcaPool = Object.freeze({
    address: new web3_js_1.PublicKey("CqXRyZ23dFwdbMLGEQLhQQRJrzkFB3wBsuH92rp7d3yw"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("Fixb6XBzoSRJ4iCkHNX3xbr61yWXUh6SYyu5Jweg36VF"),
    poolTokenMint: new web3_js_1.PublicKey("DFpLFcQZqDKykyDePgip4r6MExVmBKWqTa12ezq6qxUY"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("47pxL1vidAiARAF45SoVnpqSet8EPckF9pB4d9zT1S3N"),
    tokenIds: [Tokens.btcToken.mint.toString(), Tokens.orcaToken.mint.toString()],
    tokens: {
        [Tokens.btcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.btcToken), { addr: new web3_js_1.PublicKey("8dbqoSTALCCshdKXX8Nb6AskytydXtHLyPoqu9Nb2ig3") }),
        [Tokens.orcaToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.orcaToken), { addr: new web3_js_1.PublicKey("7UAHjQQjYBrSKdtgbJK1SaUVgmBxcmMJKshvEiEhLheP") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.hbbUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("Fpwa7a1r7kjax1nW25TVP3uiQc7XH9dv9n9UXMJRSTEx"),
    nonce: 254,
    authority: new web3_js_1.PublicKey("9odZioXkQTCZERzQXbDTfirMfbP9FtKqsP9LvHgm6wJr"),
    poolTokenMint: new web3_js_1.PublicKey("cL5WhffCYFRLM4We8VS2W684kM4pHyuvEDwp8Ddw48k"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("3nyqxtRPnYrwEHneWgbN1197aZoEaemnSNQ7rgJLv8hS"),
    tokenIds: [Tokens.hbbToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.hbbToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.hbbToken), { addr: new web3_js_1.PublicKey("2vq1vt98xBPUmvbTC5nH4GtsjJVeA64kwv6CZc7xSAf6") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("B7f4A1Pp6RCjWYv5Lsrf4MecmZQDMekXh4MFQasCQuRB") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.hbbSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("2aCJ1VTwfvLej1PJJAmiVCzuLGtjQ5bEo9DYkbwwe1C6"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("8GRweHBrpXfeYpmryfkvEsW3DmoJKGDQLpcVfeNUqn8x"),
    poolTokenMint: new web3_js_1.PublicKey("FkKzu2HeMJZf4oHwoYPxLGVy3net5Jq8HAfnA5VqETgk"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("2Y1xXr1j6xg5r5Qz8LDqnU7N8T4GGu3Ju4AHGsfU2nXS"),
    tokenIds: [Tokens.hbbToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.hbbToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.hbbToken), { addr: new web3_js_1.PublicKey("5k1Nj2TvG51p7s2ambWpmX6FraiSchoYS1wJgVw5f9Af") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("2s2vbHk4XzKQ9SQdPRyirY8JmBemhZ67EBx7xgF6tzq5") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.sbUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("GPxcR4ci8RbLh4bVPi88mKwTEDeVxEKs3nBkKayghuuL"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("6poTLvmbRU9FAJAnM5RmXMRTVFf2xWRKooCkStZQJf6U"),
    poolTokenMint: new web3_js_1.PublicKey("2Reqt4Sw9xNY8BoJ3EZLpFu5yVgNxFrbw8M3KiJpPn6o"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("EVRpMUxUGZGH15SB1hGhLzzz15XNopLZjSuTZSpcwMmt"),
    tokenIds: [Tokens.sbToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.sbToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.sbToken), { addr: new web3_js_1.PublicKey("EoV9ub5aojyBFdYGhPQPQ6cDeesgsENrNYGN6L8CB6Nh") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("7kRmDjSorwKqqLAFupgGW8fEp6hywkt2bntw2gCrV5Sh") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.stsolUsdtPool = Object.freeze({
    address: new web3_js_1.PublicKey("EacW6utfAJk6z5QCbyqjJHdTN2TH5UFu9K5dh3DmhsLV"),
    nonce: 254,
    authority: new web3_js_1.PublicKey("CUQbwmFXySWXpBgycGTTj3gQNY8AnjD4DJRjgLeG1bVK"),
    poolTokenMint: new web3_js_1.PublicKey("4ni1nho89cDKAQ9ddbNQA9ieLYpzvJVmJpuogu5Ct5ur"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("H4VgN76Mri6ctLCkf6fnyfae9fCDC51nZVPa1oPjq1Da"),
    tokenIds: [Tokens.stsolToken.mint.toString(), Tokens.usdtToken.mint.toString()],
    tokens: {
        [Tokens.stsolToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.stsolToken), { addr: new web3_js_1.PublicKey("BAMiBNk9j6Z9LLdZzzGScHDFQas58uLqW4GGX4ndq7K6") }),
        [Tokens.usdtToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdtToken), { addr: new web3_js_1.PublicKey("Ajf4bxNoKCyFVfV35sRTgGwZK1dfJJJVXgNFs7ncC5EF") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.seededUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("3fyCss3Y9ATNnTSsN7VCasEb4H5SpSuN7VEoJnNWZU3x"),
    nonce: 251,
    authority: new web3_js_1.PublicKey("89TxEkGNHFcniBm5pXo8Jq6s1ZaBUKCRqgYS3eAr3jJ7"),
    poolTokenMint: new web3_js_1.PublicKey("H7gyTmNCDXkD8MGMqnxqoD8ANszjcju4tjT6ERZ5dakf"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("2ZTqrZTNumBMdyQm3cAiREHozzQp18KhEuGWiUVwJMRm"),
    tokenIds: [Tokens.seededToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.seededToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.seededToken), { addr: new web3_js_1.PublicKey("Dn9LiTqcRiyxipCqvTEyT3ZwbWtf69bUcHQLWG89jpJa") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("Aq5xPmh3cZoyLN3KzVcAK8osAU7oAjo1k6qdw6gd5ovi") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.audioUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("2arG3AznFJbLknAQUqk44PgeABZDHpBfcRsPmPWjjBPY"),
    nonce: 254,
    authority: new web3_js_1.PublicKey("ETCzw3Vp2n4aas7rFtxb554h67JPeyDBr7DKcHUgSAxp"),
    poolTokenMint: new web3_js_1.PublicKey("3hksYA17VxgiKSeihjnZkBbjc2CTbEBfvDCYgQhojTo5"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("H1Rcj6jAeV9v5QsJTo957tcWgYzve4PZEuSHGNmX1UFv"),
    tokenIds: [Tokens.audioToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.audioToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.audioToken), { addr: new web3_js_1.PublicKey("FfpKRggDra1uSskyzAm6f4EXFhxw6ij8BkDwiWTs126x") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("ACBf9ksELg2buAFnDTJL9WnT5kZRcFN1Bvarox9JZVbq") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.mmaUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("3HJ9QwRNsdHj3xaTvrzYyvvsY1gd23N8qGiSHaytKLLB"),
    nonce: 254,
    authority: new web3_js_1.PublicKey("58KyKR1fHXP2ewDC93TdRxPZ7W8FNYkLc53VH9XP32hD"),
    poolTokenMint: new web3_js_1.PublicKey("AaZRnJAnDyJyPD9uPJpJ8bzBGDCEi6jtBpUf92xErWPp"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("AfesEXaDzs4mnPQJyqNHzpZ8DMBpuEPtmi1aL5xwRjVm"),
    tokenIds: [Tokens.mmaToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.mmaToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.mmaToken), { addr: new web3_js_1.PublicKey("BzccyLPYsbhhWjHnRLUn7Fpkao9reYRdjA8wkp7iY6re") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("6uJF6gMpCxUYvmQ8hmaz44MRyRYq5ykpsx5GYABbUK5A") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.onesolSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("8CJhJomcLYoVw6pAQdNWPJ3yDXkS55y2gAxJ9uReuXEz"),
    nonce: 254,
    authority: new web3_js_1.PublicKey("9DV4t1XqqNiXLCdHfaEwAbVaT5Mth3z8VjYS6CG8CPQS"),
    poolTokenMint: new web3_js_1.PublicKey("9wPhuYapychVDSxmXqCZxy2Ka8Lmav4SHM72si8bfraV"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("6yqvsmFJrMhSv31Ne6yY8f4y2ZJvMMCwTjYTxhq1eKS5"),
    tokenIds: [Tokens.onesolToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.onesolToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.onesolToken), { addr: new web3_js_1.PublicKey("532m3b4aSmWsrn4RfM9ByBRLJocdcHMwiscjADQYNjXG") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("2qu6tc58av5AGfrrBPdHxK2Cyi5CsDhjaZ8x8yw8UA1w") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.puffSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("GrSE1LoQBr3p9y7HQxV8h5vc8fH4xkT4a6Nysckbu8zt"),
    nonce: 253,
    authority: new web3_js_1.PublicKey("79gfyi1Ct3m8RKkF618yxnA7w5JQV1NWhkMs6dXACgGq"),
    poolTokenMint: new web3_js_1.PublicKey("Eho8h1BcoG5QWU7X9FzJafw5ErKUXtR2LobAJJZfWff4"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("44XxHHYz2642Bc4sHdDuV2aEGbziugqN5tKnmBBBwPyA"),
    tokenIds: [Tokens.puffToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.puffToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.puffToken), { addr: new web3_js_1.PublicKey("HYszSkhsPPNSj6Q5hRudc94kawCgUNeQ1DqrxJxtoxsK") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("AKJUQjqAHTw5rNYYv9Rvxxe23mwdNaqzt7pdriJy92sw") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.saoUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("BWCT76eQ8jtrKkMm234ZY1QEXSfZYTrzHyXaE3DxeQfd"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("7TXfpFGVASvgkLkuTSsqQJQTXypa31zqcHmPZNMaAJu"),
    poolTokenMint: new web3_js_1.PublicKey("4iyU77yZbg8iD344vbwruAuDAf9i1EVV3FhZJDnWStBE"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("BVSJLE6RZ2cvfXPjSZcj7fK1HLra2wtcC4jLCZAh6gFX"),
    tokenIds: [Tokens.saoToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.saoToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.saoToken), { addr: new web3_js_1.PublicKey("8MNhNFCU366Y3dq3HRk5nKuKZuQLY3kffMZekadM2R8q") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("6qnLaADqFjtGsMsHjScFVmpVVNBbqaGNoBwBFy5BVRr8") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.srlyv2SolPool = Object.freeze({
    address: new web3_js_1.PublicKey("Df7DkQRXEpPM5basbYHi45268hmR8m7YrtraPdGgj6R6"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("9DaRQeoEx3EjXYxhpZrcJ6no3bcAkfm9toWbngcAqSCB"),
    poolTokenMint: new web3_js_1.PublicKey("3dXdXg5HPyZ73GFC9LkSn3thdJUGeXWB8iSTHs5UcqiH"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("B3Ao2fEX2isX8UQ99EuPz3BDzUfQTPeYS7KVvbCnkrXm"),
    tokenIds: [Tokens.srlyv2Token.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.srlyv2Token.mint.toString()]: Object.assign(Object.assign({}, Tokens.srlyv2Token), { addr: new web3_js_1.PublicKey("AJzDsY4wnv8nWSWoBimY6hWJpWC54oEgmfbV7YGXsLww") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("qytd7KfK3pFVWog53xUVE8dqD1sBxa1H13VnF6ADGSd") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.zbcUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("J4Xvy9twDDWqqwyfX6nrc2QFJeMJ6HD9kbAmcPhfYmFP"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("9Ssocd3xbxm3xCKwz1g8d41rS6iWbmGyo25ZdYZHbDCp"),
    poolTokenMint: new web3_js_1.PublicKey("2LYgm6nGXmSSjfoEriPuYeGoNiWNxUs7n3rnTbDWN5c7"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("8H1bUAywEerLCYxLVDjM5EqXYXtoW5gbR1MoD1LrrnMV"),
    tokenIds: [Tokens.zbcToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.zbcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.zbcToken), { addr: new web3_js_1.PublicKey("8AcanN7p8KHfLxKBBMKuJUqqX2uUPz3mkp3iaNHHaZfZ") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("FwqAxdo6s5EtyVXqqU7sj3Q9n3eLuUkF2D4584MDoWLW") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.gmtUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("46GcZFgznxUf6TpoCqJqzMpgMbbJPCAwNn8GThSt9qjC"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("3HGGVGTXbqT49PG3L8JQYH4jCeP5CNBG6CpJniZ434an"),
    poolTokenMint: new web3_js_1.PublicKey("CFxQF5kNAtbbDj298Xr47Sf4mkSyuzWpRH97hrdQ6kxi"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("3pBqsnahNsm6p14FFjtMCGfD1VCQNcUEdNEeSwTGfE2q"),
    tokenIds: [Tokens.gmtToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.gmtToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.gmtToken), { addr: new web3_js_1.PublicKey("BTpvbpTArnekGgbXRqjfSvp7gENtHXvZCAwuUKQNYMeN") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("DdBTJuiAXQQ7gLVXBXNPbVEG8g1avRxiJXhH5LhBytYW") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.novaUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("GWG6gTW75GxMS7oUDoivjPrjcbsiR7fDMFKFw6pz2MuN"),
    nonce: 254,
    authority: new web3_js_1.PublicKey("Az4AA8tzbKJRZhunGUGVmtJyGUj763fiDyxbZiPeSVb4"),
    poolTokenMint: new web3_js_1.PublicKey("DdAFNvDxtEHCgKj3JAM64zCKfMWhs4J9wEmRrjUAFiME"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("7RPsLN9WHRL39sAs3oDjWzGHJ1bCJg36qmTqb4i6ZPFV"),
    tokenIds: [Tokens.novaToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.novaToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.novaToken), { addr: new web3_js_1.PublicKey("5DCtLobmcNATqtgbv9pymXsXDqmVJ7NVi6GLLuPwmphk") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("Hym2QSjXpNZE8VubGbg63nPx1QGXtkmsucdBCFYKp6jj") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.hbbUsdhPool = Object.freeze({
    address: new web3_js_1.PublicKey("9GgFi1cavfTEQ8gy87S3VVeqZSFBhncpJvMBQ8vprAQw"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("HsTk5QvXEQpdr1bB8nay55TZqecKUqNvGLM93vVRhHqj"),
    poolTokenMint: new web3_js_1.PublicKey("7n2YW9qLkhGFArdZPLoF4hYPE2zw7xCACkVPXrUWnLuo"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("AijCQCXg6pcLwfNW6DB9HNrwge2HRaXfdJLAXeBEhgKF"),
    tokenIds: [Tokens.hbbToken.mint.toString(), Tokens.usdhToken.mint.toString()],
    tokens: {
        [Tokens.hbbToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.hbbToken), { addr: new web3_js_1.PublicKey("D9uCWM7yfWwUktQ2MjuiDmTYa4vE9ff5St7TaQ9uJPwe") }),
        [Tokens.usdhToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdhToken), { addr: new web3_js_1.PublicKey("AGGpY57ko5qcJJxRNgJSXTs3jrf6cPgux4q8B9R3nE52") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.takiSrlyv2Pool = Object.freeze({
    address: new web3_js_1.PublicKey("6AxGikaR6FvDAP3rEWYA5sjKim8ELceCfno7ZGaYYwsK"),
    nonce: 254,
    authority: new web3_js_1.PublicKey("13sT1XctPqMUoomDqyV55nEAupZXfyc7tohxTrhNXyKQ"),
    poolTokenMint: new web3_js_1.PublicKey("6atKbS2Xz5vu7cqWBNk8KYkuakRzckZ9nvtUKf2k8Sc3"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("3yvDrXwLK4z5P7BbPko7siDfxDLV31J58xzoCK9Wy5mb"),
    tokenIds: [Tokens.takiToken.mint.toString(), Tokens.srlyv2Token.mint.toString()],
    tokens: {
        [Tokens.takiToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.takiToken), { addr: new web3_js_1.PublicKey("J8kiPsPrscD9oLg5JP3Dj7HyNSLh5s4zmfA7LLYNqYXS") }),
        [Tokens.srlyv2Token.mint.toString()]: Object.assign(Object.assign({}, Tokens.srlyv2Token), { addr: new web3_js_1.PublicKey("FpdhjfJsJtMYy5zejmhFJNxtE59NDhgbXn3mfsEeKDmu") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.zigUsdcPool = Object.freeze({
    address: new web3_js_1.PublicKey("37b7oyhDTJh1VpjjEZqaC8VasvnyHHYHeiXLpa8Ht8Hm"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("8D4DfRUgmEMuiFct6BCqSiUd7NgH4wtbU3kLB4Miy1YC"),
    poolTokenMint: new web3_js_1.PublicKey("5vhh9ZnD9vnahRhFLP1EUEyYRSzvJwgw9U2xygsSJSrp"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("AcWQv9cp2gn8BUTn7swwpPeAcGZ9gG64zzM5pYWnReGx"),
    tokenIds: [Tokens.zigToken.mint.toString(), Tokens.usdcToken.mint.toString()],
    tokens: {
        [Tokens.zigToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.zigToken), { addr: new web3_js_1.PublicKey("BNx1dsmrFLX9r2hWf2duWaPL4m7yu1AkBw8X9YwEGqp7") }),
        [Tokens.usdcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.usdcToken), { addr: new web3_js_1.PublicKey("jYirYPaPZKnsbEJSvWu3Pb6tWRcNxPQPL2RD1qTa7eK") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.srlySolPool = Object.freeze({
    address: new web3_js_1.PublicKey("FyGeyg6HEjBwTEGXF9o78XgKyMkmxSncLe2VECu3FPgo"),
    nonce: 253,
    authority: new web3_js_1.PublicKey("BDmEnikYwue2wtzxZFhr29avpQdX3rrQrvSjYJimeteH"),
    poolTokenMint: new web3_js_1.PublicKey("HfRgvhgscGX5GaP3rUrZAhh7gS4aJ2UQ7rNVX976rG6P"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("EcUL9q6rMrVsyqDR1hMMMyHM6Sqos93SKXBCEd3HgAa7"),
    tokenIds: [Tokens.srlyToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.srlyToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.srlyToken), { addr: new web3_js_1.PublicKey("7vY5bs27YTWus7KiemXsfaY4E2EzbrV5gXvbx1RaWJ8B") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("JiKtEtLL96sUDQvM1oYXuNaWdHxjdcSgb9M3yqNYs8h") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.takiSrlyPool = Object.freeze({
    address: new web3_js_1.PublicKey("4VzdxTLqzgn5MGMTDsNMukZCvkAZkXLXhYENeKGRtdTR"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("CMTEg8iJ131Fi6yJvsZ5ovtUZjfQWaEsZtTmZH15WjFH"),
    poolTokenMint: new web3_js_1.PublicKey("3xaK5aWWLNRB73xUVX3cusLhDp65mTvP4fwW5Jwxakgs"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("5Vey7hniN8uNjqBkaxrVpXFrsc5eEZdqFD1Xi5SJF6PS"),
    tokenIds: [Tokens.takiToken.mint.toString(), Tokens.srlyToken.mint.toString()],
    tokens: {
        [Tokens.takiToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.takiToken), { addr: new web3_js_1.PublicKey("7p3UFVn1h2Eeo8zF4CETufa7JqXYMVXzKLn7vg39MQfX") }),
        [Tokens.srlyToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.srlyToken), { addr: new web3_js_1.PublicKey("J5V4k8nSGu3PBH8ej4E34KjCbGZx5Q7v2AMwr4Wt9Tgm") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.stsolSolPool = Object.freeze({
    address: new web3_js_1.PublicKey("71zvJycCiY2JRRwKr27oiu48mFzrstCoP6riGEyCyEB2"),
    nonce: 253,
    authority: new web3_js_1.PublicKey("5qpKgo2PSNSkmHGAa4oYrEZcYA3CQaFpA66nPVuP1qHX"),
    poolTokenMint: new web3_js_1.PublicKey("4jjQSgFx33DUb1a7pgPsi3FbtZXDQ94b6QywjNK3NtZw"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("7nxYhYUaD7og4rYce263CCPh9pPTnGixfBtQrXE7UUvZ"),
    tokenIds: [Tokens.stsolToken.mint.toString(), Tokens.solToken.mint.toString()],
    tokens: {
        [Tokens.stsolToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.stsolToken), { addr: new web3_js_1.PublicKey("HQ2XUmQefvBdpN8nseBSWNP2D1crncodLL73AWnYBiSy") }),
        [Tokens.solToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.solToken), { addr: new web3_js_1.PublicKey("8y8X4JuZn1MckRo5J6rirpr2Dxj1RKQshj7VzuX6dMUw") }),
    },
    curveType: pool_types_1.CurveType.Stable,
    amp: 100,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(6, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(1, 10000),
    },
});
exports.btcStsolPool = Object.freeze({
    address: new web3_js_1.PublicKey("Cus1XADrHBrgyD7hKLGARsHFtBgGWvjAA346KimbHXai"),
    nonce: 255,
    authority: new web3_js_1.PublicKey("Czqib5TfizVRvDksYBFfdDgHcBwdPPVejW9LYDBSXxu5"),
    poolTokenMint: new web3_js_1.PublicKey("HYp9v7cY4wAxSsa6ijztQQ3GQ8iTttuG5vu8JNBDHoNh"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("3SHTi6ybA2oAFooARTt1ETbNPSueofuBFhmEtjmrJFUw"),
    tokenIds: [Tokens.btcToken.mint.toString(), Tokens.stsolToken.mint.toString()],
    tokens: {
        [Tokens.btcToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.btcToken), { addr: new web3_js_1.PublicKey("8WhAF65WbdsRAzGQF66oLsBZwbeXbU5WtxX7pA8SwjK") }),
        [Tokens.stsolToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.stsolToken), { addr: new web3_js_1.PublicKey("EnbNxeehxrAJXxyWupFcs7zsJN3Zob4nJmpFGS8ninm8") }),
    },
    curveType: pool_types_1.CurveType.ConstantProduct,
    feeStructure: {
        traderFee: percentage_1.Percentage.fromFraction(25, 10000),
        ownerFee: percentage_1.Percentage.fromFraction(5, 10000),
    },
});
exports.stsolWhethPool = Object.freeze({
    address: new web3_js_1.PublicKey("9FtrC9VkqssGygMafJjseqPQXnyorqHV3DyMPBfJrgtj"),
    nonce: 252,
    authority: new web3_js_1.PublicKey("4Y7EQYJ1WWKn8ZXC3Fc6KVnp5LPgqLxyV5Pk9eGm3cuh"),
    poolTokenMint: new web3_js_1.PublicKey("FWurFWADrgmhb6Y44LEaCMnEHS2Tu3QGqd9oBcZtr8gT"),
    poolTokenDecimals: 6,
    feeAccount: new web3_js_1.PublicKey("28t4Vixx6cE1yunwXNqQ2YU3pU9PbCscK9G3daRYuYCS"),
    tokenIds: [Tokens.stsolToken.mint.toString(), Tokens.whethToken.mint.toString()],
    tokens: {
        [Tokens.stsolToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.stsolToken), { addr: new web3_js_1.PublicKey("FTrSPUnMKmdKkNekKvVUQY1nunr2kWwohMHmBusd79Vj") }),
        [Tokens.whethToken.mint.toString()]: Object.assign(Object.assign({}, Tokens.whethToken), { addr: new web3_js_1.PublicKey("2teAyRLAU716sCj9v2634Wi4wcLqtRvV9upXaRvDSFm1") }),
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
exports.orcaPoolConfigs = {
    APDFRM3HMr8CAGXwKHiu2f5ePSpaiEJhaURwhsRrUUt9: exports.solUsdcPool,
    FZthQCuYHhcfiDma7QrX7buDHwrZEd7vL8SjS6LQa3Tx: exports.solUsdtPool,
    "71FymgN2ZUf7VvVTLE8jYEnjP3jSK1Frp2XT1nHs8Hob": exports.ethSolPool,
    "3e1W6Aqcbuk2DfHUwRiRcyzpyYRRjg6yhZZcyEARydUX": exports.ethUsdcPool,
    "5kimD5W6yJpHRHCyPtnEyDsQRdiiJKivu5AqN3si82Jc": exports.raySolPool,
    ADrvfPBsRcJfGsN6Bs385zYddH52nuM5FA8UaAkX9o2V: exports.ropeSolPool,
    "8nTzqDXHriG2CXKbybeuEh1EqDQMtrbYMFWcP7AkiDaP": exports.stepSolPool,
    "9tf8rBSEQYG7AqL896fN2nZi1iYPqpWaLEdpbeQaC1Vy": exports.srmSolPool,
    EsYaDKJCmcJtJHFuJYwQZwqohvVMCrFzcg8yo3i328No: exports.fttSolPool,
    CzieDbGRdN1QGaGDNpSqzEA18bi881ccvkkGZi51pe1k: exports.copeSolPool,
    "7tYCdLN84EnTMkxM7HNamWJx7F4xgKe9KiiWvLyWjbgT": exports.oxySolPool,
    Acxs19v6eUMTEfdvkvWkRB4bwFCHm3XV9jABCy7c1mXe: exports.btcSolPool,
    HiwRobjfHZ4zsPtqCC4oBS24pSmy4t8GGkXRbQj4yU6L: exports.merSolPool,
    EYsNdtyu4gGTaGz8N5m5iQ3G1N6rDyMbR72B3CqbWW4W: exports.fidaSolPool,
    "99pfC8fWymXgbq3CvrExhx3UxQDC1fMWEWLbNT83F45e": exports.mapsSolPool,
    H2uzgruPvonVpCRhwwdukcpXK8TG17swFNzYFr2rtPxy: exports.usdcUsdtPool,
    "2uVjAuRXavpM6h1scGQaxqb6HVaNRn6T2X7HHXTabz25": exports.orcaSolPool,
    n8Mpu28RjeYD7oUX3LG1tPxzhRZh3YYLRSHcHRdS3Zx: exports.orcaUsdcPool,
    HEvnD66WcBfTajS9adUYnGRBMDehFtLySiFHSD6kEBWs: exports.kinSolPool,
    D6N9j8F2DhtzDtrdpT74y3u2YmYAzcggiLc3nTjqux9M: exports.samoSolPool,
    "3PD9SZFwXKkXr4akLf4ofo37ZUMycwML89R2P3qxcbZG": exports.liqUsdcPool,
    AZpo4BJHHRetF96v6SGinFZBMXM4yWMo4RA8C4PriDLk: exports.snyUsdcPool,
    "8PSfyiTVwPb6Rr2iZ8F3kNpbg65BCfJM9v8LfB916r44": exports.msolUsdcPool,
    AtB4nUmdyQfuWWJ9xAHw9xyVnJFfSjSuVWkiYan8y86w: exports.slrsUsdcPool,
    F8gPSpwVHj8FdAJAYULDuZBxFEJut87hUbARYYx3471w: exports.portUsdcPool,
    CS7fA5n4c2D82dUoHrYzS3gAqgqaoVSfgsr18kitp2xo: exports.sbrUsdcPool,
    Dkr8B675PGnNwEr9vTKXznjjHke5454EQdz3iaSbparB: exports.scnsolUsdcPool,
    C2YzN6MymD5HM2kPaH7bzcbqciyjfmpqyVaR3KA5V6z1: exports.psolUsdcPool,
    "29cdoMgu6MS2VXpcMo1sqRdWEzdUR9tjvoh8fcK8Z87R": exports.msolSolPool,
    C7TH2jEJJaxVwwuvkbcDGfHUiZvEkkeYjyAcdTMi5ujb: exports.orcaPaiPool,
    CVapmQn7HaU1yMDW3q6oUV4hx6XoYv54T4zfGXkuJqkA: exports.orcaMsolPool,
    APNpzQvR91v1THbsAyG3HHrUEwvexWYeNCFLQuVnxgMc: exports.scnsolSolPool,
    FZ8x1LCRSPDeHBDoAc3Gc6Y7ETCynuHEr5q5YWV7uRCJ: exports.atlasUsdcPool,
    GteBdo9sqE7T41G8AJsaG9WHW48uXBwsLLznmu2TBdgy: exports.polisUsdcPool,
    "2gXDJZ7XAtQEtf4PRSQZKoq1WMuu1H44tQanbMA3YVpu": exports.bopUsdcPool,
    "6VK1ksrmYGMBWUUZfygGF8tHRGpNxQEWv8pfvzQHdyyc": exports.samoUsdcPool,
    "4X1oYoFWYtLebk51zuh889r1WFLe8Z9qWApj87hQMfML": exports.ninjaSolPool,
    BVWwyiHVHZQMPHsiW7dZH7bnBVKmbxdeEjWqVRciHCyo: exports.slimUsdcPool,
    ELfBngAgvLEHVBuJQhhE7AW6eqLX7id2sfrBngVNVAUW: exports.whapiUsdcPool,
    HsauTv9s52Zv12eaDuSp6y7BEm4e4BHEyAsbdjyyWzPK: exports.copeUsdcPool,
    GHuoeq9UnFBsBhMwH43eL3RWX5XVXbSRYJymmyMYpT7n: exports.sunnyUsdcPool,
    EorFh8siFyLF1QTZ7cCXQaPGqyo7eb4SAgKtRH8Jcxjd: exports.grapeUsdcPool,
    GMzPbaCuQmeMUm1opH3oSCgKUjVgJUW14myq99RVPGX5: exports.abrUsdcPool,
    DRknxb4ZFxXUTG6UJ5HupNHG1SmvBSCPzsZ1o9gAhyBi: exports.kuroUsdcPool,
    "2toFgkQDoPrTJYGDEVoCasPXuL9uQnjvXJaDwa9LHyTx": exports.mediaUsdcPool,
    "4SBx8GXu8HhcVHWydQv1vsDdZs3G93XSL9CtMBny6hS5": exports.tulipUsdcPool,
    H9yC7jDng974WwcU4kTGs7BKf7nBNswpdsP5bzbdXjib: exports.mngoUsdcPool,
    Eswigpwm3xsipkTqahGi2PEJsJcULQBwZgxhQpr6yBEa: exports.stsolWstethPool,
    qJxKN9BhxbYvRNbjfK2uAVWboto6sonj8XC1ZEW5XTB: exports.sypUsdcPool,
    "74B9aMS7SA832xKngt5VLKmWAP3pa3qkUzWncTmQSsGF": exports.stsolWldoPool,
    "7aYnrdmdCRodDy2Czn6keUquUhjF1jPEmfwZPh488z8U": exports.whethSolPool,
    "7NPtjjAP7vhp4t5NCLyY4DY5rurvyc8cgZ2a2rYabRia": exports.whethUsdcPool,
    "5PHS5w6hQwFNnLz1jJFe7TVTxSQ98cDYC3akmiAoFMXs": exports.mndeMsolPool,
    Df6XNHMF3uRVZnz7LCEGiZVax6rXgz76owtVkBHEjSb6: exports.wagUsdcPool,
    "9cMWe4UYRPGAUUsTkjShJWVM7bk8DUBgxtwwH8asFJoV": exports.msolUsdtPool,
    "5qoTq3qC4U7vFxo3iCzbXcaD1UEmDeCD63Dsuoct71oV": exports.msolWhethPool,
    "8nKJ4z9FSw6wrVZKASqBiS9DS1CiNsRnqwCCKVQjqdkB": exports.btcMsolPool,
    DfgCnzaiTXfPkAH1C1Z441b5MzjjTCEh134ioxqRZxYf: exports.ivnSolPool,
    "8sfThep3io4gvcGeuoAg1Rs8GDwKJjtcdAFHqQSSNAVE": exports.larixUsdcPool,
    "6jCERp5hKj37PCXP3VTjCDJeoPuSpnMDMz5A6jWQv3yS": exports.prtUsdcPool,
    GBijunwxa4Ni3JmYC6q6zgaVhSUJU6hVX5qTyJDRpNTc: exports.jetUsdcPool,
    GtQ1NT7R5aaTiST7K6ZWdMhwDdFxsSFvVFhBo8vyHGAq: exports.stsolUsdcPool,
    "5a6Y1ephcbKSoyLMQyD1JWbtqawCy8p2FtRL9v3zhaG5": exports.wstethUsdcPool,
    "6mJqqT5TMgveDvxzBt3hrjGkPV5VAj7tacxFCT3GebXh": exports.auryUsdcPool,
    Hmfrtmo93DpSDmVNLQKcBS5D1ia5JatiRSok9ososubz: exports.avaxUsdcPool,
    FwCombynV2fTVizxPCNA2oZKoWXLZgdJThjE4Xv9sjxc: exports.fttUsdcPool,
    "4cXw2MYj94TFBXLL73fEpMCr8DPrW68JvrV8mzWgktbD": exports.rayUsdcPool,
    F59gkD7NnsdJbFKrRZsiBC8PAooN4c56T8QmahfW1iXN: exports.slndUsdcPool,
    "7vnps4VE5RTGAr5fmPZu7fSrk2VnM4Up838grZfqmxqE": exports.gofxUsdcPool,
    "9EjcYfHcG8f1mccpHyaAwpoxaUPiheC6KgLQjyD9aTb6": exports.woofUsdcPool,
    CHTKUJGYRtBDqnxCFjxe5KEkZgxV98udbhuYYyzGxup5: exports.sdogeUsdcPool,
    "55r9txzQtmjTykmTXmBYZCVMg5z9squB8b5cSw2AhxA4": exports.catoUsdcPool,
    DSiHyHDn96bUQSZtizyCRLcQzrwohZeMpVu8rYJN1HzG: exports.oogiUsdcPool,
    "5MvQHx8eftU39JTucFsT315JFnQASuDQg3FqxTw7xcvN": exports.sonarUsdcPool,
    HNrYngS1eoqkjWro9D3Y5Z9sWBDzPNK2tX4rfV2Up177: exports.aptUsdcPool,
    AWrtTWG4Zgxw8D92bb3L3sQtGLD3zDztMPWsXSph8iBP: exports.dflUsdcPool,
    "9Y1vPaAsMz8X65DebMMnmBjbMo8i4jh4mcgiggZUUS3M": exports.dflSolPool,
    FnDxJPNk7pPmGHUbR4XUHmHevrkXHdna5D3sQKcAtjBL: exports.frktUsdcPool,
    FGgP1npQTsC5Q4xBmQtNYSh51NKqNwdxBZy8JCo3igcu: exports.tttUsdcPool,
    E1U63VXhNiWoUkVvjrfLDdV1oJrwE6zLde3bohr6jCqz: exports.upsUsdcPool,
    GjG7JjTQfQpDxw4hWx4etP9oTaYCuCbPjsU8WaUT3xHB: exports.fantUsdcPool,
    D8WjqtwC9CzBrQKfSf2ccCHFQuPYwyLv5KAy8WjT5vnf: exports.blockUsdcPool,
    "34Ppq6R8NfYBwWwPY4cBK4Afyb8hHaASQFukCzH6cV4n": exports.runUsdcPool,
    HjR8JgqNKQVMvdryqJw5RJ4PCE9WGk8sgbEF7S9S3obv: exports.uxpUsdcPool,
    J3kvcay3N16FBdawgnqoJ9v9p6XCvyCLE2Z9F5RLvGkj: exports.btcUsdcPool,
    "12Uj74zgUUoBe4yeackwQ4qYtFMr9fk1xL6q5Nha6t2N": exports.mndeUsdcPool,
    "71CBZeJ4tw38L9pSPoCz4fRsuWE64Fipyzotte7haoCS": exports.chicksUsdcPool,
    "6MF5CHWAj5mS7FhpxiKz37CzR2eYTu236XpBKKMXCrGg": exports.onesolUsdcPool,
    HDgxKmiA8Pv82fNguhVeMkZqQkos2YksFPoP1KttWxX8: exports.wmpUsdcPool,
    "2VuGzaMrDnDyZfYvDwSXk38s7M2wpud7LDY3dGA1J9sy": exports.unqUsdcPool,
    GoaAiajubRgeCFEz9L6mLnSmT2QFegoJDH5tpLfivpj: exports.basisUsdcPool,
    E6FUnQHGHJVJg7oExVr5Moeaj1QpdpZQF5odYjHXWPZb: exports.gstUsdcPool,
    F5BTnwuMA6rxftTdbZ33VWKr2wrr6DuQHnd4guKmPSYQ: exports.meanUsdcPool,
    HCtyJzFUtYecXrA52s4Y9atq4J1fhT3cYsTX17XVSFag: exports.aartUsdcPool,
    DJqqvzSuPaWThfzwMjXx7H2ZmHDdwxza6NtFudtuXcpc: exports.shdwUsdcPool,
    "2ws7g3LBPdctfKn42Di9qxzQtUJ8ZL1aEAX2rGEQMNqh": exports.shdwSolPool,
    "99ZHUQsgxL7K6PHrGNi1gSwawwPr7UA5fbWrYoHQ6qhX": exports.scyUsdcPool,
    E5kSBqTDxFLbLNQaVVtPtnhEYVLMCK2fVSEKoMKL98qR: exports.slcUsdcPool,
    "6c13xsmyk7UaHUWZ2rm1MM3ZdrQRSBkQ9waaG25ridVs": exports.wustSolPool,
    J1KfRtP5y2warpD7LdJhfBLPKoWwSqYuovdArSv1mpQ7: exports.wustUsdcPool,
    "68YVjgPnTUPcBqZyghqvD2WPNsrLKsjYTmBKJzHRr4qd": exports.msolWustPool,
    "8Mh7drLbt3jFJYwp948XyvQscGLaLkChNcaH5wwaAoWA": exports.wlunaWustPool,
    HTZd53fYwYQRyAjiaPsZy9Gf41gobFdqkF4oKe3XLi95: exports.stsolWustPool,
    AzEoVuNJyo9ByoLRZ5t6vav2Zg24vULNVJM41PgCKUqR: exports.jsolUsdcPool,
    CCyDxjdW3G7hPTthTMPTZ4bnhFF19XG6rx2fNiKeRQww: exports.daosolUsdcPool,
    Gx4PoxenyQwhGGnKagAT35iVg4im1iKhJxDWqVhgu6tk: exports.orcaUsdtPool,
    GsfyYHkSgC3Ta6aWR9MjB2sxoBrkGGeR2tAwXbpphf3: exports.orcaWhethPool,
    "7cuu94swKL5PtFQohKMAzyd1mjj65rgMW3GzLY31HCnK": exports.geneUsdcPool,
    "85krvT9DxdYgoFLQDHTAGdvtNuLdAsc4xE5FkVLpN2aR": exports.cmfiUsdcPool,
    HVLyX8mD8YvKgZJ4oB6rXJiCYMLpHKwB6iCiCjE1XwdT: exports.celoUsdcPool,
    Gpzd833qSmv3kXpQmxEaqkrZTXZaRjhNAoqhf61qAhTG: exports.ftmUsdcPool,
    DFpLFcQZqDKykyDePgip4r6MExVmBKWqTa12ezq6qxUY: exports.btcOrcaPool,
    cL5WhffCYFRLM4We8VS2W684kM4pHyuvEDwp8Ddw48k: exports.hbbUsdcPool,
    FkKzu2HeMJZf4oHwoYPxLGVy3net5Jq8HAfnA5VqETgk: exports.hbbSolPool,
    "2Reqt4Sw9xNY8BoJ3EZLpFu5yVgNxFrbw8M3KiJpPn6o": exports.sbUsdcPool,
    "4ni1nho89cDKAQ9ddbNQA9ieLYpzvJVmJpuogu5Ct5ur": exports.stsolUsdtPool,
    H7gyTmNCDXkD8MGMqnxqoD8ANszjcju4tjT6ERZ5dakf: exports.seededUsdcPool,
    "3hksYA17VxgiKSeihjnZkBbjc2CTbEBfvDCYgQhojTo5": exports.audioUsdcPool,
    AaZRnJAnDyJyPD9uPJpJ8bzBGDCEi6jtBpUf92xErWPp: exports.mmaUsdcPool,
    "9wPhuYapychVDSxmXqCZxy2Ka8Lmav4SHM72si8bfraV": exports.onesolSolPool,
    Eho8h1BcoG5QWU7X9FzJafw5ErKUXtR2LobAJJZfWff4: exports.puffSolPool,
    "4iyU77yZbg8iD344vbwruAuDAf9i1EVV3FhZJDnWStBE": exports.saoUsdcPool,
    "3dXdXg5HPyZ73GFC9LkSn3thdJUGeXWB8iSTHs5UcqiH": exports.srlyv2SolPool,
    "2LYgm6nGXmSSjfoEriPuYeGoNiWNxUs7n3rnTbDWN5c7": exports.zbcUsdcPool,
    CFxQF5kNAtbbDj298Xr47Sf4mkSyuzWpRH97hrdQ6kxi: exports.gmtUsdcPool,
    DdAFNvDxtEHCgKj3JAM64zCKfMWhs4J9wEmRrjUAFiME: exports.novaUsdcPool,
    "7n2YW9qLkhGFArdZPLoF4hYPE2zw7xCACkVPXrUWnLuo": exports.hbbUsdhPool,
    "6atKbS2Xz5vu7cqWBNk8KYkuakRzckZ9nvtUKf2k8Sc3": exports.takiSrlyv2Pool,
    "5vhh9ZnD9vnahRhFLP1EUEyYRSzvJwgw9U2xygsSJSrp": exports.zigUsdcPool,
    HfRgvhgscGX5GaP3rUrZAhh7gS4aJ2UQ7rNVX976rG6P: exports.srlySolPool,
    "3xaK5aWWLNRB73xUVX3cusLhDp65mTvP4fwW5Jwxakgs": exports.takiSrlyPool,
    "4jjQSgFx33DUb1a7pgPsi3FbtZXDQ94b6QywjNK3NtZw": exports.stsolSolPool,
    HYp9v7cY4wAxSsa6ijztQQ3GQ8iTttuG5vu8JNBDHoNh: exports.btcStsolPool,
    FWurFWADrgmhb6Y44LEaCMnEHS2Tu3QGqd9oBcZtr8gT: exports.stsolWhethPool,
};
