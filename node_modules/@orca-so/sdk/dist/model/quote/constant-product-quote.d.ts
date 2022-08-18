import { u64 } from "@solana/spl-token";
import { Quote } from "../../public";
import { QuotePoolParams } from "./quote-builder";
export declare class ConstantProductPoolQuoteBuilder {
    buildQuote(params: QuotePoolParams, inputTradeAmount: u64): Quote;
}
