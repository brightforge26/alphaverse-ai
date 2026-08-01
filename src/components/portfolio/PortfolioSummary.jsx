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

      console.log("Portfolio Data:", res.data);

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

// Temporary
const todayGain = profit;

// Better Risk Logic
let risk = "High";

if (stocks.length >= 3) {
  risk = "Medium";
}

if (stocks.length >= 5) {
  risk = "Low";
}

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

      <div className="bg-slate-900 p-6 rounded-2xl">
        <p className="text-slate-400">Portfolio Value</p>
        <h2 className="text-3xl font-bold">
          ₹{summary.portfolioValue.toLocaleString()}
        </h2>
      </div>

      <div className="bg-slate-900 p-6 rounded-2xl">
        <p className="text-slate-400">Investment</p>
        <h2 className="text-3xl font-bold text-cyan-400">
          ₹{summary.investment.toLocaleString()}
        </h2>
      </div>

      <div className="bg-slate-900 p-6 rounded-2xl">
        <p className="text-slate-400">Profit / Loss</p>

        <h2
          className={`text-3xl font-bold ${
            summary.profit >= 0
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          ₹{summary.profit.toLocaleString()}
        </h2>
      </div>

      <div className="bg-slate-900 p-6 rounded-2xl">
        <p className="text-slate-400">Risk Score</p>

        <h2 className="text-3xl text-yellow-400 font-bold">
          {summary.risk}
        </h2>
      </div>

    </div>
  );
}

export default PortfolioSummary;