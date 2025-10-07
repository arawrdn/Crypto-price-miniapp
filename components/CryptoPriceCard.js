import { useEffect, useState } from "react";

export default function CryptoPriceCard({ name, symbol }) {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`/api/prices?coin=${symbol}`);
        const data = await res.json();
        setPrice(data.price);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();

    // auto refresh tiap 30 detik
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, [symbol]);

  return (
    <div className="border rounded-xl p-4 shadow-md text-center bg-white">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-2xl">
        {price ? `$${price}` : "Loading..."}
      </p>
    </div>
  );
}
