import { Connection } from "@solana/web3.js";
import { Network } from "..";
import { Orca } from "./types";
/**
 * Retrieve an instance of the Orca SDK
 * @param connection Solana connection class
 * @returns An instance of Orca SDK
 */
export declare function getOrca(connection: Connection, network?: Network): Orca;
