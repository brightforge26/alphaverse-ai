const supabase = require("../config/supabase");

exports.getDashboardStats = async (req, res) => {
  try {
    const { data: portfolio, error } = await supabase
      .from("portfolio")
      .select("*");

    if (error) throw error;

    let portfolioValue = 0;
    let totalInvestment = 0;
    let todayGain = 0;

    const sectors = new Set();

    portfolio.forEach((stock) => {
      const quantity = Number(stock.quantity || 0);
      const buyPrice = Number(stock.buy_price || 0);
      const currentPrice = Number(stock.current_price || 0);

      portfolioValue += quantity * currentPrice;

      totalInvestment += quantity * buyPrice;

      todayGain += (currentPrice - buyPrice) * quantity;

      if (stock.sector) {
        sectors.add(stock.sector);
      }
    });

    // Profit %
    let profitPercentage = 0;

    if (totalInvestment > 0) {
      profitPercentage = (
        (todayGain / totalInvestment) *
        100
      ).toFixed(2);
    }

    // Risk Calculation
    let risk = "High";

    if (sectors.size >= 4) {
      risk = "Low";
    } else if (sectors.size >= 2) {
      risk = "Medium";
    }

    res.json({
      success: true,
      stats: {
        portfolioValue: Number(portfolioValue.toFixed(2)),
        totalInvestment: Number(totalInvestment.toFixed(2)),
        todayGain: Number(todayGain.toFixed(2)),
        profitPercentage: Number(profitPercentage),
        totalStocks: portfolio.length,
        sectors: sectors.size,
        risk,
      },
    });

  } catch (err) {
    console.error("Dashboard Error:", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
exports.getPortfolioChart = async (req, res) => {
  try {
    const { data: portfolio, error } = await supabase
      .from("portfolio")
      .select("*");

    if (error) throw error;

    const chartData = portfolio.map((stock) => ({
      name: stock.stock_name,
      value: Number(stock.current_price) * Number(stock.quantity),
    }));

    res.json({
      success: true,
      data: chartData,
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};