import * as borsh from "@project-serum/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import { Connection, PublicKey } from "@solana/web3.js"
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface UserStatsFields {
  lamportsPlayed: BN
  bump: number
}

export interface UserStatsJSON {
  lamportsPlayed: string
  bump: number
}

export class UserStats {
  readonly lamportsPlayed: BN
  readonly bump: number

  static readonly discriminator = Buffer.from([
    176, 223, 136, 27, 122, 79, 32, 227,
  ])

  static readonly layout = borsh.struct([
    borsh.u64("lamportsPlayed"),
    borsh.u8("bump"),
  ])

  constructor(fields: UserStatsFields) {
    this.lamportsPlayed = fields.lamportsPlayed
    this.bump = fields.bump
  }

  static async fetch(
    c: Connection,
    address: PublicKey
  ): Promise<UserStats | null> {
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
  ): Promise<Array<UserStats | null>> {
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

  static decode(data: Buffer): UserStats {
    if (!data.slice(0, 8).equals(UserStats.discriminator)) {
      throw new Error("invalid account discriminator")
    }

    const dec = UserStats.layout.decode(data.slice(8))

    return new UserStats({
      lamportsPlayed: dec.lamportsPlayed,
      bump: dec.bump,
    })
  }

  toJSON(): UserStatsJSON {
    return {
      lamportsPlayed: this.lamportsPlayed.toString(),
      bump: this.bump,
    }
  }

  static fromJSON(obj: UserStatsJSON): UserStats {
    return new UserStats({
      lamportsPlayed: new BN(obj.lamportsPlayed),
      bump: obj.bump,
    })
  }
}
