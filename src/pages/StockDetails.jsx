import MainLayout from "../layouts/MainLayout";
import FundamentalAnalysis from "../components/stock/FundamentalAnalysis";
import QuarterlySummary from "../components/stock/QuarterlySummary";
import StockHeader from "../components/stock/StockHeader";
import PriceChart from "../components/stock/PriceChart";
import TechnicalAnalysis from "../components/stock/TechnicalAnalysis";
import AIRecommendationStock from "../components/stock/AIRecommendationStock";
import RiskMeter from "../components/stock/RiskMeter";
import CompanyNews from "../components/stock/CompanyNews";
import SimilarStocks from "../components/stock/SimilarStocks";
function StockDetails() {
  return (
    <MainLayout>

      {/* Header */}
      <StockHeader />

      {/* Price Chart */}
      <div className="mt-6">
        <PriceChart />
      </div>

      {/* Technical Analysis */}
      <div className="mt-6">
        <TechnicalAnalysis />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
        <FundamentalAnalysis />
        <QuarterlySummary />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
        <AIRecommendationStock />
        <RiskMeter />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
        <CompanyNews />
        <SimilarStocks />
      </div>

    </MainLayout>
  );
}

export default StockDetails;