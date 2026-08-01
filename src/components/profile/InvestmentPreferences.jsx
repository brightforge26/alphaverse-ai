function InvestmentPreferences() {

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-6">

        Investment Preferences

      </h2>

      <div className="space-y-5">

        <div className="flex justify-between">

          <span>Investment Style</span>

          <span className="text-cyan-400">
            Growth
          </span>

        </div>

        <div className="flex justify-between">

          <span>Risk Appetite</span>

          <span className="text-yellow-400">
            Medium
          </span>

        </div>

        <div className="flex justify-between">

          <span>Preferred Market</span>

          <span className="text-green-400">
            NSE
          </span>

        </div>

        <div className="flex justify-between">

          <span>AI Notifications</span>

          <span className="text-green-400">
            Enabled
          </span>

        </div>

      </div>

    </div>

  );

}

export default InvestmentPreferences;