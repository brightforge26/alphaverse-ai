import {
  TrendingUp,
  Activity,
  BarChart3,
} from "lucide-react";

function TechnicalAnalysis() {
  const indicators = [
    ["RSI", "62", "Bullish"],
    ["MACD", "Positive", "Bullish"],
    ["50 DMA", "Above", "Strong"],
    ["200 DMA", "Above", "Bullish"],
    ["Volume", "High", "Positive"],
  ];

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-lg">

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">

        <Activity
          className="text-cyan-500"
          size={28}
        />

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Technical Indicators
        </h2>

      </div>

      {/* Indicators */}
      <div className="space-y-4">

        {indicators.map((item, index) => (

          <div
            key={index}
            className="flex justify-between items-center bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"
          >

            {/* Indicator */}
            <div className="flex items-center gap-3">

              <BarChart3
                size={20}
                className="text-cyan-500"
              />

              <span className="font-semibold text-slate-900 dark:text-white">
                {item[0]}
              </span>

            </div>

            {/* Value */}
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              {item[1]}
            </span>

            {/* Status */}
            <div className="flex items-center gap-2">

              <TrendingUp
                size={18}
                className="text-green-500"
              />

              <span className="font-semibold text-green-500">
                {item[2]}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default TechnicalAnalysis;