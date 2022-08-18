import { u64 } from "@solana/spl-token";
import BN from "bn.js";
export declare function toBNWithDecimals(amount: number, decimals?: number): BN;
export declare function toU64WithDecimals(amount: number, decimals?: number): u64;
export declare const ZERO: u64;
