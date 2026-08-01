function ChatMessages() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-[500px] overflow-y-auto">

      {/* User */}

      <div className="flex justify-end mb-6">

        <div className="bg-indigo-600 rounded-2xl p-4 max-w-md">

          Is Infosys a good investment?

        </div>

      </div>

      {/* AI */}

      <div className="flex justify-start">

        <div className="bg-slate-800 rounded-2xl p-5 max-w-xl">

          <h3 className="font-bold text-cyan-400 mb-3">

            AlphaVerse AI

          </h3>

          <p>

            Based on recent quarterly performance,
            technical indicators and market sentiment,
            Infosys currently has a

            <span className="text-green-400 font-bold">
              {" "}BUY{" "}
            </span>

            recommendation.

          </p>

          <div className="mt-5 space-y-2">

            <p>✅ Revenue Growth</p>

            <p>✅ Strong EPS</p>

            <p>✅ Positive News Sentiment</p>

            <p>✅ Low Debt</p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ChatMessages;