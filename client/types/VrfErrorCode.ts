import * as borsh from "@project-serum/borsh"
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars

export interface InvalidSwitchboardAccountJSON {
  kind: "InvalidSwitchboardAccount"
}

export class InvalidSwitchboardAccount {
  readonly discriminator = 0
  readonly kind = "InvalidSwitchboardAccount"

  toJSON(): InvalidSwitchboardAccountJSON {
    return {
      kind: "InvalidSwitchboardAccount",
    }
  }

  toEncodable() {
    return {
      InvalidSwitchboardAccount: {},
    }
  }
}

export interface MaxResultExceedsMaximumJSON {
  kind: "MaxResultExceedsMaximum"
}

export class MaxResultExceedsMaximum {
  readonly discriminator = 1
  readonly kind = "MaxResultExceedsMaximum"

  toJSON(): MaxResultExceedsMaximumJSON {
    return {
      kind: "MaxResultExceedsMaximum",
    }
  }

  toEncodable() {
    return {
      MaxResultExceedsMaximum: {},
    }
  }
}

export interface EmptyCurrentRoundResultJSON {
  kind: "EmptyCurrentRoundResult"
}

export class EmptyCurrentRoundResult {
  readonly discriminator = 2
  readonly kind = "EmptyCurrentRoundResult"

  toJSON(): EmptyCurrentRoundResultJSON {
    return {
      kind: "EmptyCurrentRoundResult",
    }
  }

  toEncodable() {
    return {
      EmptyCurrentRoundResult: {},
    }
  }
}

export interface InvalidAuthorityErrorJSON {
  kind: "InvalidAuthorityError"
}

export class InvalidAuthorityError {
  readonly discriminator = 3
  readonly kind = "InvalidAuthorityError"

  toJSON(): InvalidAuthorityErrorJSON {
    return {
      kind: "InvalidAuthorityError",
    }
  }

  toEncodable() {
    return {
      InvalidAuthorityError: {},
    }
  }
}

export interface InvalidVrfAccountJSON {
  kind: "InvalidVrfAccount"
}

export class InvalidVrfAccount {
  readonly discriminator = 4
  readonly kind = "InvalidVrfAccount"

  toJSON(): InvalidVrfAccountJSON {
    return {
      kind: "InvalidVrfAccount",
    }
  }

  toEncodable() {
    return {
      InvalidVrfAccount: {},
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function fromDecoded(obj: any): types.VrfErrorCodeKind {
  if (typeof obj !== "object") {
    throw new Error("Invalid enum object")
  }

  if ("InvalidSwitchboardAccount" in obj) {
    return new InvalidSwitchboardAccount()
  }
  if ("MaxResultExceedsMaximum" in obj) {
    return new MaxResultExceedsMaximum()
  }
  if ("EmptyCurrentRoundResult" in obj) {
    return new EmptyCurrentRoundResult()
  }
  if ("InvalidAuthorityError" in obj) {
    return new InvalidAuthorityError()
  }
  if ("InvalidVrfAccount" in obj) {
    return new InvalidVrfAccount()
  }

  throw new Error("Invalid enum object")
}

export function fromJSON(obj: types.VrfErrorCodeJSON): types.VrfErrorCodeKind {
  switch (obj.kind) {
    case "InvalidSwitchboardAccount": {
      return new InvalidSwitchboardAccount()
    }
    case "MaxResultExceedsMaximum": {
      return new MaxResultExceedsMaximum()
    }
    case "EmptyCurrentRoundResult": {
      return new EmptyCurrentRoundResult()
    }
    case "InvalidAuthorityError": {
      return new InvalidAuthorityError()
    }
    case "InvalidVrfAccount": {
      return new InvalidVrfAccount()
    }
  }
}

export function layout(property?: string) {
  const ret = borsh.rustEnum([
    borsh.struct([], "InvalidSwitchboardAccount"),
    borsh.struct([], "MaxResultExceedsMaximum"),
    borsh.struct([], "EmptyCurrentRoundResult"),
    borsh.struct([], "InvalidAuthorityError"),
    borsh.struct([], "InvalidVrfAccount"),
  ])
  if (property !== undefined) {
    return ret.replicate(property)
  }
  return ret
}
