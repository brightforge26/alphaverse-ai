import { TrendingUp } from "lucide-react";

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
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-lg">

      {/* Header */}
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
        ⭐ Similar Stocks
      </h2>

      <div className="space-y-4">

        {stocks.map((stock) => (

          <div
            key={stock.name}
            className="grid grid-cols-3 items-center bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"
          >

            {/* Stock Name */}
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">
                {stock.name}
              </h3>
            </div>

            {/* Price */}
            <div className="text-center">
              <span className="font-medium text-slate-700 dark:text-slate-300">
                {stock.price}
              </span>
            </div>

            {/* Change */}
            <div className="flex justify-end items-center gap-2 text-green-500 font-semibold">

              <TrendingUp size={18} />

              <span>{stock.change}</span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default SimilarStocks;