import { PieChart } from "lucide-react";

const sectors = [
  { name: "IT", value: 40 },
  { name: "Banking", value: 25 },
  { name: "Healthcare", value: 15 },
  { name: "Energy", value: 10 },
  { name: "Others", value: 10 },
];

function Diversification() {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-lg">

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">

        <PieChart
          className="text-cyan-500"
          size={28}
        />

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Portfolio Diversification
        </h2>

      </div>

      {/* Sectors */}
      <div className="space-y-5">

        {sectors.map((sector) => (

          <div key={sector.name}>

            <div className="flex justify-between mb-2">

              <span className="font-medium text-slate-900 dark:text-white">
                {sector.name}
              </span>

              <span className="font-semibold text-cyan-500">
                {sector.value}%
              </span>

            </div>

            <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">

              <div
                className="h-3 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-700"
                style={{
                  width: `${sector.value}%`,
                }}
              ></div>

            </div>

          </div>

        ))}

      </div>

      {/* Summary */}
      <div className="mt-8 p-4 rounded-xl bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-300 dark:border-cyan-500/20">

        <p className="text-cyan-700 dark:text-cyan-400 font-medium">
          💡 Your portfolio is well diversified across 5 sectors.
        </p>

      </div>

    </div>
  );
}

export default Diversification;