```javascript
import { useState } from "react";
import PricePopup from "../components/PricePopup";

const coins = [
  { id: "bitcoin", name: "Bitcoin (BTC)" },
  { id: "ethereum", name: "Ethereum (ETH)" },
  { id: "solana", name: "Solana (SOL)" },
  { id: "binancecoin", name: "BNB" },
  { id: "base-protocol", name: "Base" } // experimental
];

export default function Home() {
  const [selectedCoin, setSelectedCoin] = useState(coins[0].id);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-2xl font-bold mb-6">Crypto Price MiniApp</h1>

      <select
        value={selectedCoin}
        onChange={(e) => setSelectedCoin(e.target.value)}
        className="mb-4 px-4 py-2 border rounded-lg"
      >
        {coins.map((coin) => (
          <option key={coin.id} value={coin.id}>
            {coin.name}
          </option>
        ))}
      </select>

      <button
        onClick={() => setShowPopup(true)}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
      >
        Show Price
      </button>

      {showPopup && (
        <PricePopup coinId={selectedCoin} onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
}
