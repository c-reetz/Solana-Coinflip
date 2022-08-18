import { u64 } from "@solana/spl-token";
import Decimal from "decimal.js";
import { OrcaToken, OrcaU64 } from "../..";
import { OrcaFarmParams } from "../../../model/orca/farm/farm-types";
import { OrcaPoolParams } from "../../../model/orca/pool/pool-types";
export declare const ZERO: u64;
export declare const ONE: u64;
export declare class U64Utils {
    static toTokenU64(input: Decimal | OrcaU64, token: OrcaToken, varName: string): u64;
    static toPoolU64(input: Decimal | OrcaU64, pool: OrcaPoolParams, varName: string): u64;
    static toFarmU64(input: Decimal | OrcaU64, farm: OrcaFarmParams, varName: string): u64;
    static ceilingDivision(dividend: u64, divisor: u64): [u64, u64];
}
