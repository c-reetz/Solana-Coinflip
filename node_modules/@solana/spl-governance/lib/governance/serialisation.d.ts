/// <reference types="node" />
import { TransactionInstruction } from '@solana/web3.js';
import { InstructionData, GovernanceAccountClass, GovernanceAccountType } from './accounts';
export declare const serializeInstructionToBase64: (instruction: TransactionInstruction) => string;
export declare const createInstructionData: (instruction: TransactionInstruction) => InstructionData;
export declare const GOVERNANCE_SCHEMA_V1: Map<Function, any>;
export declare const GOVERNANCE_SCHEMA: Map<Function, any>;
export declare function getGovernanceSchema(programVersion: number): Map<Function, any>;
export declare function getGovernanceSchemaForAccount(accountType: GovernanceAccountType): Map<Function, any>;
export declare const GovernanceAccountParser: (classType: GovernanceAccountClass) => (pubKey: import("@solana/web3.js").PublicKey, info: import("@solana/web3.js").AccountInfo<Buffer>) => import("..").ProgramAccount<any>;
export declare function getInstructionDataFromBase64(instructionDataBase64: string): InstructionData;
//# sourceMappingURL=serialisation.d.ts.map