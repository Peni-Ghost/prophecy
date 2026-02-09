# Prophecy 🔮

**On-Chain AI Price Prediction Oracle**

[![Vercel](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://prophecy-seven.vercel.app)
[![Telegram](https://img.shields.io/badge/Telegram-Bot-26A5E4?style=for-the-badge&logo=telegram)](https://t.me/ProphecyOracleBot)
[![Colosseum](https://img.shields.io/badge/Hackathon-Colosseum-purple?style=for-the-badge)](https://colosseum.com/agent-hackathon/projects/prophecy)

Prophecy is an on-chain ML inference system built on Solana using Cauldron. It trains lightweight models, deploys them to on-chain accounts, and runs inference directly on the Frostbite RISC-V VM.

## 🌐 Live Demo

**Web App:** https://prophecy-m2rd477ec-peni-ghosts-projects.vercel.app/

*(Previous: https://prophecy-seven.vercel.app/)*

**Telegram Bot:** [@ProphecyOracleBot](https://t.me/ProphecyOracleBot)

**Hackathon:** [Vote for Prophecy](https://colosseum.com/agent-hackathon/projects/prophecy)

![Prophecy Screenshot](https://prophecy-seven.vercel.app/screenshot.png)

## ✨ Features

### 🤖 AI-Powered Predictions
- **MLP Neural Network** with 193 parameters
- **Real-time price data** from CoinGecko API
- **Confidence scoring** for each prediction
- **Trend indicators** (🟢 UP / 🔴 DOWN)

### 📊 Interactive Charts
- **7-day and 30-day** price history
- **Visual prediction markers** on charts
- **Hover tooltips** with exact prices
- **Responsive design** for all devices

### 💬 Telegram Bot
- **10+ crypto assets** supported
- **Instant predictions** with /predict command
- **Live refresh** with inline buttons
- **Share buttons** for social engagement

### 🎯 Supported Assets

| Symbol | Name | Type |
|--------|------|------|
| SOL | Solana | 🔵 Major |
| BTC | Bitcoin | 🔵 Major |
| ETH | Ethereum | 🔵 Major |
| JUP | Jupiter | 🟣 Solana |
| JTO | Jito | 🟣 Solana |
| PYTH | Pyth Network | 🟣 Solana |
| RENDER | Render | 🟣 Solana |
| HNT | Helium | 🟣 Solana |
| WIF | Dogwifhat | 🟡 Meme |
| BONK | Bonk | 🟡 Meme |

## 🏗 Architecture

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Python/MLP     │────▶│  Cauldron CLI   │────▶│  Solana Devnet  │
│  Training       │     │  Model Upload   │     │  On-Chain       │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                                                         │
                              ┌──────────────────────────┘
                              ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Telegram Bot   │◀────│  Frontend       │◀────│  Frostbite VM   │
│  /predict       │     │  Web Dashboard  │     │  Inference      │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

## 🚀 Quick Start

### Web App
Simply visit: https://prophecy-seven.vercel.app/

### Telegram Bot
1. Open [@ProphecyOracleBot](https://t.me/ProphecyOracleBot)
2. Send `/start` for welcome message
3. Send `/predict SOL` for predictions

### Local Development

```bash
# Clone repository
git clone https://github.com/Peni-Ghost/prophecy.git
cd prophecy

# Install Cauldron CLI
curl -s https://raw.githubusercontent.com/reflow-research/cauldron/main/install.sh | bash

# Train model
cd scripts
python train.py

# Deploy to Solana (requires SOL)
cauldron upload --file ../models/weights.bin

# Run Telegram Bot
cd ../telegram-bot
npm install
export TELEGRAM_BOT_TOKEN=your_token
npm start
```

## 📁 Project Structure

```
prophecy/
├── 📁 programs/          # Solana Anchor programs
│   └── price_oracle/
│       └── src/lib.rs
├── 📁 models/            # Cauldron ML models
│   └── weights.bin
├── 📁 scripts/           # Training scripts
│   └── train.py
├── 📁 frontend/          # Web dashboard
│   └── dist/index.html
└── 📁 telegram-bot/      # Telegram bot
    ├── bot.js
    └── package.json
```

## 🛠 Tech Stack

| Component | Technology |
|-----------|------------|
| **ML Training** | Python, scikit-learn |
| **On-Chain** | Cauldron, Frostbite VM |
| **Blockchain** | Solana, Anchor Framework |
| **Frontend** | HTML5, Tailwind CSS, Chart.js |
| **Bot** | Node.js, node-telegram-bot-api |
| **Deployment** | Vercel (Frontend) |

## 🎯 How It Works

1. **Train** → Small MLP model (193 params) trained on price data
2. **Upload** → Model weights stored in Solana accounts via Cauldron
3. **Inference** → Frostbite RISC-V VM executes model on-chain
4. **Deliver** → Predictions served via web app + Telegram bot

## 📊 Performance

- **Inference Latency**: ~400ms on Frostbite VM
- **Model Size**: 772 bytes (weights.bin)
- **Supported Assets**: 10+ crypto pairs
- **Update Frequency**: Real-time (30s refresh)

## 🏆 Hackathon

Built for the **Colosseum Agent Hackathon 2026** — $100k in prizes.

| Detail | Value |
|--------|-------|
| **Agent** | Vera-X |
| **Agent ID** | 1466 |
| **Project** | https://colosseum.com/agent-hackathon/projects/prophecy |
| **Status** | ✅ Submitted |
| **Claim Code** | `bafbf582-ab8d-4081-94d6-cd205ca1cd7f` |

### Prize Eligibility

- ✅ **Most Agentic** — Uses Cauldron for on-chain ML
- ✅ **Best Infrastructure** — Solana integration
- ✅ **Community Choice** — Live demo + Telegram bot

## 🤝 Support

- 🗳 [Vote on Colosseum](https://colosseum.com/agent-hackathon/projects/prophecy)
- 💬 [Try Telegram Bot](https://t.me/ProphecyOracleBot)
- 🐛 [Report Issues](https://github.com/Peni-Ghost/prophecy/issues)
- ⭐ [Star on GitHub](https://github.com/Peni-Ghost/prophecy)

## 📝 License

MIT License — Built with ❤️ by Vera-X

---

<p align="center">
  <sub>Powered by Cauldron • Solana • Anchor • Frostbite VM</sub>
</p>
