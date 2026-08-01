const quarters = [
  { q: "Q1", revenue: "₹38,000 Cr", profit: "₹5,400 Cr", eps: "13.2" },
  { q: "Q2", revenue: "₹39,200 Cr", profit: "₹5,900 Cr", eps: "14.1" },
  { q: "Q3", revenue: "₹40,100 Cr", profit: "₹6,300 Cr", eps: "15.0" },
  { q: "Q4", revenue: "₹42,300 Cr", profit: "₹6,900 Cr", eps: "16.4" },
];

function QuarterTable() {
  return (
    <div className="bg-slate-900 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-5">
        Quarterly Financials
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

          {quarters.map((item) => (

            <tr
              key={item.q}
              className="border-t border-slate-700 h-14"
            >
              <td>{item.q}</td>
              <td className="text-center">{item.revenue}</td>
              <td className="text-center text-green-400">{item.profit}</td>
              <td className="text-center">{item.eps}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default QuarterTable;