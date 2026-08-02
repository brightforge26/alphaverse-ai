import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { getPortfolioChart } from "../../api/dashboard";

function PortfolioChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchChart();
  }, []);

  const fetchChart = async () => {
    try {
      const res = await getPortfolioChart();
      setData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        background: "var(--card)",
        borderColor: "var(--border)",
        color: "var(--text)",
      }}
      className="rounded-2xl border p-6 shadow-lg transition-all duration-300"
    >
      <div className="mb-6">
        <h2
          className="text-2xl font-bold"
          style={{ color: "var(--text)" }}
        >
          Portfolio Allocation
        </h2>

        <p
          style={{
            color: "var(--text)",
            opacity: 0.7,
          }}
        >
          Current Holdings
        </p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="var(--border)"
            />

            <XAxis
              dataKey="name"
              stroke="var(--text)"
            />

            <YAxis stroke="var(--text)" />

            <Tooltip
              contentStyle={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                color: "var(--text)",
                borderRadius: "10px",
              }}
              labelStyle={{
                color: "var(--text)",
              }}
            />

            <Bar
              dataKey="value"
              fill="#06b6d4"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default PortfolioChart;