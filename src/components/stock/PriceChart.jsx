import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", price: 1520 },
  { day: "Tue", price: 1540 },
  { day: "Wed", price: 1535 },
  { day: "Thu", price: 1570 },
  { day: "Fri", price: 1600 },
  { day: "Sat", price: 1610 },
  { day: "Sun", price: 1625 },
];

function PriceChart() {
  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 h-96">

      <h2 className="text-2xl font-bold mb-5">
        Price Movement
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <AreaChart data={data}>

          <defs>

            <linearGradient id="stockChart" x1="0" y1="0" x2="0" y2="1">

              <stop offset="5%" stopColor="#22C55E" stopOpacity={0.8} />

              <stop offset="95%" stopColor="#22C55E" stopOpacity={0} />

            </linearGradient>

          </defs>

          <CartesianGrid stroke="#1e293b" />

          <XAxis dataKey="day"/>

          <YAxis/>

          <Tooltip/>

          <Area
            type="monotone"
            dataKey="price"
            stroke="#22C55E"
            strokeWidth={3}
            fill="url(#stockChart)"
          />

        </AreaChart>
      </ResponsiveContainer>

    </div>
  );
}

export default PriceChart;