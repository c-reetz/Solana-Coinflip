"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrcaFactory = void 0;
const __1 = require("..");
const constants_1 = require("../constants");
const devnet_1 = require("../constants/devnet");
const devnet_2 = require("../public/devnet");
const orca_farm_1 = require("./orca/farm/orca-farm");
const orca_pool_1 = require("./orca/pool/orca-pool");
class OrcaFactory {
    getPool(connection, network, config) {
        if (network === __1.Network.DEVNET) {
            const devnetConfig = (0, devnet_2.getDevnetPool)(config);
            return new orca_pool_1.OrcaPoolImpl(connection, network, devnet_1.orcaDevnetPoolConfigs[devnetConfig]);
        }
        return new orca_pool_1.OrcaPoolImpl(connection, network, constants_1.orcaPoolConfigs[config]);
    }
    getFarm(connection, network, config) {
        if (network === __1.Network.DEVNET) {
            const devnetConfig = (0, devnet_2.getDevnetFarm)(config);
            return new orca_farm_1.OrcaFarmImpl(connection, devnet_1.orcaDevnetFarmConfigs[devnetConfig]);
        }
        return new orca_farm_1.OrcaFarmImpl(connection, constants_1.orcaFarmConfigs[config]);
    }
}
exports.OrcaFactory = OrcaFactory;
