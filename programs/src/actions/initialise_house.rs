use anchor_lang::prelude::*;

impl InitHouse<'_>  {
    pub fn initialise_house(ctx: Context<Self>, fee_amount: u8) -> Result<()> {
        let vault = &mut ctx.accounts.vault;
        vault.fee_account = *ctx.accounts.fee_account.to_account_info().key;
        vault.fee_amount = fee_amount;
        vault.bump = *ctx.bumps.get("vault").unwrap();
        Ok(())
    }
}

#[account]
pub struct HouseState {
    pub fee_account: Pubkey,
    pub fee_amount: u8,
    pub bump: u8,
}

// validation struct
#[derive(Accounts)]
pub struct InitHouse<'info> {
    #[account(mut)]
    pub user: Signer<'info>,
    // space: 8 discriminator + 32 fee account pubkey + 1 winnings payout + 1 bump
    #[account(
    init,
    payer = user,
    space = 8 + 32 + 1 +1, seeds = [b"vault".as_ref()], bump
    )]
    pub vault: Account<'info, HouseState>,

    /// CHECK: We never do anything with the account other than store its key.
    #[account()]
    pub fee_account: UncheckedAccount<'info>,

    pub system_program: Program<'info, System>,
}