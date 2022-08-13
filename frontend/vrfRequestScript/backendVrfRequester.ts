// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
  clusterApiUrl,
  PublicKey,
  SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
} from "@solana/web3.js";
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  PermissionAccount,
  ProgramStateAccount,
} from "@switchboard-xyz/switchboard-v2";
// eslint-disable-next-line import/no-extraneous-dependencies
import * as anchor from "@project-serum/anchor";
// eslint-disable-next-line import/no-extraneous-dependencies
import * as spl from "@solana/spl-token";
// eslint-disable-next-line import/no-extraneous-dependencies
import { SwitchboardTestContext } from "@switchboard-xyz/sbv2-utils";
// eslint-disable-next-line import/no-extraneous-dependencies
import bs58 from "bs58";
import IDL_JSON from "../../../../../target/idl/anchor_vrf_parser.json";

async function handler() {
  return new Promise(async (resolve, reject) => {
    //todo: this file seems like it has glitched at some point, it would be a good idea for you to move it to a server, and then just put this in a loop every 5-10 sec, depending on how often you want the VRF to update
    const authorityKeypair = anchor.web3.Keypair.fromSecretKey(
      bs58.decode(
        "3jSAEfJ8LKzBHLcV4MBSiHkE9LaY1QDCWtbfi8CTKRW7qQtxXvK1yuHtwazyGUU23MgWyNf511ijpWbMRGouyEaE" // SWITCH THIS OUT WITH YOUR FEE ACCOUNT - OR YOU CAN MAKE A NEW TX SO USER PAYS VRF FEE: https://docs.switchboard.xyz/developers/randomness
      )
    );

    const connection = new anchor.web3.Connection(clusterApiUrl("devnet"));
    const provider = new anchor.AnchorProvider(
      connection,
      new anchor.Wallet(authorityKeypair),
      {
        preflightCommitment: "processed",
      }
    );
    const program = new anchor.Program(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion,@typescript-eslint/ban-ts-comment
      // @ts-ignore
      IDL_JSON!,
      new PublicKey("86kL1NMhYsMedrYmUbYa2XPWQFNNzEoPjEZQzxjgARw7"),
      provider
    ); //todo: remember to replace with your own publickey for program
    const switchboard = await SwitchboardTestContext.loadDevnetQueue(
      provider,
      "F8ce7MsckeZAbAGmxjJNetxYXQa9mKr9nnrC3qKubyYy",
      5_000_000 // .005 wSOL
    );

    const queue = switchboard.queue;
    const { unpermissionedVrfEnabled, authority, dataBuffer } =
      await queue.loadData();
    // Get required switchboard accounts
    const [programStateAccount, programStateBump] =
      ProgramStateAccount.fromSeed(switchboard.program);
    const vrfAccount = new PublicKey(
      "3SFft9ciPxaCjTK5gm1QmhcBkgkt7cnLCFtmpRtyJZKQ"
    );
    const permissionAccount = new PublicKey(
      "D6nHUScSkA2ADgNvc1ok7EDazHSSejXJ6mL325ZmASTr"
    );
    const vrfClientKey = new PublicKey(
      "6w4v8dQLLa5XNrmN3gHDC25Bptc4aVkAPajhcZCUzHUa"
    );
    const [permissionKey, permissionBump] = PermissionAccount.fromSeed(
      switchboard.program,
      authority,
      queue.publicKey,
      vrfAccount
    );
    const mint = await programStateAccount.getTokenMint();

    const payerTokenAccount = new PublicKey(
      "7CockyQhxZ1tza8jgJF59XFqdx7NTRPrTZhrgefxQcoT"
    );

    const escrow = new PublicKey("zndzewboJNQfSD2hcf5MvnKjH2Xb3hZJNqBJHDq2Dpn");

    // Request randomness
    await program.methods.requestResult!({
      switchboardStateBump: programStateBump,
      permissionBump,
    })
      .accounts({
        state: vrfClientKey,
        authority: authorityKeypair.publicKey,
        switchboardProgram: switchboard.program.programId,
        vrf: vrfAccount,
        oracleQueue: queue.publicKey,
        queueAuthority: authority,
        dataBuffer,
        permission: permissionAccount,
        escrow,
        payerWallet: payerTokenAccount,
        payerAuthority: authorityKeypair.publicKey,
        recentBlockhashes: SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
        programState: programStateAccount.publicKey,
        tokenProgram: spl.TOKEN_PROGRAM_ID,
      })
      .rpc();
  });
}
while (true) {
  setTimeout(function () {
    handler().then();
  }, 10000); //run every 20sec, be aware it can take some time for VRF to be calculated.
}
