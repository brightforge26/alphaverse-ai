function RiskMeter() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        ⚠️ Risk Analysis
      </h2>

      <div className="w-full bg-slate-700 rounded-full h-5">

        <div className="bg-green-500 h-5 rounded-full w-1/4"></div>

      </div>

      <div className="flex justify-between mt-3">

        <span className="text-green-400">Low</span>

        <span className="text-slate-400">Medium</span>

        <span className="text-slate-400">High</span>

      </div>

      <div className="mt-6 space-y-3">

        <p>✔ Low volatility</p>

        <p>✔ Strong balance sheet</p>

        <p>✔ Stable quarterly growth</p>

      </div>

    </div>
  );
}

export default RiskMeter;