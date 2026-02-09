#!/bin/bash
# Deploy Prophecy to Solana devnet

set -e

echo "🔮 Prophecy Deployment Script"
echo "=============================="

# Check for Solana CLI
if ! command -v solana &> /dev/null; then
    echo "❌ Solana CLI not found. Install from https://docs.solana.com/cli"
    exit 1
fi

# Check for Anchor
if ! command -v anchor &> /dev/null; then
    echo "❌ Anchor not found. Install: cargo install --git https://github.com/coral-xyz/anchor avm"
    exit 1
fi

# Setup devnet
echo "📡 Setting up Solana devnet..."
solana config set --url devnet

# Check balance
echo "💰 Checking devnet balance..."
BALANCE=$(solana balance | awk '{print $1}')
if (( $(echo "$BALANCE < 2" | bc -l) )); then
    echo "Requesting airdrop..."
    solana airdrop 2
fi

# Build program
echo "🔨 Building program..."
cd programs/price_oracle
anchor build
cd ../..

# Deploy
echo "🚀 Deploying to devnet..."
anchor deploy --provider.cluster devnet

echo "✅ Deployment complete!"
echo ""
echo "Next steps:"
echo "1. Initialize oracle: anchor run initialize"
echo "2. Run Cauldron inference"
echo "3. Update predictions"
