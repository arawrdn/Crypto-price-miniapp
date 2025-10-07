# Crypto Price MiniApp

A Farcaster-style MiniApp that displays **real-time cryptocurrency prices** using the **CoinGecko API**.  
Users can select a cryptocurrency from a dropdown, view the **live price** in a popup, and check the **24-hour price chart**.  
The price data auto-refreshes every 15 seconds.

---

## ✨ Features
- Fetches real-time price data from [CoinGecko](https://www.coingecko.com/en/api).
- Supports multiple coins: **Bitcoin (BTC), Ethereum (ETH), Solana (SOL), BNB, HyperLiquid**.
- Clean popup design styled for MiniApps.
- **Auto-refresh every 15 seconds** for live updates.
- Shows **24-hour price history chart** with Recharts.
- Built with **Next.js + React + Tailwind CSS + Recharts**.
- Easy deployment to **Vercel**.


---

## ⚡️ Installation & Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/crypto-price-miniapp.git
cd crypto-price-miniapp

# 2. Install dependencies
npm install

# 3. Run locally
npm run dev
# → Open http://localhost:3000 in your browser

# 4. Deploy on Vercel
# - Commit & push your code to GitHub
# - Go to https://vercel.com
# - Import your GitHub repo
# - Click "Deploy"

🔑 Notes

✅ No API key required (CoinGecko provides free public endpoints).

📊 Default supported coins: BTC, ETH, SOL, BNB, Base (experimental).

🔧 Extendable: just add new coins to the dropdown list in index.js.

🌐 Recommended deployment on Vercel for instant hosting.
