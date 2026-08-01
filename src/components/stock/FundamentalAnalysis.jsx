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
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        📊 Fundamental Analysis
      </h2>

      <div className="space-y-4">

        {data.map((item, index) => (

          <div
            key={index}
            className="flex justify-between border-b border-slate-700 pb-3"
          >

            <span className="text-slate-400">
              {item[0]}
            </span>

            <span className="font-bold">
              {item[1]}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default FundamentalAnalysis;