import { u64 } from "@solana/spl-token";
import { QuotePoolParams } from "./quote-builder";
import { Quote } from "../../public";
export declare class StablePoolQuoteBuilder {
    buildQuote(params: QuotePoolParams, inputTradeAmount: u64): Quote;
}
