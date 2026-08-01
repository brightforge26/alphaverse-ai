import { useEffect, useState } from "react";
import { getPortfolio } from "../../api/portfolio";

function AIInsights() {
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    generateInsights();
  }, []);

  const generateInsights = async () => {
    try {
      const response = await getPortfolio();
      const portfolio = response.data.data;

      if (portfolio.length === 0) {
        setInsights([
          "📭 No portfolio data available.",
          "➕ Add stocks to receive AI insights.",
        ]);
        return;
      }

      const sectorValue = {};
      let bestStock = null;
      let bestProfit = -Infinity;

      portfolio.forEach((stock) => {
        const investment =
          Number(stock.buy_price) * Number(stock.quantity);

        const current =
          Number(stock.current_price) * Number(stock.quantity);

        const profit = current - investment;

        if (profit > bestProfit) {
          bestProfit = profit;
          bestStock = stock.stock_name;
        }

        const value = current;

        if (sectorValue[stock.sector]) {
          sectorValue[stock.sector] += value;
        } else {
          sectorValue[stock.sector] = value;
        }
      });

      const totalValue = Object.values(sectorValue).reduce(
        (a, b) => a + b,
        0
      );

      let highestSector = "";
      let highestPercent = 0;

      Object.keys(sectorValue).forEach((sector) => {
        const percent = (
          (sectorValue[sector] / totalValue) *
          100
        ).toFixed(1);

        if (percent > highestPercent) {
          highestPercent = percent;
          highestSector = sector;
        }
      });

      const ai = [];

      ai.push("✅ Portfolio contains " + portfolio.length + " holdings.");

      ai.push(
        "📈 Highest allocation is " +
          highestSector +
          " (" +
          highestPercent +
          "%)."
      );

      if (highestPercent > 50) {
        ai.push(
          "⚠ Your portfolio is heavily concentrated in one sector."
        );
      } else {
        ai.push("✅ Portfolio appears reasonably diversified.");
      }

      ai.push("🏆 Best performing stock: " + bestStock);

      ai.push(
        "💡 AI Suggestion: Continue monitoring market trends and diversify if necessary."
      );

      setInsights(ai);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-slate-900 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        🤖 AI Portfolio Insights
      </h2>

      <div className="space-y-4">

        {insights.map((item, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-xl p-4"
          >
            {item}
          </div>
        ))}

      </div>

    </div>
  );
}

export default AIInsights;