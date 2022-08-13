export type CustomError =
  | AmountMustBeGreaterThanZero
  | NotEnoughInHouse
  | VrfEmpty

export class AmountMustBeGreaterThanZero extends Error {
  readonly code = 6000
  readonly name = "AmountMustBeGreaterThanZero"
  readonly msg = "Amount must be greater than zero."

  constructor() {
    super("6000: Amount must be greater than zero.")
  }
}

export class NotEnoughInHouse extends Error {
  readonly code = 6001
  readonly name = "NotEnoughInHouse"
  readonly msg = "The house wallet can't or won't payout this amount.."

  constructor() {
    super("6001: The house wallet can't or won't payout this amount..")
  }
}

export class VrfEmpty extends Error {
  readonly code = 6002
  readonly name = "VrfEmpty"
  readonly msg = "VRF buffer empty!"

  constructor() {
    super("6002: VRF buffer empty!")
  }
}

export function fromCode(code: number): CustomError | null {
  switch (code) {
    case 6000:
      return new AmountMustBeGreaterThanZero()
    case 6001:
      return new NotEnoughInHouse()
    case 6002:
      return new VrfEmpty()
  }

  return null
}
