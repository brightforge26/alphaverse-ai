function QuarterlySummary() {
  const quarters = [
    {
      quarter: "Q1 FY26",
      revenue: "₹42,280 Cr",
      profit: "₹6,921 Cr",
      eps: "₹16.45",
      growth: "+3.3%",
    },
    {
      quarter: "Q4 FY25",
      revenue: "₹40,925 Cr",
      profit: "₹6,685 Cr",
      eps: "₹15.92",
      growth: "+2.8%",
    },
    {
      quarter: "Q3 FY25",
      revenue: "₹39,112 Cr",
      profit: "₹6,310 Cr",
      eps: "₹15.08",
      growth: "+1.9%",
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-lg">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          📑 Quarterly Performance
        </h2>

        <span className="px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 text-sm font-semibold">
          Last 3 Quarters
        </span>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-slate-300 dark:border-slate-700">

              <th className="text-left py-4">Quarter</th>

              <th className="text-center py-4">Revenue</th>

              <th className="text-center py-4">Profit</th>

              <th className="text-center py-4">EPS</th>

              <th className="text-center py-4">Growth</th>

            </tr>

          </thead>

          <tbody>

            {quarters.map((q) => (

              <tr
                key={q.quarter}
                className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >

                <td className="py-4 font-semibold text-slate-900 dark:text-white">
                  {q.quarter}
                </td>

                <td className="text-center">
                  {q.revenue}
                </td>

                <td className="text-center text-green-500 font-semibold">
                  {q.profit}
                </td>

                <td className="text-center text-cyan-500 font-semibold">
                  {q.eps}
                </td>

                <td className="text-center">

                  <span className="px-2 py-1 rounded-lg bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 font-semibold">

                    {q.growth}

                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default QuarterlySummary;