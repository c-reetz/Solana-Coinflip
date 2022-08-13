import {
  useAnchorWallet,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionInstruction,
  TransactionSignature,
} from "@solana/web3.js";
import { FC, useCallback } from "react";
// eslint-disable-next-line import/extensions
import useUserSOLBalanceStore from "../stores/useUserSOLBalanceStore";
// eslint-disable-next-line import/extensions
import { notify } from "../utils/notifications";
// eslint-disable-next-line import/no-extraneous-dependencies
import * as anchor from "@project-serum/anchor";
import IDL_JSON from "../../../../../../../target/idl/anchor_vrf_parser.json";

export const Betting: FC = () => {
  const { connection } = useConnection();
  const { publicKey, signTransaction } = useWallet();
  const { getUserSOLBalance } = useUserSOLBalanceStore();
  const anchorWallet = useAnchorWallet();

  const onClick = useCallback(
    async (side: string) => {
      if (!publicKey) {
        console.log("error", "Wallet not connected!");
        notify({
          type: "error",
          message: "error",
          description: "Wallet not connected!",
        });
        return;
      }

      let signature: TransactionSignature = "";

      try {
        fetch("http://localhost:3000/api/vrf")
          .then((response) => response.json())
          .then((data) => console.log(data)); //todo: if you fix the VRF script inside next, keep this, otherwise just run the backend script.

        const provider = new anchor.AnchorProvider(connection, anchorWallet, {
          preflightCommitment: "processed",
        });
        // Read the generated IDL.
        const program = new anchor.Program(
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion,@typescript-eslint/ban-ts-comment
          // @ts-ignore
          IDL_JSON!,
          new PublicKey("86kL1NMhYsMedrYmUbYa2XPWQFNNzEoPjEZQzxjgARw7"),
          provider
        ); //todo: remember to replace with your own publickey for program
        const [userStatsPDA, userBump] = await PublicKey.findProgramAddress(
          [anchor.utils.bytes.utf8.encode("user-stats"), publicKey.toBuffer()],
          program.programId
        );
        // Check if user has a State PDA
        const recentBlockhash = await connection.getRecentBlockhash();
        try {
          // eslint-disable-next-line prettier/prettier
        console.log((await program.account.userStats.fetch(userStatsPDA)).lamportsPlayed.toString()
          );
        } catch {
          console.log("Creating user PDA");
          const createState = await program.methods
            .initGamblingState()
            .accounts({
              user: publicKey,
              userStats: userStatsPDA,
            })
            .instruction();
          const userPdaCreation = new Transaction().add(createState);
          userPdaCreation.recentBlockhash = recentBlockhash.blockhash;
          userPdaCreation.feePayer = publicKey;
          const signed = await signTransaction(userPdaCreation);
          await connection.sendRawTransaction(signed.serialize());
        }
        const [vaultPda, asd] = await PublicKey.findProgramAddress(
          [Buffer.from("vault")],
          program.programId
        );
        const vrfAccountKey = new PublicKey(
          "3SFft9ciPxaCjTK5gm1QmhcBkgkt7cnLCFtmpRtyJZKQ"
        ); // todo: also switch this out.

        const feeAccount = (await program.account.houseState.fetch(vaultPda))
          .feeAccount;
        const startGamblingTransaction = await program.methods
          .startGamble(new anchor.BN(LAMPORTS_PER_SOL))
          .accounts({
            user: publicKey,
            userStats: userStatsPDA,
            vault: vaultPda,
            feeAccount: feeAccount,
            systemProgram: SystemProgram.programId,
          })
          .instruction();
        let settleGambleTransaction: TransactionInstruction;
        if (side == "heads") {
          settleGambleTransaction = await program.methods
            .heads()
            .accounts({
              user: publicKey,
              userStats: userStatsPDA,
              vault: vaultPda,
              vrf: vrfAccountKey,
              systemProgram: SystemProgram.programId,
            })
            .instruction();
        } else {
          settleGambleTransaction = await program.methods
            .tails()
            .accounts({
              user: publicKey,
              userStats: userStatsPDA,
              vault: vaultPda,
              vrf: vrfAccountKey,
              systemProgram: SystemProgram.programId,
            })
            .instruction();
        }

        const transaction = new Transaction()
          .add(startGamblingTransaction)
          .add(settleGambleTransaction);
        transaction.recentBlockhash = recentBlockhash.blockhash;
        transaction.feePayer = publicKey;
        const signed = await signTransaction(transaction);

        signature = await connection.sendRawTransaction(signed.serialize());
        await connection.confirmTransaction(signature, "confirmed");
        const txn = await connection.getTransaction(signature, {
          commitment: "confirmed",
        });
        const status = txn.meta.logMessages[12];
        console.log(status);
        if (status.includes("won")) {
          notify({
            type: "success",
            message: "You won!",
            txid: signature,
          });
        } else {
          notify({
            type: "success",
            message: "You lost :(",
            txid: signature,
          });
        }
        getUserSOLBalance(publicKey, connection);
      } catch (error: any) {
        notify({
          type: "error",
          message: `Gamble failed!`,
          description: error?.message,
          txid: signature,
        });
        console.log("error", `Gamble failed! ${error?.message}`, signature);
      }
    },
    [publicKey, connection, getUserSOLBalance]
  );

  return (
    <div>
      <button
        className="px-8 m-2 btn animate-pulse bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ..."
        onClick={() => onClick("heads")}
      >
        <span>Bet 1 sol on heads </span>
      </button>
      <button
        className="px-8 m-2 btn animate-pulse bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ..."
        onClick={() => onClick("tails")}
      >
        <span>Bet 1 sol on tails </span>
      </button>
    </div>
  );
};
