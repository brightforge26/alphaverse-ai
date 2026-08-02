import { ArrowUpRight } from "lucide-react";

function StatCard({ title, value, color }) {
  return (
    <div
      style={{
        background: "var(--card)",
        borderColor: "var(--border)",
        color: "var(--text)",
      }}
      className="rounded-2xl border p-6 hover:border-indigo-500 transition-all duration-300 shadow-lg hover:shadow-indigo-500/20"
    >
      <div className="flex justify-between items-center">

        <div>

          <p
            style={{
              color: "var(--text)",
              opacity: 0.7,
            }}
            className="text-sm"
          >
            {title}
          </p>

          <h2 className={`text-3xl font-bold mt-2 ${color}`}>
            {value}
          </h2>

        </div>

        <div
          style={{
            background: "var(--card2)",
          }}
          className="p-3 rounded-xl"
        >
          <ArrowUpRight
            className="text-indigo-400"
            size={24}
          />
        </div>

      </div>

      <div className="mt-5">

        <div
          style={{
            background: "var(--card2)",
          }}
          className="rounded-full h-2"
        >
          <div className="bg-gradient-to-r from-cyan-400 to-indigo-500 h-2 rounded-full w-3/4"></div>
        </div>

        <p className="text-green-400 text-sm mt-2">
          +8.4% this month
        </p>

      </div>

    </div>
  );
}

export default StatCard;