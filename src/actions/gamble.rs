use crate::*;
use crate::errors::ErrorCode;
use anchor_lang::prelude::*;
use switchboard_v2::VrfAccountData;

impl StartGamble<'_>  {
    pub fn transfer_to_house(ctx: Context<Self>, amount: u64) -> Result<()> {
        ctx.accounts.user_stats.lamports_played = amount;

        if **ctx.accounts.vault.to_account_info().try_borrow_lamports()? <= ((amount * (ctx.accounts.vault.fee_amount as u64))/100) {
            return Err(ErrorCode::NotEnoughInHouse.into());
        }
        let house_amount = (amount * (ctx.accounts.vault.fee_amount as u64))/100;
        let fee_amount = amount - house_amount;
        msg!("fee: {} house: {}", fee_amount, house_amount);
        let ix_to_house = solana_program::system_instruction::transfer(
            &ctx.accounts.user.key(),
            &ctx.accounts.vault.key(),
            house_amount,
        );
        let _ = solana_program::program::invoke(
            &ix_to_house,
            &[
                ctx.accounts.user.to_account_info(),
                ctx.accounts.vault.to_account_info(),
            ],
        );

        let ix_to_fee = solana_program::system_instruction::transfer(
            &ctx.accounts.user.key(),
            &ctx.accounts.fee_account.key(),
            fee_amount,
        );
        let _ = solana_program::program::invoke(
            &ix_to_fee,
            &[
                ctx.accounts.user.to_account_info(),
                ctx.accounts.fee_account.to_account_info(),
            ],
        );

        Ok(())
    }
}

impl BetHeads<'_> {
    pub fn heads(ctx: Context<Self>) -> Result<()> {
        let vrf = ctx.accounts.vrf.load()?;
        let result_buffer = vrf.get_result()?;

        if result_buffer == [0u8; 32] {
            return Err(ErrorCode::VrfEmpty.into());
        }
        let value: &[u128] = bytemuck::cast_slice(&result_buffer[..]);
        let result = value[0] % 256000 as u128;
        msg!(&format!("vrf result: {}", result));

        if(result % 2) == 0 {
            let win_amount = ((ctx.accounts.user_stats.lamports_played * (ctx.accounts.vault.fee_amount as u64))/100)*2;
            msg!(&format!("won: {}", win_amount));
            **ctx.accounts.vault.to_account_info().try_borrow_mut_lamports()? -= win_amount;
            **ctx.accounts.user.to_account_info().try_borrow_mut_lamports()? += win_amount;
        } else {
            msg!("lost");
        };
        ctx.accounts.user_stats.lamports_played = 0;
        Ok(())
    }
    pub fn tails(ctx: Context<Self>) -> Result<()> {
        let vrf = ctx.accounts.vrf.load()?;
        let result_buffer = vrf.get_result()?;

        if result_buffer == [0u8; 32] {
            return Err(ErrorCode::VrfEmpty.into());
        }
        let value: &[u128] = bytemuck::cast_slice(&result_buffer[..]);
        let result = value[0] % 256000 as u128;
        msg!(&format!("vrf result: {}", result));

        if(result % 2) != 0 {
            let win_amount = ((ctx.accounts.user_stats.lamports_played * (ctx.accounts.vault.fee_amount as u64))/100)*2;
            msg!(&format!("won: {}", win_amount));
            **ctx.accounts.vault.to_account_info().try_borrow_mut_lamports()? -= win_amount;
            **ctx.accounts.user.to_account_info().try_borrow_mut_lamports()? += win_amount;
        } else {
            msg!("lost");
        };
        ctx.accounts.user_stats.lamports_played = 0;
        Ok(())
    }
}

impl BetTails<'_> {
    pub fn tails(ctx: Context<Self>) -> Result<()> {
        let vrf = ctx.accounts.vrf.load()?;
        let result_buffer = vrf.get_result()?;

        if result_buffer == [0u8; 32] {
            return Err(ErrorCode::VrfEmpty.into());
        }
        let value: &[u128] = bytemuck::cast_slice(&result_buffer[..]);
        let result = value[0] % 256000 as u128;
        msg!(&format!("vrf result: {}", result));

        if(result % 2) != 0 {
            let win_amount = ((ctx.accounts.user_stats.lamports_played * (ctx.accounts.vault.fee_amount as u64))/100)*2;
            msg!(&format!("won: {}", win_amount));
            **ctx.accounts.vault.to_account_info().try_borrow_mut_lamports()? -= win_amount;
            **ctx.accounts.user.to_account_info().try_borrow_mut_lamports()? += win_amount;
        } else {
            msg!("lost");
        };
        ctx.accounts.user_stats.lamports_played = 0;
        Ok(())
    }
}

// validation struct
#[derive(Accounts)]
pub struct StartGamble<'info> {
    #[account(mut)]
    pub user: Signer<'info>,
    #[account(mut, seeds = [b"user-stats", user.key().as_ref()], bump = user_stats.bump)]
    pub user_stats: Account<'info, UserStats>,
    #[account(mut, seeds = [b"vault".as_ref()], bump = vault.bump)]
    pub vault: Account<'info, HouseState>,
    /// CHECK: we never read or write to this
    #[account(mut)]
    pub fee_account: UncheckedAccount<'info>,
    pub system_program: Program<'info, System>,
}

// validation struct, wants 1 for each or IDL fucked ?
#[derive(Accounts)]
pub struct BetHeads<'info> {
    /// CHECK: We never do any R/W to this account.
    #[account(mut)]
    pub user: UncheckedAccount<'info>,
    #[account(mut, seeds = [b"user-stats", user.key().as_ref()], bump = user_stats.bump)]
    pub user_stats: Account<'info, UserStats>,
    #[account(mut, seeds = [b"vault".as_ref()], bump = vault.bump)]
    pub vault: Account<'info, HouseState>,
    #[account(
    constraint =
    *vrf.to_account_info().owner == SWITCHBOARD_PROGRAM_ID @ VrfErrorCode::InvalidSwitchboardAccount
    )]
    pub vrf: AccountLoader<'info, VrfAccountData>,
    pub system_program: Program<'info, System>,
}

// validation struct
#[derive(Accounts)]
pub struct BetTails<'info> {
    /// CHECK: We never do any R/W to this account.
    #[account(mut)]
    pub user: UncheckedAccount<'info>,
    #[account(mut, seeds = [b"user-stats", user.key().as_ref()], bump = user_stats.bump)]
    pub user_stats: Account<'info, UserStats>,
    #[account(mut, seeds = [b"vault".as_ref()], bump = vault.bump)]
    pub vault: Account<'info, HouseState>,
    #[account(
    constraint =
    *vrf.to_account_info().owner == SWITCHBOARD_PROGRAM_ID @ VrfErrorCode::InvalidSwitchboardAccount
    )]
    pub vrf: AccountLoader<'info, VrfAccountData>,
    pub system_program: Program<'info, System>,
}