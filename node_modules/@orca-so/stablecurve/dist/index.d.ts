import { u64 } from "@solana/spl-token";
export declare function computeOutputAmount(inputAmount: u64, inputPoolAmount: u64, outputPoolAmount: u64, amp: u64): u64;
export declare function computeInputAmount(outputAmount: u64, inputPoolAmount: u64, outputPoolAmount: u64, amp: u64): u64;
export declare function computeEqualInput(tokenAPoolAmount: u64, tokenBPoolAmount: u64, amp: u64): u64;
export declare function computeBaseOutputAmount(inputAmount: u64, inputPoolAmount: u64, outputPoolAmount: u64, amp: u64): u64;
export declare function computeSingleTokenDepositOutput(inputAmount: u64, isA: boolean, tokenAPoolAmount: u64, tokenBPoolAmount: u64, amp: u64, poolTokenSupply: u64): u64;
