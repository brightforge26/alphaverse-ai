function MarketSentiment() {
  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">

      <h2 className="text-2xl font-bold mb-5">
        🤖 AI Market Sentiment
      </h2>

      <div className="bg-green-500/10 border border-green-500 rounded-xl p-5">

        <h1 className="text-5xl font-bold text-green-400">
          Bullish
        </h1>

        <p className="mt-4 text-slate-300">
          AI has analyzed today's news and predicts a positive market trend with
          strong buying momentum.
        </p>

      </div>

    </div>
  );
}

export default MarketSentiment;