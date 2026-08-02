const axios = require("axios");

async function getStockPrice(symbol) {
  try {
    const apiKey = process.env.TWELVEDATA_API_KEY;

    console.log("=================================");
    console.log("Searching Symbol :", symbol);

    const url = `https://api.twelvedata.com/quote?symbol=${encodeURIComponent(
      symbol
    )}&apikey=${apiKey}`;

    console.log("API URL :", url);

    const response = await axios.get(url);

    console.log("===== Twelve Data Response =====");
    console.log(response.data);

    if (
      response.data.status === "error" ||
      response.data.code
    ) {
      throw new Error(
        response.data.message || "Stock not found"
      );
    }

    return {
      symbol: response.data.symbol,
      name: response.data.name,
      exchange: response.data.exchange,
      type: response.data.type,
      price: Number(
        response.data.close ||
          response.data.previous_close ||
          response.data.price ||
          0
      ),
      change: Number(response.data.change || 0),
      percent_change: Number(
        response.data.percent_change || 0
      ),
    };
  } catch (err) {
    console.error("=================================");
    console.error("TwelveData Error");

    if (err.response) {
      console.log(err.response.data);
    } else {
      console.log(err.message);
    }

    throw err;
  }
}

module.exports = {
  getStockPrice,
};