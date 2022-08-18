import { OrcaPoolParams } from "../../model/orca/pool/pool-types";
export declare function getTokens(poolParams: OrcaPoolParams, inputTokenId: string): {
    inputPoolToken: import("..").OrcaPoolToken;
    outputPoolToken: import("..").OrcaPoolToken;
};
