const stocks = [
  { name: "Infosys", change: "+2.5%" },
  { name: "TCS", change: "+1.8%" },
  { name: "Reliance", change: "+3.1%" },
  { name: "HDFC Bank", change: "+1.2%" },
];

function TrendingStocks() {
  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">

      <h2 className="text-2xl font-bold mb-5">
        🔥 Trending Stocks
      </h2>

      {stocks.map((stock) => (

        <div
          key={stock.name}
          className="flex justify-between py-3 border-b border-slate-700"
        >

          <span>{stock.name}</span>

          <span className="text-green-400">
            {stock.change}
          </span>

        </div>

      ))}

    </div>
  );
}

export default TrendingStocks;