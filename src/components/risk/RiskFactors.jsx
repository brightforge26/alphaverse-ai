import {
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";

const factors = [
  {
    factor: "Market Risk",
    level: "Low",
  },
  {
    factor: "Sector Risk",
    level: "Medium",
  },
  {
    factor: "Liquidity Risk",
    level: "Low",
  },
  {
    factor: "Volatility",
    level: "Medium",
  },
];

function RiskFactors() {
  const getStyle = (level) => {
    switch (level) {
      case "Low":
        return {
          color: "text-green-500",
          bg: "bg-green-100 dark:bg-green-500/10",
          border: "border-green-300 dark:border-green-500/20",
          icon: <ShieldCheck size={18} className="text-green-500" />,
        };

      case "Medium":
        return {
          color: "text-yellow-500",
          bg: "bg-yellow-100 dark:bg-yellow-500/10",
          border: "border-yellow-300 dark:border-yellow-500/20",
          icon: <AlertTriangle size={18} className="text-yellow-500" />,
        };

      default:
        return {
          color: "text-red-500",
          bg: "bg-red-100 dark:bg-red-500/10",
          border: "border-red-300 dark:border-red-500/20",
          icon: <ShieldAlert size={18} className="text-red-500" />,
        };
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-lg">

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">

        <ShieldAlert
          className="text-cyan-500"
          size={28}
        />

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Risk Factors
        </h2>

      </div>

      {/* Risk List */}
      <div className="space-y-4">

        {factors.map((item) => {
          const style = getStyle(item.level);

          return (
            <div
              key={item.factor}
              className="flex justify-between items-center bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"
            >

              <span className="font-medium text-slate-900 dark:text-white">
                {item.factor}
              </span>

              <div
                className={`flex items-center gap-2 px-3 py-1 rounded-full ${style.bg} ${style.border} border`}
              >
                {style.icon}

                <span className={`font-semibold ${style.color}`}>
                  {item.level}
                </span>
              </div>

            </div>
          );
        })}

      </div>

      {/* Summary */}
      <div className="mt-8 p-4 rounded-xl bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-300 dark:border-cyan-500/20">

        <p className="text-cyan-700 dark:text-cyan-400 font-medium">
          💡 Overall portfolio risk is <strong>Moderate</strong>. Diversification helps reduce exposure to market fluctuations.
        </p>

      </div>

    </div>
  );
}

export default RiskFactors;