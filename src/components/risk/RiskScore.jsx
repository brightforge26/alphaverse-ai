import { ShieldCheck } from "lucide-react";

function RiskScore() {

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <div className="flex items-center gap-3 mb-6">

        <ShieldCheck className="text-green-400" size={30} />

        <h2 className="text-2xl font-bold">

          Overall Risk Score

        </h2>

      </div>

      <div className="flex justify-center">

        <div className="w-44 h-44 rounded-full border-[10px] border-green-500 flex items-center justify-center">

          <div className="text-center">

            <h1 className="text-5xl font-bold text-green-400">
              28
            </h1>

            <p className="text-slate-400">
              LOW RISK
            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default RiskScore;