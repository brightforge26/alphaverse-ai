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

      console.log("Portfolio Response:", res.data);

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

      console.log("Chart Data:", data);

      setChartData(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-slate-900 rounded-2xl p-6 h-96">
      <h2 className="text-2xl font-bold mb-5">
        Portfolio Performance
      </h2>

      {chartData.length === 0 ? (
        <div className="flex justify-center items-center h-72 text-gray-400">
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

            <CartesianGrid stroke="#334155" />

            <XAxis
              dataKey="stock"
              stroke="#ffffff"
            />

            <YAxis
              stroke="#ffffff"
            />

            <Tooltip />

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