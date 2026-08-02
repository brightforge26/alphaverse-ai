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
    <div
      style={{
        background: "var(--card)",
        borderColor: "var(--border)",
        color: "var(--text)",
      }}
      className="border rounded-2xl p-6 transition-all duration-300"
    >
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

      {/* News */}
      <div className="space-y-4">

        {news.slice(0, 3).map((item) => (

          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            style={{
              background: "var(--card2)",
              borderColor: "var(--border)",
            }}
            className="block border rounded-xl p-4 hover:border-cyan-400 transition-all duration-300 hover:scale-[1.02]"
          >

            <h3
              className="font-semibold mb-2 line-clamp-2"
              style={{
                color: "var(--text)",
              }}
            >
              {item.headline}
            </h3>

            <p
              className="text-sm line-clamp-2"
              style={{
                color: "var(--text)",
                opacity: 0.7,
              }}
            >
              {item.summary}
            </p>

            <div className="flex justify-between items-center mt-3">

              <span className="text-cyan-400 text-xs">
                {item.source}
              </span>

              <span
                className="text-xs"
                style={{
                  color: "var(--text)",
                  opacity: 0.6,
                }}
              >
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