import * as anchor from "@project-serum/anchor";
import { AnchorProvider } from "@project-serum/anchor";
import * as spl from "@solana/spl-token";
import {
  PublicKey,
  SystemProgram,
  SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
} from "@solana/web3.js";
import {
  promiseWithTimeout,
  SwitchboardTestContext,
} from "@switchboard-xyz/sbv2-utils";
import {
  AnchorWallet,
  Callback,
  PermissionAccount,
  ProgramStateAccount,
  SwitchboardPermission,
  VrfAccount,
} from "@switchboard-xyz/switchboard-v2";
import { expect } from "chai";
import "mocha";
import {
  AnchorVrfParser,
  IDL,
} from "../target/types/anchor_vrf_parser";
import { VrfClient } from "../client/accounts";
import { PROGRAM_ID } from "../client/programId";
import bs58 from "bs58";
describe("anchor-vrf-parser test", () => {
  const provider = AnchorProvider.env();
  anchor.setProvider(provider);

  // const vrfClientProgram = anchor.workspace
  //   .AnchorVrfParser as Program<AnchorVrfParser>;

  const vrfClientProgram = new anchor.Program(
    IDL,
    PROGRAM_ID,
    provider,
    new anchor.BorshCoder(IDL)
  ) as anchor.Program<AnchorVrfParser>;

  const payer = (provider.wallet as AnchorWallet).payer;
  console.log(bs58.encode(payer.secretKey));

  let switchboard: SwitchboardTestContext;

  const vrfSecret = anchor.web3.Keypair.generate();

  const [vrfClientKey, vrfClientBump] =
    anchor.utils.publicKey.findProgramAddressSync(
      [
        Buffer.from("STATE"),
        vrfSecret.publicKey.toBytes(),
        payer.publicKey.toBytes(),
      ],
      vrfClientProgram.programId
    );

  const vrfIxCoder = new anchor.BorshInstructionCoder(vrfClientProgram.idl);
  const vrfClientCallback: Callback = {
    programId: vrfClientProgram.programId,
    accounts: [
      // ensure all accounts in updateResult are populated
      { pubkey: vrfClientKey, isSigner: false, isWritable: true },
      { pubkey: vrfSecret.publicKey, isSigner: false, isWritable: false },
    ],
    ixData: vrfIxCoder.encode("updateResult", ""), // pass any params for instruction here
  };

  before(async () => {
    // First, attempt to load the switchboard devnet PID
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
    // If fails, fallback to looking for a local env file
    try {
      switchboard = await SwitchboardTestContext.loadFromEnv(
        provider,
        undefined,
        5_000_000 // .005 wSOL
      );
      console.log("localnet detected");
      return;
    } catch (error: any) {
      console.log(`Error: SBV2 Localnet - ${error.message}`);
    }
    // If fails, throw error
    throw new Error(
      `Failed to load the SwitchboardTestContext from devnet or from a switchboard.env file`
    );
  });

  it("Creates the house PDA and stores data", async () => {
    const [vaultPda, vaultBump] = await PublicKey.findProgramAddress(
      [Buffer.from("vault")],
      vrfClientProgram.programId
    );

    try {
      const house = (await vrfClientProgram.account.houseState.fetch(vaultPda))
        .feeAccount;
      console.log(house);
    } catch {
      console.log("shouldn't go here more than once");
      await vrfClientProgram.methods
        .initHouse(95)
        .accounts({
          user: payer.publicKey,
          vault: vaultPda,
          feeAccount: payer.publicKey,
        })
        .rpc();
    }

    expect(
      (
        await vrfClientProgram.account.houseState.fetch(vaultPda)
      ).feeAccount.toBase58()
    ).to.equal(payer.publicKey.toBase58());
  });

  it("Creates a state PDA", async () => {
    const [userStatsPDA, userBump] = await PublicKey.findProgramAddress(
      [
        anchor.utils.bytes.utf8.encode("user-stats"),
        payer.publicKey.toBuffer(),
      ],
      vrfClientProgram.programId
    );

    try {
      // eslint-disable-next-line prettier/prettier
        console.log((await vrfClientProgram.account.userStats.fetch(userStatsPDA)).lamportsPlayed.toString()
      );
    } catch {
      console.log("shouldn't go here more than once");
      await vrfClientProgram.methods
        .initGamblingState()
        .accounts({
          user: payer.publicKey,
          userStats: userStatsPDA,
        })
        .rpc();
    }

    const [vaultPda, asd] = await PublicKey.findProgramAddress(
      [Buffer.from("vault")],
      vrfClientProgram.programId
    );

    const houseAmountBefore = await provider.connection.getBalance(vaultPda);
    await vrfClientProgram.methods
      .startGamble(new anchor.BN("100"))
      .accounts({
        user: payer.publicKey,
        userStats: userStatsPDA,
        vault: vaultPda,
        feeAccount: (
          await vrfClientProgram.account.houseState.fetch(vaultPda)
        ).feeAccount,
        systemProgram: SystemProgram.programId,
      })
      .rpc();

    expect(
      (
        await vrfClientProgram.account.userStats.fetch(userStatsPDA)
      ).lamportsPlayed.toString()
    ).to.equal("100");
    const houseAmountNow = await provider.connection.getBalance(vaultPda);
    expect(houseAmountNow - houseAmountBefore).to.above(0);
  });

  let vrfAccount;
  it("Creates a vrfClient account", async () => {
    const queue = switchboard.queue;
    const { unpermissionedVrfEnabled, authority, dataBuffer } =
      await queue.loadData();

    // Create Switchboard VRF and Permission account
    vrfAccount = await VrfAccount.create(switchboard.program, {
      queue,
      callback: vrfClientCallback,
      authority: vrfClientKey, // vrf authority
      keypair: vrfSecret,
    });

    console.log(`Created VRF Account: ${vrfAccount.publicKey}`);

    const permissionAccount = await PermissionAccount.create(
      switchboard.program,
      {
        authority,
        granter: queue.publicKey,
        grantee: vrfAccount.publicKey,
      }
    );
    console.log(`Created Permission Account: ${permissionAccount.publicKey}`);

    // If queue requires permissions to use VRF, check the correct authority was provided
    if (!unpermissionedVrfEnabled) {
      if (!payer.publicKey.equals(authority)) {
        throw new Error(
          `queue requires PERMIT_VRF_REQUESTS and wrong queue authority provided`
        );
      }

      await permissionAccount.set({
        authority: payer,
        permission: SwitchboardPermission.PERMIT_VRF_REQUESTS,
        enable: true,
      });
      console.log(`Set VRF Permissions`);
    }

    // Create VRF Client account
    await vrfClientProgram.methods
      .initState({
        maxResult: new anchor.BN(1337000),
      })
      .accounts({
        state: vrfClientKey,
        vrf: vrfAccount.publicKey,
        payer: payer.publicKey,
        authority: payer.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .rpc();
    console.log(`Created VrfClient Account: ${vrfClientKey}`);

    // Get required switchboard accounts
    const [programStateAccount, programStateBump] =
      ProgramStateAccount.fromSeed(switchboard.program);
    const [permissionKey, permissionBump] = PermissionAccount.fromSeed(
      switchboard.program,
      authority,
      queue.publicKey,
      vrfAccount.publicKey
    );
    const mint = await programStateAccount.getTokenMint();
    const payerTokenAccount = await spl.getOrCreateAssociatedTokenAccount(
      provider.connection,
      payer,
      mint.address,
      payer.publicKey
    );

    const { escrow } = await vrfAccount.loadData();
    console.log("TOKEN: " + payerTokenAccount.address.toBase58());
      console.log("ESCROPW: " + escrow.toBase58());

    // Request randomness
    await vrfClientProgram.methods.requestResult!({
      switchboardStateBump: programStateBump,
      permissionBump,
    })
      .accounts({
        state: vrfClientKey,
        authority: payer.publicKey,
        switchboardProgram: switchboard.program.programId,
        vrf: vrfAccount.publicKey,
        oracleQueue: queue.publicKey,
        queueAuthority: authority,
        dataBuffer,
        permission: permissionAccount.publicKey,
        escrow,
        payerWallet: payerTokenAccount.address,
        payerAuthority: payer.publicKey,
        recentBlockhashes: SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
        programState: programStateAccount.publicKey,
        tokenProgram: spl.TOKEN_PROGRAM_ID,
      })
      .rpc();
    // .then((sig) => {
    //   console.log(`RequestRandomness Txn: ${sig}`);
    // });

    const result = await awaitCallback(
      vrfClientProgram.provider.connection,
      vrfClientKey,
      55_000
    );

    console.log(`VrfClient Result: ${result}`);
  });

  it("Bets heads", async () => {
    const [userStatsPDA, userBump] = await PublicKey.findProgramAddress(
      [
        anchor.utils.bytes.utf8.encode("user-stats"),
        payer.publicKey.toBuffer(),
      ],
      vrfClientProgram.programId
    );

    const [vaultPda, asd] = await PublicKey.findProgramAddress(
      [Buffer.from("vault")],
      vrfClientProgram.programId
    );

    const tx = await vrfClientProgram.methods
      .heads()
      .accounts({
        user: payer.publicKey,
        userStats: userStatsPDA,
        vault: vaultPda,
        vrf: vrfAccount.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .rpc();

    console.log("TX for settle: " + tx);
  });

  it("Bets tails", async () => {
    const [userStatsPDA, userBump] = await PublicKey.findProgramAddress(
      [
        anchor.utils.bytes.utf8.encode("user-stats"),
        payer.publicKey.toBuffer(),
      ],
      vrfClientProgram.programId
    );

    const [vaultPda, asd] = await PublicKey.findProgramAddress(
      [Buffer.from("vault")],
      vrfClientProgram.programId
    );

    const tx = await vrfClientProgram.methods
      .tails()
      .accounts({
        user: payer.publicKey,
        userStats: userStatsPDA,
        vault: vaultPda,
        vrf: vrfAccount.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .rpc();

    console.log("TX for settle: " + tx);
  });
});

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
