import { Connection, PublicKey } from "@solana/web3.js";
import { Instruction } from "../..";
import { TransactionPayload } from "../../models";
import { Owner } from "../key-utils";
export declare class TransactionBuilder {
    private connection;
    private feePayer;
    private instructions;
    private owner;
    constructor(connection: Connection, feePayer: PublicKey, owner: Owner);
    addInstruction(instruction: Instruction): TransactionBuilder;
    build(): Promise<TransactionPayload>;
}
