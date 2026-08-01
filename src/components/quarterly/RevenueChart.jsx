import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { q: "Q1", revenue: 38000 },
  { q: "Q2", revenue: 39200 },
  { q: "Q3", revenue: 40100 },
  { q: "Q4", revenue: 42300 },
];

function RevenueChart() {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 h-96">

      <h2 className="text-2xl font-bold mb-5">
        Revenue Growth
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={data}>
          <XAxis dataKey="q" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="revenue"
            fill="#06B6D4"
            radius={[10,10,0,0]}
          />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}

export default RevenueChart;