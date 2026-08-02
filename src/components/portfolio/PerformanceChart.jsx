import { useEffect, useState } from "react";
import { getPortfolio } from "../../api/portfolio";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function PerformanceChart() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    loadChart();
  }, []);

  const loadChart = async () => {
    try {
      const res = await getPortfolio();

      const portfolio = res.data.data || [];

      const data = portfolio.map((stock) => ({
        stock: stock.symbol,
        investment:
          Number(stock.buy_price || 0) *
          Number(stock.quantity || 0),

        current:
          Number(stock.current_price || 0) *
          Number(stock.quantity || 0),
      }));

      setChartData(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        background: "var(--card)",
        color: "var(--text)",
        borderColor: "var(--border)",
      }}
      className="border rounded-2xl p-6 h-96 shadow-lg transition-all duration-300"
    >
      <h2 className="text-2xl font-bold mb-5">
        Portfolio Performance
      </h2>

      {chartData.length === 0 ? (
        <div
          className="flex justify-center items-center h-72"
          style={{
            color: "var(--text)",
            opacity: 0.6,
          }}
        >
          No Portfolio Data
        </div>
      ) : (
        <ResponsiveContainer width="100%" height="85%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient
                id="portfolio"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#06B6D4"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="#06B6D4"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid stroke="var(--border)" />

            <XAxis
              dataKey="stock"
              stroke="var(--text)"
            />

            <YAxis
              stroke="var(--text)"
            />

            <Tooltip
              contentStyle={{
                background: "var(--card2)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                color: "var(--text)",
              }}
            />

            <Area
              dataKey="current"
              stroke="#06B6D4"
              fill="url(#portfolio)"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default PerformanceChart;