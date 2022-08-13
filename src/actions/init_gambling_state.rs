use anchor_lang::prelude::*;

impl InitGamblingState<'_>  {
  pub fn init_gstate(ctx: Context<Self>) -> Result<()> {
    let user_stats = &mut ctx.accounts.user_stats;
    user_stats.lamports_played = 0;
    user_stats.bump = *ctx.bumps.get("user_stats").unwrap();
    Ok(())
  }
}


#[account]
pub struct UserStats {
  pub lamports_played: u64,
  pub bump: u8,
}

// validation struct
#[derive(Accounts)]
pub struct InitGamblingState<'info> {
  #[account(mut)]
  pub user: Signer<'info>,
  // space: 8 discriminator + 8 price + 1 bump
  #[account(
  init,
  payer = user,
  space = 8 + 8 + 1, seeds = [b"user-stats", user.key().as_ref()], bump
  )]
  pub user_stats: Account<'info, UserStats>,
  pub system_program: Program<'info, System>,
}