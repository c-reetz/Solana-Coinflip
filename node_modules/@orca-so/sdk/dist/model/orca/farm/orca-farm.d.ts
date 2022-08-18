import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import Decimal from "decimal.js";
import { OrcaU64, TransactionPayload } from "../../..";
import { OrcaFarm } from "../../../public/";
import { OrcaFarmParams } from "./farm-types";
export declare class OrcaFarmImpl implements OrcaFarm {
    private connection;
    private farmParams;
    constructor(connection: Connection, config: OrcaFarmParams);
    getFarmBalance(owner: PublicKey): Promise<OrcaU64>;
    getFarmSupply(): Promise<OrcaU64>;
    deposit(owner: Keypair | PublicKey, baseTokenAmount: Decimal | OrcaU64): Promise<TransactionPayload>;
    withdraw(owner: Keypair | PublicKey, baseTokenAmount: Decimal | OrcaU64): Promise<TransactionPayload>;
    getHarvestableAmount(ownerPublicKey: PublicKey): Promise<OrcaU64>;
    harvest(owner: Keypair | PublicKey): Promise<TransactionPayload>;
    getDailyEmissions(): Promise<OrcaU64>;
}
