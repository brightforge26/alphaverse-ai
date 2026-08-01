const movers = [
  { stock: "Infosys", gain: "+2.6%" },
  { stock: "Reliance", gain: "+3.2%" },
  { stock: "ICICI Bank", gain: "+1.9%" },
];

function MarketMovers() {
  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">

      <h2 className="text-2xl font-bold mb-5">
        📈 Market Movers
      </h2>

      {movers.map((item) => (

        <div
          key={item.stock}
          className="flex justify-between py-3 border-b border-slate-700"
        >

          <span>{item.stock}</span>

          <span className="text-green-400">
            {item.gain}
          </span>

        </div>

      ))}

    </div>
  );
}

export default MarketMovers;