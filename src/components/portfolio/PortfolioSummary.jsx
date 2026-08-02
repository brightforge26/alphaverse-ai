import { useEffect, useState } from "react";
import { getPortfolio } from "../../api/portfolio";

function PortfolioSummary() {
  const [summary, setSummary] = useState({
    portfolioValue: 0,
    investment: 0,
    profit: 0,
    todayGain: 0,
    risk: "Low",
  });

  useEffect(() => {
    fetchSummary();
  }, []);

  const fetchSummary = async () => {
    try {
      const res = await getPortfolio();

      const stocks = res.data.data || [];

      let portfolioValue = 0;
      let investment = 0;

      stocks.forEach((stock) => {
        const qty = Number(stock.quantity) || 0;
        const buy = Number(stock.buy_price) || 0;
        const current = Number(stock.current_price) || 0;

        portfolioValue += current * qty;
        investment += buy * qty;
      });

      const profit = portfolioValue - investment;

      let risk = "High";

      if (stocks.length >= 3) risk = "Medium";
      if (stocks.length >= 5) risk = "Low";

      setSummary({
        portfolioValue,
        investment,
        profit,
        todayGain: profit,
        risk,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="grid md:grid-cols-4 gap-5">

      {/* Portfolio Value */}
      <div
        style={{
          background: "var(--card)",
          color: "var(--text)",
          borderColor: "var(--border)",
        }}
        className="border p-6 rounded-2xl shadow-lg transition-all duration-300"
      >
        <p
          style={{
            color: "var(--text)",
            opacity: 0.7,
          }}
        >
          Portfolio Value
        </p>

        <h2 className="text-3xl font-bold mt-2">
          ₹{summary.portfolioValue.toLocaleString()}
        </h2>
      </div>

      {/* Investment */}
      <div
        style={{
          background: "var(--card)",
          color: "var(--text)",
          borderColor: "var(--border)",
        }}
        className="border p-6 rounded-2xl shadow-lg transition-all duration-300"
      >
        <p
          style={{
            color: "var(--text)",
            opacity: 0.7,
          }}
        >
          Investment
        </p>

        <h2 className="text-3xl font-bold text-cyan-400 mt-2">
          ₹{summary.investment.toLocaleString()}
        </h2>
      </div>

      {/* Profit */}
      <div
        style={{
          background: "var(--card)",
          color: "var(--text)",
          borderColor: "var(--border)",
        }}
        className="border p-6 rounded-2xl shadow-lg transition-all duration-300"
      >
        <p
          style={{
            color: "var(--text)",
            opacity: 0.7,
          }}
        >
          Profit / Loss
        </p>

        <h2
          className={`text-3xl font-bold mt-2 ${
            summary.profit >= 0
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          ₹{summary.profit.toLocaleString()}
        </h2>
      </div>

      {/* Risk */}
      <div
        style={{
          background: "var(--card)",
          color: "var(--text)",
          borderColor: "var(--border)",
        }}
        className="border p-6 rounded-2xl shadow-lg transition-all duration-300"
      >
        <p
          style={{
            color: "var(--text)",
            opacity: 0.7,
          }}
        >
          Risk Score
        </p>

        <h2 className="text-3xl font-bold text-yellow-400 mt-2">
          {summary.risk}
        </h2>
      </div>

    </div>
  );
}

export default PortfolioSummary;