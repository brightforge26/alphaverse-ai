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
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        📑 Quarterly Performance
      </h2>

      <table className="w-full">

        <thead className="text-slate-400">

          <tr>
            <th className="text-left">Quarter</th>
            <th>Revenue</th>
            <th>Profit</th>
            <th>EPS</th>
          </tr>

        </thead>

        <tbody>

          {quarters.map((q) => (

            <tr
              key={q.quarter}
              className="border-t border-slate-700 h-14"
            >

              <td>{q.quarter}</td>

              <td className="text-center">
                {q.revenue}
              </td>

              <td className="text-center text-green-400">
                {q.profit}
              </td>

              <td className="text-center">
                {q.eps}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default QuarterlySummary;