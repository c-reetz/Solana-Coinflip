import * as VrfErrorCode from "./VrfErrorCode"

export {
  InitStateParams,
  InitStateParamsFields,
  InitStateParamsJSON,
} from "./InitStateParams"
export {
  RequestResultParams,
  RequestResultParamsFields,
  RequestResultParamsJSON,
} from "./RequestResultParams"
export { VrfErrorCode }

export type VrfErrorCodeKind =
  | VrfErrorCode.InvalidSwitchboardAccount
  | VrfErrorCode.MaxResultExceedsMaximum
  | VrfErrorCode.EmptyCurrentRoundResult
  | VrfErrorCode.InvalidAuthorityError
  | VrfErrorCode.InvalidVrfAccount
export type VrfErrorCodeJSON =
  | VrfErrorCode.InvalidSwitchboardAccountJSON
  | VrfErrorCode.MaxResultExceedsMaximumJSON
  | VrfErrorCode.EmptyCurrentRoundResultJSON
  | VrfErrorCode.InvalidAuthorityErrorJSON
  | VrfErrorCode.InvalidVrfAccountJSON
