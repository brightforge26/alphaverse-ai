const news = [
  {
    title: "Infosys secures a major AI transformation contract.",
    source: "Economic Times",
    sentiment: "Positive",
  },
  {
    title: "RBI keeps repo rate unchanged.",
    source: "Moneycontrol",
    sentiment: "Neutral",
  },
  {
    title: "Reliance announces expansion in renewable energy.",
    source: "Business Standard",
    sentiment: "Positive",
  },
];

function NewsCard() {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">

      <h2 className="text-2xl font-bold mb-6">
        Latest News
      </h2>

      <div className="space-y-5">

        {news.map((item, index) => (

          <div
            key={index}
            className="border-b border-slate-700 pb-4"
          >

            <h3 className="font-semibold">
              {item.title}
            </h3>

            <div className="flex justify-between mt-3">

              <span className="text-slate-400">
                {item.source}
              </span>

              <span className="text-green-400">
                {item.sentiment}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default NewsCard;