function QuarterlySummary() {
  const quarters = [
    {
      quarter: "Q1 FY26",
      revenue: "₹42,280 Cr",
      profit: "₹6,921 Cr",
      eps: "₹16.45",
    },
    {
      quarter: "Q4 FY25",
      revenue: "₹40,925 Cr",
      profit: "₹6,685 Cr",
      eps: "₹15.92",
    },
    {
      quarter: "Q3 FY25",
      revenue: "₹39,112 Cr",
      profit: "₹6,310 Cr",
      eps: "₹15.08",
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-lg">

      {/* Header */}
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
        📑 Quarterly Performance
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-slate-300 dark:border-slate-700">

              <th className="text-left py-4 text-slate-600 dark:text-slate-400">
                Quarter
              </th>

              <th className="py-4 text-slate-600 dark:text-slate-400">
                Revenue
              </th>

              <th className="py-4 text-slate-600 dark:text-slate-400">
                Profit
              </th>

              <th className="py-4 text-slate-600 dark:text-slate-400">
                EPS
              </th>

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

                <td className="text-center text-slate-700 dark:text-slate-300">
                  {q.revenue}
                </td>

                <td className="text-center font-semibold text-green-500">
                  {q.profit}
                </td>

                <td className="text-center text-cyan-600 dark:text-cyan-400 font-semibold">
                  {q.eps}
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