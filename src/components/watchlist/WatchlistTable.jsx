const stocks = [
  {
    stock: "Infosys",
    price: "$1,625",
    change: "+2.5%",
    ai: "BUY",
  },
  {
    stock: "TCS",
    price: "$4,215",
    change: "+1.8%",
    ai: "BUY",
  },
  {
    stock: "Reliance",
    price: "$3,082",
    change: "-0.4%",
    ai: "HOLD",
  },
  {
    stock: "HDFC Bank",
    price: "$1,945",
    change: "+0.9%",
    ai: "BUY",
  },
];

function WatchlistTable() {
  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">

      <h2 className="text-2xl font-bold mb-5">
        My Watchlist
      </h2>

      <table className="w-full">

        <thead className="text-slate-400">

          <tr>
            <th className="text-left">Stock</th>
            <th>Price</th>
            <th>Change</th>
            <th>AI</th>
          </tr>

        </thead>

        <tbody>

          {stocks.map((item) => (

            <tr
              key={item.stock}
              className="border-t border-slate-700 h-14"
            >

              <td>{item.stock}</td>

              <td className="text-center">
                {item.price}
              </td>

              <td
                className={`text-center ${
                  item.change.startsWith("-")
                    ? "text-red-400"
                    : "text-green-400"
                }`}
              >
                {item.change}
              </td>

              <td className="text-center text-cyan-400 font-bold">
                {item.ai}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default WatchlistTable;