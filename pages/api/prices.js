import { fetchPrice } from "../../lib/fetchPrice";

const COIN_MAP = {
  eth: "ethereum",
  sol: "solana",
  bnb: "binancecoin",
  hyperliquid: "hyperliquid"
};

export default async function handler(req, res) {
  const { coin } = req.query;
  const coinId = COIN_MAP[coin];

  if (!coinId) {
    return res.status(400).json({ error: "Invalid coin" });
  }

  const price = await fetchPrice(coinId);

  res.status(200).json({ coin, price });
}
