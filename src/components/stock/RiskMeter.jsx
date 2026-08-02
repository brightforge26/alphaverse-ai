function RiskMeter() {
  const risk = 25; // 25% = Low Risk

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-lg">

      {/* Header */}
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
        ⚠️ Risk Analysis
      </h2>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-5 overflow-hidden">

        <div
          className="bg-gradient-to-r from-green-500 to-emerald-400 h-5 rounded-full transition-all duration-700"
          style={{ width: `${risk}%` }}
        ></div>

      </div>

      {/* Labels */}
      <div className="flex justify-between mt-3 text-sm font-medium">

        <span className="text-green-500">
          Low
        </span>

        <span className="text-yellow-500">
          Medium
        </span>

        <span className="text-red-500">
          High
        </span>

      </div>

      {/* Risk Score */}
      <div className="mt-5 flex justify-between items-center">

        <span className="text-slate-600 dark:text-slate-400">
          Current Risk Score
        </span>

        <span className="font-bold text-green-500 text-lg">
          {risk}/100
        </span>

      </div>

      {/* Insights */}
      <div className="mt-6 space-y-3">

        <div className="bg-green-100 dark:bg-green-500/10 border border-green-300 dark:border-green-500/20 rounded-xl p-3">
          <p className="text-green-700 dark:text-green-400">
            ✔ Low volatility
          </p>
        </div>

        <div className="bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-300 dark:border-cyan-500/20 rounded-xl p-3">
          <p className="text-cyan-700 dark:text-cyan-400">
            ✔ Strong balance sheet
          </p>
        </div>

        <div className="bg-indigo-100 dark:bg-indigo-500/10 border border-indigo-300 dark:border-indigo-500/20 rounded-xl p-3">
          <p className="text-indigo-700 dark:text-indigo-400">
            ✔ Stable quarterly growth
          </p>
        </div>

      </div>

    </div>
  );
}

export default RiskMeter;