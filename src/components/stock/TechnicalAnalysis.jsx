function TechnicalAnalysis() {

  const indicators = [

    ["RSI","62","Bullish"],

    ["MACD","Positive","Bullish"],

    ["50 DMA","Above","Strong"],

    ["200 DMA","Above","Bullish"],

    ["Volume","High","Positive"]

  ];

  return (

    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">

      <h2 className="text-2xl font-bold mb-6">
        Technical Indicators
      </h2>

      {indicators.map((item,index)=>(

        <div
          key={index}
          className="flex justify-between border-b border-slate-700 py-4"
        >

          <span>{item[0]}</span>

          <span>{item[1]}</span>

          <span className="text-green-400">

            {item[2]}

          </span>

        </div>

      ))}

    </div>

  );

}

export default TechnicalAnalysis;