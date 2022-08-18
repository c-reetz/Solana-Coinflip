import { OrcaPoolConfig, OrcaFarmConfig } from "..";
import { OrcaFarmConfig as OrcaDevnetFarmConfig } from "./farms/config";
import { OrcaPoolConfig as OrcaDevnetPoolConfig } from "./pools/config";
export declare function getDevnetPool(config: OrcaPoolConfig): OrcaDevnetPoolConfig;
export declare function getDevnetFarm(config: OrcaFarmConfig): OrcaDevnetFarmConfig;
