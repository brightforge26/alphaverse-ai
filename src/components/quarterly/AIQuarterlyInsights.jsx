import { Brain, TrendingUp, CircleDollarSign } from "lucide-react";

function AIQuarterlyInsights() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <div className="flex items-center gap-3 mb-6">

        <Brain className="text-cyan-400" size={30} />

        <h2 className="text-2xl font-bold">
          AI Quarterly Insights
        </h2>

      </div>

      <div className="space-y-5">

        <div className="flex gap-3">

          <TrendingUp className="text-green-400" />

          <p>
            Revenue has increased continuously for the last 4 quarters.
          </p>

        </div>

        <div className="flex gap-3">

          <CircleDollarSign className="text-cyan-400" />

          <p>
            Net profit increased by <b>9.5%</b> compared to last quarter.
          </p>

        </div>

        <div className="bg-green-500/10 border border-green-500 rounded-xl p-4">

          <h3 className="text-green-400 font-bold">
            AI Recommendation
          </h3>

          <p className="mt-2">
            Financial performance is strong. Overall quarterly trend remains
            positive with healthy revenue and EPS growth.
          </p>

        </div>

      </div>

    </div>
  );
}

export default AIQuarterlyInsights;