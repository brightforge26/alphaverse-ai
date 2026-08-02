import {
  TrendingUp,
  ShieldCheck,
  Globe2,
  BellRing,
} from "lucide-react";

function InvestmentPreferences() {

  const preferences = [
    {
      title: "Investment Style",
      value: "Growth",
      color: "text-cyan-500",
      bg: "bg-cyan-100 dark:bg-cyan-500/10",
      icon: <TrendingUp size={20} />,
    },
    {
      title: "Risk Appetite",
      value: "Medium",
      color: "text-yellow-500",
      bg: "bg-yellow-100 dark:bg-yellow-500/10",
      icon: <ShieldCheck size={20} />,
    },
    {
      title: "Preferred Market",
      value: "NSE",
      color: "text-green-500",
      bg: "bg-green-100 dark:bg-green-500/10",
      icon: <Globe2 size={20} />,
    },
    {
      title: "AI Notifications",
      value: "Enabled",
      color: "text-green-500",
      bg: "bg-green-100 dark:bg-green-500/10",
      icon: <BellRing size={20} />,
    },
  ];


  return (

    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-lg">


      {/* Header */}
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
        Investment Preferences
      </h2>


      {/* Preferences */}
      <div className="space-y-4">


        {preferences.map((item) => (

          <div
            key={item.title}
            className="flex justify-between items-center bg-slate-100 dark:bg-slate-800 rounded-xl p-4 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
          >

            <div className="flex items-center gap-3">

              <div className={`p-3 rounded-xl ${item.bg} ${item.color}`}>

                {item.icon}

              </div>


              <span className="font-medium text-slate-900 dark:text-white">

                {item.title}

              </span>

            </div>


            <span className={`font-bold ${item.color}`}>

              {item.value}

            </span>


          </div>

        ))}


      </div>


      {/* AI Insight */}
      <div className="mt-6 bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-300 dark:border-cyan-500/20 rounded-xl p-4">

        <p className="text-cyan-700 dark:text-cyan-400">

          🤖 AI Insight: Your profile indicates a balanced growth-oriented investment strategy.

        </p>

      </div>


    </div>

  );

}

export default InvestmentPreferences;