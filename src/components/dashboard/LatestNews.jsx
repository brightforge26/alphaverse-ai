import { useEffect, useState } from "react";
import { Newspaper, ArrowRight } from "lucide-react";
import { getNews } from "../../api/news";

function LatestNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const res = await getNews();
      setNews(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">

        <div className="flex items-center gap-3">
          <Newspaper className="text-cyan-400" />

          <h2 className="text-2xl font-bold">
            Latest Market News
          </h2>
        </div>

        <button className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition">
          View All
          <ArrowRight size={18} />
        </button>

      </div>

      {/* Show only first 3 news */}
      <div className="space-y-4">

        {news.slice(0, 3).map((item) => (

          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="block border border-slate-800 rounded-xl p-4 hover:border-cyan-400 hover:bg-slate-800 transition"
          >

            <h3 className="font-semibold text-white mb-2 line-clamp-2">
              {item.headline}
            </h3>

            <p className="text-slate-400 text-sm line-clamp-2">
              {item.summary}
            </p>

            <div className="flex justify-between items-center mt-3">

              <span className="text-cyan-400 text-xs">
                {item.source}
              </span>

              <span className="text-slate-500 text-xs">
                Read →
              </span>

            </div>

          </a>

        ))}

      </div>

    </div>
  );
}

export default LatestNews;