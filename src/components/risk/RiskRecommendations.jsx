function RiskRecommendations() {

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-6">

        🤖 AI Recommendations

      </h2>

      <div className="space-y-4">

        <div className="bg-green-500/10 border border-green-500 rounded-xl p-4">

          ✅ Portfolio risk is within acceptable limits.

        </div>

        <div className="bg-yellow-500/10 border border-yellow-500 rounded-xl p-4">

          ⚠ Reduce IT allocation by 5%.

        </div>

        <div className="bg-cyan-500/10 border border-cyan-500 rounded-xl p-4">

          📈 Increase Healthcare allocation.

        </div>

        <div className="bg-blue-500/10 border border-blue-500 rounded-xl p-4">

          💡 Add one FMCG stock for diversification.

        </div>

      </div>

    </div>

  );

}

export default RiskRecommendations;