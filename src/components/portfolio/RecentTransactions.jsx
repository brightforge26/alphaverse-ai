const transactions = [
  {
    stock: "Infosys",
    action: "BUY",
    amount: "₹25,000",
    date: "30 Jul",
  },
  {
    stock: "TCS",
    action: "BUY",
    amount: "₹18,000",
    date: "29 Jul",
  },
  {
    stock: "HDFC Bank",
    action: "SELL",
    amount: "₹12,000",
    date: "28 Jul",
  },
  {
    stock: "Reliance",
    action: "BUY",
    amount: "₹35,000",
    date: "27 Jul",
  },
];

function RecentTransactions() {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">

      <h2 className="text-2xl font-bold mb-6">
        Recent Transactions
      </h2>

      {/* Table Header */}
      <div className="grid grid-cols-4 text-slate-400 text-sm font-semibold border-b border-slate-700 pb-3 mb-3">

        <span>Stock</span>

        <span className="text-center">Action</span>

        <span className="text-center">Amount</span>

        <span className="text-right">Date</span>

      </div>

      {/* Rows */}
      <div className="space-y-3">

        {transactions.map((item, index) => (

          <div
            key={index}
            className="grid grid-cols-4 items-center bg-slate-800 rounded-xl p-4 hover:bg-slate-700 transition"
          >

            <span className="font-medium">
              {item.stock}
            </span>

            <span
              className={`text-center font-semibold ${
                item.action === "BUY"
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {item.action}
            </span>

            <span className="text-center">
              {item.amount}
            </span>

            <span className="text-right text-slate-400">
              {item.date}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default RecentTransactions;