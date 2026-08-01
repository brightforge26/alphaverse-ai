const { getStockPrice } = require("../services/twelveDataService");

const getLivePrice = async (req, res) => {
  try {
    const { symbol } = req.params;

    const stock = await getStockPrice(symbol);

    res.json({
      success: true,
      data: stock,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  getLivePrice,
};