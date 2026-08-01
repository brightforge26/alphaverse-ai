function GrowthMetrics() {

  const metrics = [
    {
      title: "Revenue Growth",
      value: "+11.4%",
      color: "text-green-400",
    },
    {
      title: "Profit Growth",
      value: "+9.5%",
      color: "text-green-400",
    },
    {
      title: "EPS Growth",
      value: "+7.2%",
      color: "text-cyan-400",
    },
    {
      title: "Operating Margin",
      value: "22.8%",
      color: "text-yellow-400",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-5">

      {metrics.map((item) => (

        <div
          key={item.title}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
        >

          <p className="text-slate-400">
            {item.title}
          </p>

          <h2 className={`text-3xl font-bold mt-2 ${item.color}`}>
            {item.value}
          </h2>

        </div>

      ))}

    </div>
  );
}

export default GrowthMetrics;