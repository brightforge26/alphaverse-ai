
const axios = require("axios");

async function getStockPrice(symbol) {
  try {
    const apiKey = process.env.TWELVEDATA_API_KEY;

    const url = `https://api.twelvedata.com/price?symbol=${symbol}&apikey=${apiKey}`;

    const response = await axios.get(url);

    console.log("===== Twelve Data Response =====");
    console.log(response.data);

    if (!response.data.price) {
      throw new Error(response.data.message || "Stock price not found");
    }

    return {
      symbol,
      price: Number(response.data.price),
    };
  } catch (err) {
    console.error("Twelve Data Error:", err.message);
    throw err;
  }
}

module.exports = {
  getStockPrice,
};