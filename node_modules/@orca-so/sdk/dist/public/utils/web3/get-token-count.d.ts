import { u64 } from "@solana/spl-token";
import { Connection } from "@solana/web3.js";
import { OrcaPoolToken } from "../..";
import { OrcaPoolParams } from "../../../model/orca/pool/pool-types";
export declare type PoolTokenCount = {
    inputTokenCount: u64;
    outputTokenCount: u64;
};
export declare function getTokenCount(connection: Connection, poolParams: OrcaPoolParams, inputPoolToken: OrcaPoolToken, outputPoolToken: OrcaPoolToken): Promise<PoolTokenCount>;
