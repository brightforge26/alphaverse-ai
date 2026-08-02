import { useEffect, useState } from "react";
import { getPortfolio } from "../../api/portfolio";

function AssetAllocation() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    fetchAllocation();
  }, []);

  const fetchAllocation = async () => {
    try {
      const response = await getPortfolio();

      const portfolio = response.data.data || [];

      const sectorMap = {};
      let totalValue = 0;

      portfolio.forEach((stock) => {
        const value =
          (Number(stock.current_price) || 0) *
          (Number(stock.quantity) || 0);

        totalValue += value;

        if (sectorMap[stock.sector]) {
          sectorMap[stock.sector] += value;
        } else {
          sectorMap[stock.sector] = value;
        }
      });

      const allocation = Object.keys(sectorMap).map((sector) => ({
        sector,
        value:
          totalValue === 0
            ? 0
            : (
                (sectorMap[sector] / totalValue) *
                100
              ).toFixed(1),
      }));

      setAssets(allocation);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        background: "var(--card)",
        color: "var(--text)",
        borderColor: "var(--border)",
      }}
      className="border rounded-2xl p-6 shadow-lg transition-all duration-300"
    >
      <h2 className="text-2xl font-bold mb-6">
        Asset Allocation
      </h2>

      {assets.length === 0 ? (
        <p
          style={{
            color: "var(--text)",
            opacity: 0.7,
          }}
        >
          No Portfolio Data
        </p>
      ) : (
        <div className="space-y-5">
          {assets.map((asset) => (
            <div key={asset.sector}>
              <div className="flex justify-between mb-2">
                <span
                  className="font-medium"
                  style={{
                    color: "var(--text)",
                  }}
                >
                  {asset.sector}
                </span>

                <span className="text-cyan-400 font-semibold">
                  {asset.value}%
                </span>
              </div>

              <div
                style={{
                  background: "var(--card2)",
                }}
                className="w-full rounded-full h-3 overflow-hidden"
              >
                <div
                  className="bg-cyan-500 h-3 rounded-full transition-all duration-500"
                  style={{
                    width: `${asset.value}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AssetAllocation;