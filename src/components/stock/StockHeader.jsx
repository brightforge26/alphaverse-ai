function StockHeader() {
  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 flex justify-between items-center">

      <div>

        <h1 className="text-4xl font-bold">
          Infosys Ltd.
        </h1>

        <p className="text-slate-400 mt-2">
          NSE : INFY
        </p>

      </div>

      <div className="text-right">

        <h1 className="text-5xl font-bold text-green-400">

          ₹1,625.40

        </h1>

        <p className="text-green-400 text-xl">

          ▲ +2.45%

        </p>

      </div>

    </div>
  );
}

export default StockHeader;