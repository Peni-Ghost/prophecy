# Prophecy Telegram Bot 🤖

AI-powered crypto price prediction bot for Telegram.

## Features

- 📊 Real-time price predictions for 10+ crypto assets
- 🟢/🔴 Trend indicators with confidence scores
- 🔄 Refresh button for live updates
- 🌐 Links to web dashboard and Colosseum voting

## Commands

| Command | Description |
|---------|-------------|
| `/start` | Welcome message and help |
| `/predict [SYMBOL]` | Get AI prediction for asset |
| `/assets` | List all supported assets |
| `/help` | Show help message |

## Supported Assets

- SOL, BTC, ETH (Majors)
- JUP, JTO, PYTH, RENDER, HNT (Solana Ecosystem)
- WIF, BONK (Meme coins)

## Setup

1. Create a bot with [@BotFather](https://t.me/botfather)
2. Copy your bot token
3. Set environment variable:
   ```bash
   export TELEGRAM_BOT_TOKEN=your_token_here
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Run the bot:
   ```bash
   npm start
   ```

## Deployment

### Railway (Recommended - Free)
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

### Render (Free)
1. Connect GitHub repo to Render
2. Set environment variable `TELEGRAM_BOT_TOKEN`
3. Deploy

## Bot Link

Try the bot: [@ProphecyOracleBot](https://t.me/ProphecyOracleBot)
