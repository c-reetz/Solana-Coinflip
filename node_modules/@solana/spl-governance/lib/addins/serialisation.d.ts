/// <reference types="node" />
/// <reference types="@solana/web3.js" />
import { GovernanceAddinAccountClass } from './accounts';
export declare const GOVERNANCE_ADDINS_SCHEMA: Map<any, any>;
export declare const GovernanceAddinAccountParser: (classType: GovernanceAddinAccountClass) => (pubKey: import("@solana/web3.js").PublicKey, info: import("@solana/web3.js").AccountInfo<Buffer>) => import("..").ProgramAccount<any>;
//# sourceMappingURL=serialisation.d.ts.map