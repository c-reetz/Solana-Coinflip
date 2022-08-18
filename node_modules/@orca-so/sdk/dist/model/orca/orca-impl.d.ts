import { Connection } from "@solana/web3.js";
import { Orca, OrcaFarm, OrcaPool, OrcaPoolConfig, OrcaFarmConfig, Network } from "../../public";
export declare class OrcaImpl implements Orca {
    private connection;
    private network;
    private factory;
    constructor(connection: Connection, network: Network);
    getPool(pool: OrcaPoolConfig): OrcaPool;
    getFarm(farm: OrcaFarmConfig): OrcaFarm;
}
