const stocks = [
  {
    name: "TCS",
    price: "₹4,215",
    change: "+2.4%",
  },
  {
    name: "Wipro",
    price: "₹567",
    change: "+1.3%",
  },
  {
    name: "HCL Tech",
    price: "₹1,725",
    change: "+2.1%",
  },
  {
    name: "Tech Mahindra",
    price: "₹1,485",
    change: "+1.8%",
  },
];

function SimilarStocks() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-5">
        ⭐ Similar Stocks
      </h2>

      <div className="space-y-4">

        {stocks.map((stock) => (

          <div
  key={stock.name}
  className="grid grid-cols-3 items-center bg-slate-800 rounded-xl p-4 hover:bg-slate-700 transition"
>

  <span className="font-medium">
    {stock.name}
  </span>

  <span className="text-center">
    {stock.price}
  </span>

  <span className="text-right text-green-400 font-semibold">
    {stock.change}
  </span>

</div>

        ))}

      </div>

    </div>
  );
}

export default SimilarStocks;