import { useEffect, useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { getStock } from "../../api/stock";
function StockHeader({ symbol }) {
  const [stock, setStock] = useState(null);

  useEffect(() => {
    if (symbol) {
      loadStock();
    }
  }, [symbol]);

  const loadStock = async () => {
    try {
      const res = await getStock(symbol);

      if (res.data.success) {
        setStock(res.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (!stock) {
    return (
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold">
          Loading Stock...
        </h2>
      </div>
    );
  }

  const price = Number(stock.price || 0);

  const change = Number(
    stock.percent_change ||
      stock.change_percent ||
      0
  );

  const todayChange = Number(
    stock.change || 0
  );

  const isPositive = change >= 0;

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center">

      {/* Left */}
      <div>

        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          {stock.name || symbol}
        </h1>

        <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">
          {stock.exchange || "NSE"} :
          <span className="font-semibold ml-1">
            {stock.symbol}
          </span>
        </p>

        <div className="flex gap-3 mt-4">

          <span className="px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 text-sm font-semibold">
            {stock.type || "Equity"}
          </span>

          <span className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400 text-sm font-semibold">
            Live Market
          </span>

        </div>

      </div>

      {/* Right */}

      <div className="text-right mt-6 md:mt-0">

        <h1
          className={`text-5xl font-bold ${
            isPositive
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          ₹{price.toFixed(2)}
        </h1>

        <div className="flex items-center justify-end gap-2 mt-2">

          {isPositive ? (
            <TrendingUp
              size={22}
              className="text-green-500"
            />
          ) : (
            <TrendingDown
              size={22}
              className="text-red-500"
            />
          )}

          <p
            className={`text-xl font-semibold ${
              isPositive
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {isPositive ? "+" : ""}
            {change.toFixed(2)}%
          </p>

        </div>

        <p className="text-slate-500 dark:text-slate-400 mt-2">
          {isPositive ? "+" : ""}
          ₹{todayChange.toFixed(2)} Today
        </p>

      </div>

    </div>
  );
}

export default StockHeader;