import { useEffect, useState } from "react";
import {
  Brain,
  TrendingUp,
  Target,
  ShieldCheck,
} from "lucide-react";

import { analyzePortfolio } from "../../api/ai";

function AIRecommendation() {
  const [analysis, setAnalysis] = useState(null);

  useEffect(() => {
    loadAnalysis();
  }, []);

  const loadAnalysis = async () => {
    try {
      const res = await analyzePortfolio();
      setAnalysis(res.data.analysis || res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!analysis) {
    return (
      <div
        style={{
          background: "var(--card)",
          borderColor: "var(--border)",
          color: "var(--text)",
        }}
        className="rounded-2xl border p-6 transition-all duration-300"
      >
        Loading AI Analysis...
      </div>
    );
  }

  return (
    <div
      style={{
        background: "var(--card)",
        borderColor: "var(--border)",
        color: "var(--text)",
      }}
      className="rounded-2xl border p-6 shadow-lg transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-6">
        <Brain className="text-cyan-400" size={28} />

        <h2 className="text-2xl font-bold">
          AlphaVerse AI Analysis
        </h2>
      </div>

      {/* Recommendation */}
      <div className="bg-green-500/10 border border-green-500 rounded-xl p-5">

        <p
          style={{
            color: "var(--text)",
            opacity: 0.7,
          }}
        >
          Recommendation
        </p>

        <h1 className="text-5xl font-bold text-green-400 mt-2">
          {analysis.recommendation.action}
        </h1>

        <div className="mt-5">
          <div className="flex justify-between">
            <span>Confidence</span>

            <span className="font-bold">
              {analysis.recommendation.confidence}
            </span>
          </div>
        </div>
      </div>

      {/* Reasons */}
      <div className="space-y-4 mt-6">
        {analysis.recommendation.reasons.map((item, index) => (
          <div key={index} className="flex gap-3">
            <TrendingUp className="text-green-400" />
            <p>{item}</p>
          </div>
        ))}
      </div>

      <hr
        className="my-6"
        style={{ borderColor: "var(--border)" }}
      />

      {/* Suggestions */}
      <h3 className="font-bold text-lg mb-3">
        Suggested Stocks
      </h3>

      <div className="space-y-3">
        {analysis.suggestions.map((stock, index) => (
          <div key={index}>
            <div className="flex gap-2">
              <Target className="text-cyan-400" />

              <strong>{stock.stock}</strong>
            </div>

            <p
              className="ml-8"
              style={{
                color: "var(--text)",
                opacity: 0.7,
              }}
            >
              {stock.reason}
            </p>
          </div>
        ))}
      </div>

      <hr
        className="my-6"
        style={{ borderColor: "var(--border)" }}
      />

      {/* Portfolio Health */}
      <div className="flex items-center gap-3 mb-3">
        <ShieldCheck className="text-green-400" />

        <h3 className="font-bold">
          Portfolio Health
        </h3>
      </div>

      <div className="space-y-2">
        <p>
          Health Score :
          <strong> {analysis.health.score}/100</strong>
        </p>

        <p>
          Risk :
          <strong> {analysis.health.risk}</strong>
        </p>

        <p>
          Diversification :
          <strong> {analysis.health.diversification}</strong>
        </p>

        <p>
          Growth :
          <strong> {analysis.health.growth}</strong>
        </p>
      </div>

      <p
        className="mt-5"
        style={{
          color: "var(--text)",
          opacity: 0.7,
        }}
      >
        {analysis.health.summary}
      </p>
    </div>
  );
}

export default AIRecommendation;