function FundamentalAnalysis() {
  const data = [
    ["Market Cap", "₹6.8T"],
    ["P/E Ratio", "31.4"],
    ["EPS", "₹52.80"],
    ["ROE", "28.5%"],
    ["Dividend Yield", "2.1%"],
    ["Debt to Equity", "0.12"],
  ];

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-lg">

      {/* Header */}
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
        📊 Fundamental Analysis
      </h2>

      {/* Data */}
      <div className="space-y-4">

        {data.map((item, index) => (

          <div
            key={index}
            className="flex justify-between items-center bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-5 py-4 hover:border-cyan-500 transition duration-300"
          >

            <span className="text-slate-600 dark:text-slate-400 font-medium">
              {item[0]}
            </span>

            <span className="text-lg font-bold text-cyan-600 dark:text-cyan-400">
              {item[1]}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default FundamentalAnalysis;