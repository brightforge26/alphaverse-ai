function MarketOverview() {
  const markets = [
    {
      name: "NIFTY 50",
      value: "24,825",
      change: "+1.21%",
    },
    {
      name: "SENSEX",
      value: "81,340",
      change: "+0.94%",
    },
    {
      name: "BANK NIFTY",
      value: "56,280",
      change: "+1.68%",
    },
    {
      name: "NASDAQ",
      value: "19,540",
      change: "+0.73%",
    },
  ];

  return (
    <div
      style={{
        background: "var(--card)",
        borderColor: "var(--border)",
        color: "var(--text)",
      }}
      className="border rounded-2xl p-6 transition-all duration-300"
    >
      <h2 className="text-2xl font-bold mb-5">
        📈 Market Overview
      </h2>

      <div className="space-y-4">
        {markets.map((market) => (
          <div
            key={market.name}
            style={{
              background: "var(--card2)",
            }}
            className="flex justify-between items-center rounded-xl p-4 transition-all duration-300"
          >
            <div>
              <h3 className="font-semibold">
                {market.name}
              </h3>

              <p
                style={{
                  color: "var(--text)",
                  opacity: 0.7,
                }}
              >
                {market.value}
              </p>
            </div>

            <span className="text-green-400 font-bold">
              {market.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarketOverview;