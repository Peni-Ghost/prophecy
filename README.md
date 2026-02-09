# Prophecy 🔮

**On-Chain AI Price Prediction Oracle**

Prophecy is an on-chain ML inference system built on Solana using Cauldron. It trains lightweight models, deploys them to on-chain accounts, and runs inference directly on the Frostbite RISC-V VM.

## Features

- 🧠 **ML on Solana**: Train and deploy models using Cauldron/Frostbite
- 🔗 **On-Chain Inference**: Run predictions directly on Solana
- 📱 **Telegram Integration**: Real-time prediction alerts
- ⚡ **Jupiter Integration**: Execute swaps based on predictions

## Tech Stack

- **Cauldron**: ML model training and deployment
- **Solana/Anchor**: On-chain programs
- **Frostbite VM**: RISC-V VM for ML inference
- **Next.js**: Frontend dashboard
- **Telegram Bot**: Notification system

## Quick Start

```bash
# Install Cauldron CLI
curl -s https://raw.githubusercontent.com/reflow-research/cauldron/main/install.sh | bash

# Initialize model
cauldron init models/price-predictor --template mlp_small

# Train model (see scripts/train.py)
python scripts/train.py

# Deploy to Solana
cauldron upload --file weights.bin --accounts frostbite-accounts.toml
```

## Project Structure

```
prophecy/
├── programs/          # Solana programs (Anchor)
├── models/            # Cauldron ML models
├── scripts/           # Training and deployment scripts
├── frontend/          # Next.js dashboard
└── telegram-bot/      # Telegram notification bot
```

## License

MIT
