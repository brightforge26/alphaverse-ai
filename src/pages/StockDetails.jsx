import { useParams } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import StockHeader from "../components/stock/StockHeader";
import PriceChart from "../components/stock/PriceChart";
import TechnicalAnalysis from "../components/stock/TechnicalAnalysis";
import FundamentalAnalysis from "../components/stock/FundamentalAnalysis";
import QuarterlySummary from "../components/stock/QuarterlySummary";
import AIRecommendationStock from "../components/stock/AIRecommendationStock";
import RiskMeter from "../components/stock/RiskMeter";
import CompanyNews from "../components/stock/CompanyNews";
import SimilarStocks from "../components/stock/SimilarStocks";

function StockDetails() {

  const { symbol } = useParams();

  return (

    <MainLayout>

      {/* Header */}
      <StockHeader symbol={symbol} />

      {/* Price Chart */}
      <div className="mt-6">
        <PriceChart symbol={symbol} />
      </div>

      {/* Technical Analysis */}
      <div className="mt-6">
        <TechnicalAnalysis symbol={symbol} />
      </div>

      {/* Fundamentals + Quarterly */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">

        <FundamentalAnalysis symbol={symbol} />

        <QuarterlySummary symbol={symbol} />

      </div>

      {/* AI + Risk */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">

        <AIRecommendationStock symbol={symbol} />

        <RiskMeter symbol={symbol} />

      </div>

      {/* News + Similar Stocks */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">

        <CompanyNews symbol={symbol} />

        <SimilarStocks symbol={symbol} />

      </div>

    </MainLayout>

  );

}

export default StockDetails;