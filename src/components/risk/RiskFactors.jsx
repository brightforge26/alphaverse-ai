const factors = [

  {
    factor: "Market Risk",
    level: "Low",
  },

  {
    factor: "Sector Risk",
    level: "Medium",
  },

  {
    factor: "Liquidity Risk",
    level: "Low",
  },

  {
    factor: "Volatility",
    level: "Medium",
  },

];

function RiskFactors() {

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-6">

        Risk Factors

      </h2>

      {factors.map((item) => (

        <div
          key={item.factor}
          className="flex justify-between border-b border-slate-700 py-4"
        >

          <span>{item.factor}</span>

          <span
            className={
              item.level === "Low"
                ? "text-green-400"
                : "text-yellow-400"
            }
          >

            {item.level}

          </span>

        </div>

      ))}

    </div>

  );

}

export default RiskFactors;