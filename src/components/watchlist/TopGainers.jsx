const gainers = [
  { stock: "Infosys", gain: "+2.5%" },
  { stock: "Reliance", gain: "+2.1%" },
  { stock: "TCS", gain: "+1.9%" },
  { stock: "ICICI Bank", gain: "+1.4%" },
];

function TopGainers() {
  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">

      <h2 className="text-2xl font-bold mb-5">
        🚀 Top Gainers
      </h2>

      {gainers.map((item) => (

        <div
          key={item.stock}
          className="flex justify-between border-b border-slate-700 py-3"
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

export default TopGainers;