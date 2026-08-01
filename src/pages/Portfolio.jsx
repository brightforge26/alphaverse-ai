import MainLayout from "../layouts/MainLayout";

import PortfolioSummary from "../components/portfolio/PortfolioSummary";
import PerformanceChart from "../components/portfolio/PerformanceChart";
import HoldingsTable from "../components/portfolio/HoldingsTable";
import AssetAllocation from "../components/portfolio/AssetAllocation";
import AIInsights from "../components/portfolio/AIInsights";
import RecentTransactions from "../components/portfolio/RecentTransactions";

function Portfolio() {
  return (
    <MainLayout>

      <PortfolioSummary />

      <div className="mt-6">
        <PerformanceChart />
      </div>

      <div className="mt-6">
        <HoldingsTable />
      </div>

      <div className="grid xl:grid-cols-2 gap-6 mt-6">

        <AssetAllocation />

        <AIInsights />

      </div>

      <div className="mt-6">
        <RecentTransactions />
      </div>

    </MainLayout>
  );
}

export default Portfolio;