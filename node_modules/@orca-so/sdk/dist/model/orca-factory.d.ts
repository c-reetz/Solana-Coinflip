import { Connection } from "@solana/web3.js";
import { OrcaPoolConfig, OrcaPool, OrcaFarmConfig, OrcaFarm, Network } from "..";
export declare class OrcaFactory {
    getPool(connection: Connection, network: Network, config: OrcaPoolConfig): OrcaPool;
    getFarm(connection: Connection, network: Network, config: OrcaFarmConfig): OrcaFarm;
}
