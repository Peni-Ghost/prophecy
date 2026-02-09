use anchor_lang::prelude::*;

/// Prophecy Price Oracle Program
/// Provides on-chain ML inference using Cauldron/Frostbite

declare_id!("Prophecy11111111111111111111111111111111111");

#[program]
pub mod price_oracle {
    use super::*;

    /// Initialize the oracle with configuration
    pub fn initialize(ctx: Context<Initialize>, config: OracleConfig) -> Result<()> {
        let oracle = &mut ctx.accounts.oracle;
        oracle.authority = ctx.accounts.authority.key();
        oracle.config = config;
        oracle.prediction_count = 0;
        oracle.last_prediction = 0;
        oracle.last_updated = Clock::get()?.unix_timestamp;
        
        msg!("🔮 Prophecy Oracle initialized");
        Ok(())
    }

    /// Update the prediction (called after Cauldron inference)
    pub fn update_prediction(ctx: Context<UpdatePrediction>, price: u64) -> Result<()> {
        let oracle = &mut ctx.accounts.oracle;
        
        require!(
            ctx.accounts.authority.key() == oracle.authority,
            ErrorCode::Unauthorized
        );
        
        oracle.last_prediction = price;
        oracle.prediction_count += 1;
        oracle.last_updated = Clock::get()?.unix_timestamp;
        
        msg!("🔮 New prediction: {} (count: {})", price, oracle.prediction_count);
        
        Ok(())
    }

    /// Get current prediction (callable by anyone)
    pub fn get_prediction(ctx: Context<GetPrediction>) -> Result<u64> {
        let oracle = &ctx.accounts.oracle;
        
        require!(
            oracle.prediction_count > 0,
            ErrorCode::NoPrediction
        );
        
        msg!("🔮 Current prediction: {}", oracle.last_prediction);
        Ok(oracle.last_prediction)
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(
        init,
        payer = authority,
        space = 8 + OracleState::SIZE
    )]
    pub oracle: Account<'info, OracleState>,
    
    #[account(mut)]
    pub authority: Signer<'info>,
    
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct UpdatePrediction<'info> {
    #[account(mut)]
    pub oracle: Account<'info, OracleState>,
    
    pub authority: Signer<'info>,
}

#[derive(Accounts)]
pub struct GetPrediction<'info> {
    pub oracle: Account<'info, OracleState>,
}

#[account]
pub struct OracleState {
    pub authority: Pubkey,
    pub config: OracleConfig,
    pub prediction_count: u64,
    pub last_prediction: u64,
    pub last_updated: i64,
}

impl OracleState {
    pub const SIZE: usize = 32 + // authority
        OracleConfig::SIZE + 
        8 + // prediction_count
        8 + // last_prediction
        8;  // last_updated
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone, Debug)]
pub struct OracleConfig {
    pub asset: String,        // e.g., "SOL-USDC"
    pub model_hash: [u8; 32], // Hash of the Cauldron model
    pub min_confidence: u8,   // 0-100 confidence threshold
}

impl OracleConfig {
    pub const SIZE: usize = 32 + // asset (max 32 chars)
        32 + // model_hash
        1;   // min_confidence
}

#[error_code]
pub enum ErrorCode {
    #[msg("Unauthorized access")]
    Unauthorized,
    #[msg("No prediction available")]
    NoPrediction,
}
