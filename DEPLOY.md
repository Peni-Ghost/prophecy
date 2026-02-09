# Deploying the Telegram Bot

## Option 1: Railway Dashboard (EASIEST - 2 minutes)

1. Go to [railway.app/new](https://railway.app/new)
2. Click **"Deploy from GitHub repo"**
3. Select `Peni-Ghost/prophecy`
4. Click **"Add Variables"**
5. Add:
   - `TELEGRAM_BOT_TOKEN` = `7936318809:AAG-vXylRjUb-3zhC4IkV4ltCndGh0Doghg`
6. Click **"Deploy"**
7. Done! Bot will be live at @ProphecyOracleBot

---

## Option 2: GitHub Actions (Automatic Deploys)

### Setup Steps:

1. Go to your GitHub repo: https://github.com/Peni-Ghost/prophecy
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"**
4. Add these secrets:

| Secret Name | Value |
|-------------|-------|
| `RAILWAY_TOKEN` | `4ef46f2a-ff62-4c77-8031-bcad5b9d8f26` |
| `TELEGRAM_BOT_TOKEN` | `7936318809:AAG-vXylRjUb-3zhC4IkV4ltCndGh0Doghg` |

5. Go to **Actions** tab in your repo
6. Click **"Deploy Telegram Bot to Railway"**
7. Click **"Run workflow"**
8. Done!

---

## Option 3: Railway CLI (Local)

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login (interactive)
railway login

# Create project
railway init --name prophecy-bot

# Set environment variable
railway variables set TELEGRAM_BOT_TOKEN=7936318809:AAG-vXylRjUb-3zhC4IkV4ltCndGh0Doghg

# Deploy
cd telegram-bot
railway up
```

---

## 🎯 Recommended: Option 1 (Dashboard)

It's the fastest and doesn't require any CLI setup.

**Your bot will be live at:** [@ProphecyOracleBot](https://t.me/ProphecyOracleBot)
