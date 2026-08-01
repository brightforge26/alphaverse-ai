import MainLayout from "../layouts/MainLayout";

import NewsHeader from "../components/news/NewsHeader";
import NewsCard from "../components/news/NewsCard";
import MarketSentiment from "../components/news/MarketSentiment";
import TrendingStocks from "../components/news/TrendingStocks";
import MarketMovers from "../components/news/MarketMovers";

function News() {
  return (
    <MainLayout>

      <NewsHeader />

      <div className="grid xl:grid-cols-2 gap-6 mt-6">
        <NewsCard />
        <MarketSentiment />
      </div>

      <div className="grid xl:grid-cols-2 gap-6 mt-6">
        <TrendingStocks />
        <MarketMovers />
      </div>

    </MainLayout>
  );
}

export default News;