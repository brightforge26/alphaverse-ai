
const { getStockPrice } = require("../services/twelveDataService");

exports.getLivePrice = async (req, res) => {
  try {

    const { symbol } = req.params;

    const stock = await getStockPrice(symbol);

    res.json({
      success: true,
      data: stock,
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });

  }
};