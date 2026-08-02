import { ShieldCheck } from "lucide-react";

function RiskScore() {

  const score = 28;

  return (

    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-lg">

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">

        <div className="p-3 rounded-xl bg-green-100 dark:bg-green-500/10">

          <ShieldCheck
            className="text-green-500"
            size={30}
          />

        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Overall Risk Score
        </h2>

      </div>


      {/* Score Circle */}
      <div className="flex justify-center">

        <div className="relative w-48 h-48 rounded-full border-[12px] border-green-500 flex items-center justify-center">

          <div className="absolute inset-0 rounded-full border-[12px] border-green-200 dark:border-green-500/20"></div>

          <div className="text-center z-10">

            <h1 className="text-6xl font-bold text-green-500">
              {score}
            </h1>

            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-2">
              LOW RISK
            </p>

          </div>

        </div>

      </div>


      {/* Risk Description */}
      <div className="mt-8 bg-green-100 dark:bg-green-500/10 border border-green-300 dark:border-green-500/20 rounded-xl p-4 text-center">

        <p className="text-green-700 dark:text-green-400 font-medium">
          Your portfolio has low risk exposure with stable asset allocation.
        </p>

      </div>


      {/* Risk Scale */}
      <div className="mt-6">

        <div className="flex justify-between text-sm mb-2">

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


        <div className="w-full h-3 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">

          <div
            className="h-3 rounded-full bg-green-500"
            style={{
              width: `${score}%`,
            }}
          ></div>

        </div>

      </div>


    </div>

  );

}

export default RiskScore;