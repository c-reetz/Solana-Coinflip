"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDevnetFarm = exports.getDevnetPool = void 0;
const __1 = require("..");
const config_1 = require("./farms/config");
const config_2 = require("./pools/config");
function getDevnetPool(config) {
    const entry = Object.entries(__1.OrcaPoolConfig).find((arr) => arr[1] === config);
    if (!entry) {
        throw new Error("Invalid OrcaPoolConfig");
    }
    const key = entry[0];
    if (!isOrcaDevnetPoolConfig(key)) {
        throw new Error(`${key} does not exist in devnet`);
    }
    return config_2.OrcaPoolConfig[key];
}
exports.getDevnetPool = getDevnetPool;
function getDevnetFarm(config) {
    const entry = Object.entries(__1.OrcaFarmConfig).find((arr) => arr[1] === config);
    if (!entry) {
        throw new Error("Invalid OrcaFarmConfig");
    }
    const key = entry[0];
    if (!isOrcaDevnetFarmConfig(key)) {
        throw new Error(`${key} does not exist in devnet`);
    }
    return config_1.OrcaFarmConfig[key];
}
exports.getDevnetFarm = getDevnetFarm;
/*** Type guards ***/
function isOrcaDevnetPoolConfig(key) {
    return config_2.OrcaPoolConfig[key] !== undefined;
}
function isOrcaDevnetFarmConfig(key) {
    return config_1.OrcaFarmConfig[key] !== undefined;
}
