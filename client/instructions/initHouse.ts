import * as borsh from "@project-serum/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PublicKey, TransactionInstruction } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface InitHouseArgs {
  payoutAmount: number
}

export interface InitHouseAccounts {
  user: PublicKey
  vault: PublicKey
  feeAccount: PublicKey
  systemProgram: PublicKey
}

export const layout = borsh.struct([borsh.u8("payoutAmount")])

export function initHouse(args: InitHouseArgs, accounts: InitHouseAccounts) {
  const keys = [
    { pubkey: accounts.user, isSigner: true, isWritable: true },
    { pubkey: accounts.vault, isSigner: false, isWritable: true },
    { pubkey: accounts.feeAccount, isSigner: false, isWritable: false },
    { pubkey: accounts.systemProgram, isSigner: false, isWritable: false },
  ]
  const identifier = Buffer.from([179, 199, 91, 87, 163, 192, 163, 183])
  const buffer = Buffer.alloc(1000)
  const len = layout.encode(
    {
      payoutAmount: args.payoutAmount,
    },
    buffer
  )
  const data = Buffer.concat([identifier, buffer]).slice(0, 8 + len)
  const ix = new TransactionInstruction({ keys, programId: PROGRAM_ID, data })
  return ix
}
