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
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-lg">

      {/* Header */}
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
        📰 Company News
      </h2>

      {/* News List */}
      <div className="space-y-4">

        {news.map((item, index) => (

          <div
            key={index}
            className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 hover:border-cyan-500 hover:shadow-lg transition duration-300"
          >

            <h3 className="font-semibold text-lg text-slate-900 dark:text-white">
              {item.title}
            </h3>

            <div className="flex justify-between items-center mt-3">

              <span className="text-cyan-600 dark:text-cyan-400 text-sm font-medium">
                {item.source}
              </span>

              <span className="text-slate-500 dark:text-slate-400 text-sm">
                {item.time}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default CompanyNews;