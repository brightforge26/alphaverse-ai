import { TrendingUp, TrendingDown } from "lucide-react";

const watchlist = [
  {
    symbol: "TCS",
    price: "₹4,215",
    change: "+2.34%",
    positive: true,
  },
  {
    symbol: "INFY",
    price: "₹1,825",
    change: "+1.12%",
    positive: true,
  },
  {
    symbol: "RELIANCE",
    price: "₹3,082",
    change: "-0.84%",
    positive: false,
  },
  {
    symbol: "HDFCBANK",
    price: "₹1,945",
    change: "+3.20%",
    positive: true,
  },
];

function WatchlistPreview() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-5">
        ⭐ Watchlist
      </h2>

      <div className="space-y-4">

        {watchlist.map((stock) => (

          <div
            key={stock.symbol}
            className="flex justify-between items-center bg-slate-800 rounded-xl p-4 hover:bg-slate-700 transition"
          >

            <div>

              <h3 className="font-semibold">
                {stock.symbol}
              </h3>

              <p className="text-slate-400">
                {stock.price}
              </p>

            </div>

            <div
              className={`flex items-center gap-2 ${
                stock.positive ? "text-green-400" : "text-red-400"
              }`}
            >
              {stock.positive ? (
                <TrendingUp size={18} />
              ) : (
                <TrendingDown size={18} />
              )}

              <span>{stock.change}</span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default WatchlistPreview;