// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
  clusterApiUrl,
  Keypair,
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
import {
  promiseWithTimeout,
  SwitchboardTestContext,
} from "@switchboard-xyz/sbv2-utils";
// eslint-disable-next-line import/no-extraneous-dependencies
import bs58 from "bs58";
import type { NextApiRequest, NextApiResponse } from "next";
import IDL_JSON from "../../models/idl.json";
import { VrfClient } from "../../models/VrfClient";

type Data = {
  VrfTxn: string;
  Error: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  return new Promise(async (resolve, reject) => {
    //todo: this file seems like it has glitched at some point, it would be a good idea for you to move it to a server, and then just put this in a loop every 5-10 sec, depending on how often you want the VRF to update
    try {
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
      let switchboard: SwitchboardTestContext;
      try {
        switchboard = await SwitchboardTestContext.loadDevnetQueue(
          provider,
          "F8ce7MsckeZAbAGmxjJNetxYXQa9mKr9nnrC3qKubyYy",
          5_000_000 // .005 wSOL
        );
        console.log("devnet detected");
        return;
      } catch (error: any) {
        console.log(`Error: SBV2 Devnet - ${error.message}`);
        // console.error(error);
      }
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

      const escrow = new PublicKey(
        "zndzewboJNQfSD2hcf5MvnKjH2Xb3hZJNqBJHDq2Dpn"
      );

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
      const result = await awaitCallback(
        program.provider.connection,
        vrfClientKey,
        55_000
      );

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      res.status(200).json({ VrfTxn: result.toString() });
      resolve(res);
    } catch (e: any) {
      res.status(200).json({ VrfTxn: "", Error: e.toString() });
      reject(res);
    }
  });
}
async function awaitCallback(
  connection: anchor.web3.Connection,
  vrfClientKey: anchor.web3.PublicKey,
  timeoutInterval: number,
  errorMsg = "Timed out waiting for VRF Client callback"
) {
  let ws: number | undefined = undefined;
  const result: anchor.BN = await promiseWithTimeout(
    timeoutInterval,
    new Promise(
      (
        resolve: (result: anchor.BN) => void,
        reject: (reason: string) => void
      ) => {
        ws = connection.onAccountChange(
          vrfClientKey,
          async (
            accountInfo: anchor.web3.AccountInfo<Buffer>,
            context: anchor.web3.Context
          ) => {
            const clientState = VrfClient.decode(accountInfo.data);
            if (clientState.result.gt(new anchor.BN(0))) {
              resolve(clientState.result);
            }
          }
        );
      }
    ).finally(async () => {
      if (ws) {
        await connection.removeAccountChangeListener(ws);
      }
      ws = undefined;
    }),
    new Error(errorMsg)
  ).finally(async () => {
    if (ws) {
      await connection.removeAccountChangeListener(ws);
    }
    ws = undefined;
  });

  return result;
}
