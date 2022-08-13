import * as borsh from "@project-serum/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import { Connection, PublicKey } from "@solana/web3.js"
import { PROGRAM_ID } from "../programId"

export interface HouseStateFields {
  feeAccount: PublicKey
  feeAmount: number
  bump: number
}

export interface HouseStateJSON {
  feeAccount: string
  feeAmount: number
  bump: number
}

export class HouseState {
  readonly feeAccount: PublicKey
  readonly feeAmount: number
  readonly bump: number

  static readonly discriminator = Buffer.from([
    160, 248, 45, 36, 81, 236, 18, 77,
  ])

  static readonly layout = borsh.struct([
    borsh.publicKey("feeAccount"),
    borsh.u8("feeAmount"),
    borsh.u8("bump"),
  ])

  constructor(fields: HouseStateFields) {
    this.feeAccount = fields.feeAccount
    this.feeAmount = fields.feeAmount
    this.bump = fields.bump
  }

  static async fetch(
    c: Connection,
    address: PublicKey
  ): Promise<HouseState | null> {
    const info = await c.getAccountInfo(address)

    if (info === null) {
      return null
    }
    if (!info.owner.equals(PROGRAM_ID)) {
      throw new Error("account doesn't belong to this program")
    }

    return this.decode(info.data)
  }

  static async fetchMultiple(
    c: Connection,
    addresses: PublicKey[]
  ): Promise<Array<HouseState | null>> {
    const infos = await c.getMultipleAccountsInfo(addresses)

    return infos.map((info) => {
      if (info === null) {
        return null
      }
      if (!info.owner.equals(PROGRAM_ID)) {
        throw new Error("account doesn't belong to this program")
      }

      return this.decode(info.data)
    })
  }

  static decode(data: Buffer): HouseState {
    if (!data.slice(0, 8).equals(HouseState.discriminator)) {
      throw new Error("invalid account discriminator")
    }

    const dec = HouseState.layout.decode(data.slice(8))

    return new HouseState({
      feeAccount: dec.feeAccount,
      feeAmount: dec.feeAmount,
      bump: dec.bump,
    })
  }

  toJSON(): HouseStateJSON {
    return {
      feeAccount: this.feeAccount.toString(),
      feeAmount: this.feeAmount,
      bump: this.bump,
    }
  }

  static fromJSON(obj: HouseStateJSON): HouseState {
    return new HouseState({
      feeAccount: new PublicKey(obj.feeAccount),
      feeAmount: obj.feeAmount,
      bump: obj.bump,
    })
  }
}
