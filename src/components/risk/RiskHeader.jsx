import { ShieldAlert } from "lucide-react";

function RiskHeader() {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-lg flex flex-col md:flex-row justify-between items-center">

      {/* Left */}
      <div className="flex items-center gap-4">

        <div className="w-16 h-16 rounded-2xl bg-yellow-100 dark:bg-yellow-500/10 flex items-center justify-center">

          <ShieldAlert
            size={34}
            className="text-yellow-500"
          />

        </div>

        <div>

          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            Risk Analysis
          </h1>

          <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">
            AI-powered portfolio risk assessment
          </p>

        </div>

      </div>

      {/* Right */}
      <div className="mt-6 md:mt-0">

        <div className="px-5 py-3 rounded-xl bg-yellow-100 dark:bg-yellow-500/10 border border-yellow-300 dark:border-yellow-500/20">

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Overall Risk
          </p>

          <h2 className="text-3xl font-bold text-yellow-500">
            Medium
          </h2>

        </div>

      </div>

    </div>
  );
}

export default RiskHeader;