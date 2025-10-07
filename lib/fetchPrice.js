export async function fetchPrice(coinId) {
  try {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`;
    const res = await fetch(url);
    const data = await res.json();

    return data[coinId]?.usd || null;
  } catch (error) {
    console.error("Error fetchPrice:", error);
    return null;
  }
}
