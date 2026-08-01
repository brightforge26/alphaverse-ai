import { useEffect, useState } from "react";
import {
  Brain,
  TrendingUp,
  Target,
  ShieldCheck,
  Loader2,
} from "lucide-react";
import axios from "axios";

function AIRecommendationStock() {
  const [recommendation, setRecommendation] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchRecommendation();
  }, []);

  const fetchRecommendation = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(
        "http://localhost:5000/api/ai/recommendation"
      );

      if (response.data.success) {
        setRecommendation(response.data.recommendation);
      } else {
        setError("Unable to get AI recommendation");
      }
    } catch (err) {
      console.error("AI Recommendation Error:", err);
      setError("Unable to connect to AI service");
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------
  // Extract AI response
  // -----------------------------
  const getValue = (label, nextLabel) => {
    if (!recommendation) return "";

    const start = recommendation.indexOf(label);

    if (start === -1) return "";

    const contentStart = start + label.length;

    const end = nextLabel
      ? recommendation.indexOf(nextLabel, contentStart)
      : recommendation.length;

    return recommendation
      .substring(
        contentStart,
        end === -1 ? recommendation.length : end
      )
      .replace(/\*\*/g, "")
      .trim();
  };

  const recommendationValue =
    getValue("Recommendation:", "Confidence:") || "N/A";

  const confidenceValue =
    getValue("Confidence:", "Reasons:") || "N/A";

  const reasonsText =
    getValue("Reasons:", "Target Price:") || "No reasons available.";

  const targetPrice =
    getValue("Target Price:", "Risk:") || "N/A";

  const risk =
    getValue("Risk:") || "N/A";

  const reasons = reasonsText
    .split(/\n/)
    .map((item) =>
      item
        .replace(/^\d+\.\s*/, "")
        .replace(/\*\*/g, "")
        .trim()
    )
    .filter(Boolean);

  // -----------------------------
  // Loading
  // -----------------------------
  if (loading) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

        <div className="flex items-center gap-3 mb-6">
          <Brain className="text-cyan-400" size={30} />

          <h2 className="text-2xl font-bold">
            AlphaVerse AI Recommendation
          </h2>
        </div>

        <div className="flex items-center justify-center py-16">
          <div className="text-center">

            <Loader2
              className="animate-spin text-cyan-400 mx-auto mb-4"
              size={40}
            />

            <p className="text-slate-400">
              Gemini AI is analyzing your portfolio...
            </p>

          </div>
        </div>

      </div>
    );
  }

  // -----------------------------
  // Error
  // -----------------------------
  if (error) {
    return (
      <div className="bg-slate-900 border border-red-500/30 rounded-2xl p-6">

        <div className="flex items-center gap-3 mb-4">
          <Brain className="text-red-400" size={30} />

          <h2 className="text-2xl font-bold">
            AlphaVerse AI Recommendation
          </h2>
        </div>

        <p className="text-red-400">
          {error}
        </p>

        <button
          onClick={fetchRecommendation}
          className="mt-5 bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg font-semibold"
        >
          Try Again
        </button>

      </div>
    );
  }

  // -----------------------------
  // Main UI
  // -----------------------------
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">

        <Brain
          className="text-cyan-400"
          size={30}
        />

        <div>
          <h2 className="text-2xl font-bold">
            AlphaVerse AI Recommendation
          </h2>

          <p className="text-sm text-slate-400">
            Powered by Gemini AI
          </p>
        </div>

      </div>

      {/* Recommendation */}
      <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-5">

        <div className="flex justify-between items-center">

          <div>

            <p className="text-slate-400">
              Recommendation
            </p>

            <h1
              className={`text-5xl font-bold ${
                recommendationValue === "BUY"
                  ? "text-green-400"
                  : recommendationValue === "SELL"
                  ? "text-red-400"
                  : "text-yellow-400"
              }`}
            >
              {recommendationValue}
            </h1>

          </div>

          <div className="text-right">

            <p className="text-slate-400">
              Confidence
            </p>

            <h1 className="text-4xl font-bold text-cyan-400">
              {confidenceValue}
            </h1>

          </div>

        </div>

      </div>

      {/* Reasons */}
      <div className="space-y-4 mt-6">

        {reasons.map((reason, index) => (

          <div
            key={index}
            className="flex gap-3 items-start"
          >

            <TrendingUp
              className="text-green-400 mt-1 flex-shrink-0"
              size={20}
            />

            <p className="text-slate-300">
              {reason}
            </p>

          </div>

        ))}

      </div>

      {/* Target Price */}
      <div className="flex gap-3 mt-6">

        <Target
          className="text-cyan-400 flex-shrink-0"
          size={22}
        />

        <div>

          <p className="text-slate-400">
            Target Price
          </p>

          <p className="text-slate-200 font-semibold">
            {targetPrice}
          </p>

        </div>

      </div>

      {/* Risk */}
      <div className="flex gap-3 mt-5">

        <ShieldCheck
          className="text-yellow-400 flex-shrink-0"
          size={22}
        />

        <div>

          <p className="text-slate-400">
            Risk
          </p>

          <p className="text-slate-200">
            {risk}
          </p>

        </div>

      </div>

      {/* Refresh */}
      <button
        onClick={fetchRecommendation}
        className="mt-6 w-full bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold py-3 rounded-xl transition"
      >
        🔄 Refresh AI Recommendation
      </button>

    </div>
  );
}

export default AIRecommendationStock;