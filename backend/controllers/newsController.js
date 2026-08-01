const axios = require("axios");

exports.getMarketNews = async (req, res) => {
  try {
    const apiKey = process.env.FINNHUB_API_KEY;

    const response = await axios.get(
      `https://finnhub.io/api/v1/news?category=general&token=${apiKey}`
    );

    const news = response.data.slice(0, 8);

    res.json({
      success: true,
      data: news,
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};