import {
  Brain,
  CheckCircle2,
  TriangleAlert,
  TrendingUp,
  Lightbulb,
} from "lucide-react";

const recommendations = [
  {
    icon: <CheckCircle2 size={22} className="text-green-500" />,
    title: "Portfolio Health",
    message: "Portfolio risk is within acceptable limits.",
    bg: "bg-green-100 dark:bg-green-500/10",
    border: "border-green-300 dark:border-green-500/20",
    text: "text-green-600 dark:text-green-400",
  },
  {
    icon: <TriangleAlert size={22} className="text-yellow-500" />,
    title: "Reduce Exposure",
    message: "Reduce IT sector allocation by approximately 5%.",
    bg: "bg-yellow-100 dark:bg-yellow-500/10",
    border: "border-yellow-300 dark:border-yellow-500/20",
    text: "text-yellow-600 dark:text-yellow-400",
  },
  {
    icon: <TrendingUp size={22} className="text-cyan-500" />,
    title: "Growth Opportunity",
    message: "Increase Healthcare allocation for better long-term stability.",
    bg: "bg-cyan-100 dark:bg-cyan-500/10",
    border: "border-cyan-300 dark:border-cyan-500/20",
    text: "text-cyan-600 dark:text-cyan-400",
  },
  {
    icon: <Lightbulb size={22} className="text-indigo-500" />,
    title: "Diversification",
    message: "Consider adding one FMCG stock to improve portfolio diversification.",
    bg: "bg-indigo-100 dark:bg-indigo-500/10",
    border: "border-indigo-300 dark:border-indigo-500/20",
    text: "text-indigo-600 dark:text-indigo-400",
  },
];

function RiskRecommendations() {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-lg">

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">

        <Brain
          className="text-cyan-500"
          size={30}
        />

        <div>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            AI Risk Recommendations
          </h2>

          <p className="text-slate-500 dark:text-slate-400">
            Personalized suggestions to improve portfolio stability
          </p>

        </div>

      </div>

      {/* Recommendation Cards */}
      <div className="space-y-4">

        {recommendations.map((item, index) => (

          <div
            key={index}
            className={`${item.bg} ${item.border} border rounded-xl p-5 flex gap-4 items-start hover:scale-[1.02] transition-all duration-300`}
          >

            <div className="mt-1">
              {item.icon}
            </div>

            <div>

              <h3 className={`font-bold text-lg ${item.text}`}>
                {item.title}
              </h3>

              <p className="mt-1 text-slate-700 dark:text-slate-300">
                {item.message}
              </p>

            </div>

          </div>

        ))}

      </div>

      {/* Footer */}
      <div className="mt-8 p-4 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">

        <p className="text-slate-700 dark:text-slate-300">
          <span className="font-semibold text-cyan-500">AI Summary:</span>{" "}
          Your portfolio is currently at a <strong>Moderate Risk</strong> level.
          A few allocation adjustments can improve diversification and reduce
          long-term volatility.
        </p>

      </div>

    </div>
  );
}

export default RiskRecommendations;
