import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { q: "Q1", profit: 5400 },
  { q: "Q2", profit: 5900 },
  { q: "Q3", profit: 6300 },
  { q: "Q4", profit: 6900 },
];

function ProfitChart() {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 h-96">

      <h2 className="text-2xl font-bold mb-5">
        Net Profit
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <XAxis dataKey="q" />
          <YAxis />
          <Tooltip />
          <Line
            dataKey="profit"
            stroke="#22C55E"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}

export default ProfitChart;