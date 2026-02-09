# Deploying the Telegram Bot

## ✅ STATUS: BOT IS LIVE!

**🤖 Bot:** [@ProphecyOracleBot](https://t.me/ProphecyOracleBot)  
**🚂 Deployed on:** Railway  
**📅 Deployed:** Feb 10, 2026

---

## How It Was Deployed

1. Railway detected Node.js from root `package.json`
2. Built with `npm install` 
3. Started with `npm start` → runs `telegram-bot/bot.js`
4. Environment variable `TELEGRAM_BOT_TOKEN` set in Railway dashboard

---

## Manual Deployment (If Needed)

### Railway Dashboard

1. Go to [railway.app/new](https://railway.app/new)
2. Click **"Deploy from GitHub repo"**
3. Select `Peni-Ghost/prophecy`
4. Click **"Add Variables"**
5. Add: `TELEGRAM_BOT_TOKEN` = your_token
6. Click **"Deploy"**

### Render Alternative

1. Go to [dashboard.render.com](https://dashboard.render.com)
2. Click **"New +"** → **"Web Service"**
3. Connect GitHub repo `Peni-Ghost/prophecy`
4. Settings:
   - **Environment:** Node
   - **Build Command:** `cd telegram-bot && npm install`
   - **Start Command:** `cd telegram-bot && npm start`
5. Deploy

