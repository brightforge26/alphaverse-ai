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
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-lg">

      <div className="mb-6">

        <h2 className="text-2xl font-bold">
          Portfolio Allocation
        </h2>

        <p className="text-slate-400">
          Current Holdings
        </p>

      </div>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={data}>

            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />

            <XAxis
              dataKey="name"
              stroke="#94a3b8"
            />

            <YAxis stroke="#94a3b8" />

            <Tooltip />

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