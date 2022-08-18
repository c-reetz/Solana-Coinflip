"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAssociatedTokenAccountInstruction = exports.createWSOLAccountInstructions = void 0;
const spl_token_1 = require("@solana/spl-token");
const web3_js_1 = require("@solana/web3.js");
const __1 = require("../..");
const createWSOLAccountInstructions = (owner, solMint, amountIn, rentExemptLamports) => {
    const tempAccount = new web3_js_1.Keypair();
    const createAccountInstruction = web3_js_1.SystemProgram.createAccount({
        fromPubkey: owner,
        newAccountPubkey: tempAccount.publicKey,
        lamports: amountIn.toNumber() + rentExemptLamports,
        space: spl_token_1.AccountLayout.span,
        programId: spl_token_1.TOKEN_PROGRAM_ID,
    });
    const initAccountInstruction = spl_token_1.Token.createInitAccountInstruction(spl_token_1.TOKEN_PROGRAM_ID, solMint, tempAccount.publicKey, owner);
    const closeWSOLAccountInstruction = spl_token_1.Token.createCloseAccountInstruction(spl_token_1.TOKEN_PROGRAM_ID, tempAccount.publicKey, owner, owner, []);
    return {
        address: tempAccount.publicKey,
        instructions: [createAccountInstruction, initAccountInstruction],
        cleanupInstructions: [closeWSOLAccountInstruction],
        signers: [tempAccount],
    };
};
exports.createWSOLAccountInstructions = createWSOLAccountInstructions;
function createAssociatedTokenAccountInstruction(associatedTokenAddress, fundSource, destination, tokenMint, fundAddressOwner) {
    const systemProgramId = new web3_js_1.PublicKey("11111111111111111111111111111111");
    const keys = [
        {
            pubkey: fundSource,
            isSigner: true,
            isWritable: true,
        },
        {
            pubkey: associatedTokenAddress,
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: destination,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: tokenMint,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: systemProgramId,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: spl_token_1.TOKEN_PROGRAM_ID,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: web3_js_1.SYSVAR_RENT_PUBKEY,
            isSigner: false,
            isWritable: false,
        },
    ];
    const createATAInstruction = new web3_js_1.TransactionInstruction({
        keys,
        programId: __1.SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
        data: Buffer.from([]),
    });
    return {
        instructions: [createATAInstruction],
        cleanupInstructions: [],
        signers: fundAddressOwner.signer ? [fundAddressOwner.signer] : [],
    };
}
exports.createAssociatedTokenAccountInstruction = createAssociatedTokenAccountInstruction;
