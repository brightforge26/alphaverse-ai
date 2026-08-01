function MarketOverview() {

    const markets = [
        {
            name: "NIFTY 50",
            value: "24,825",
            change: "+1.21%"
        },
        {
            name: "SENSEX",
            value: "81,340",
            change: "+0.94%"
        },
        {
            name: "BANK NIFTY",
            value: "56,280",
            change: "+1.68%"
        },
        {
            name: "NASDAQ",
            value: "19,540",
            change: "+0.73%"
        }
    ];

    return (

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <h2 className="text-2xl font-bold mb-5">

                📈 Market Overview

            </h2>

            <div className="space-y-4">

                {markets.map((market) => (

                    <div
                        key={market.name}
                        className="flex justify-between items-center bg-slate-800 rounded-xl p-4"
                    >

                        <div>

                            <h3 className="font-semibold">

                                {market.name}

                            </h3>

                            <p className="text-slate-400">

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

    )

}

export default MarketOverview;