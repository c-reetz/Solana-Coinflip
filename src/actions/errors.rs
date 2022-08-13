use anchor_lang::prelude::*;

#[error_code]
pub enum ErrorCode {
    #[msg("Amount must be greater than zero.")]
    AmountMustBeGreaterThanZero,
    #[msg("The house wallet can't or won't payout this amount..")]
    NotEnoughInHouse,
    #[msg("VRF buffer empty!")]
    VrfEmpty,
}