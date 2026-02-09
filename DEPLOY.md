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

> ⚠️ **Note:** The `nixpacks.toml` file is already configured to install Node.js in the telegram-bot directory.

---

## Option 2: Render (Alternative)

1. Go to [dashboard.render.com](https://dashboard.render.com)
2. Click **"New +"** → **"Web Service"**
3. Connect GitHub repo `Peni-Ghost/prophecy`
4. Settings:
   - **Environment:** Node
   - **Build Command:** `cd telegram-bot && npm install`
   - **Start Command:** `cd telegram-bot && npm start`
   - **Environment Variable:** `TELEGRAM_BOT_TOKEN=7936318809:AAG-vXylRjUb-3zhC4IkV4ltCndGh0Doghg`
5. Deploy

---

## 🎯 Recommended: Option 1 (Railway Dashboard)

It's the fastest and handles Node.js automatically via `nixpacks.toml`.

**Your bot will be live at:** [@ProphecyOracleBot](https://t.me/ProphecyOracleBot)
