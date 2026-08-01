const news = [
  {
    title: "Infosys wins $500M AI transformation deal",
    source: "Economic Times",
    time: "2 hours ago",
  },
  {
    title: "Infosys reports strong quarterly earnings",
    source: "Moneycontrol",
    time: "5 hours ago",
  },
  {
    title: "Foreign investors increase Infosys holdings",
    source: "Business Standard",
    time: "1 day ago",
  },
];

function CompanyNews() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-5">
        📰 Company News
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

            <div className="flex justify-between text-sm text-slate-400 mt-2">

              <span>{item.source}</span>

              <span>{item.time}</span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default CompanyNews;