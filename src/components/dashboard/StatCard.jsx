import { ArrowUpRight } from "lucide-react";

function StatCard({ title, value, color }) {
  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 hover:border-indigo-500 transition duration-300 shadow-lg hover:shadow-indigo-500/20">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-slate-400 text-sm">
            {title}
          </p>

          <h2 className={`text-3xl font-bold mt-2 ${color}`}>
            {value}
          </h2>

        </div>

        <div className="bg-indigo-500/20 p-3 rounded-xl">

          <ArrowUpRight
            className="text-indigo-400"
            size={24}
          />

        </div>

      </div>

      <div className="mt-5">

        <div className="w-full bg-slate-800 rounded-full h-2">

          <div className="bg-gradient-to-r from-cyan-400 to-indigo-500 h-2 rounded-full w-3/4"></div>

        </div>

        <p className="text-green-400 text-sm mt-2">
          +8.4% this month
        </p>

      </div>

    </div>
  );
}

export default StatCard;