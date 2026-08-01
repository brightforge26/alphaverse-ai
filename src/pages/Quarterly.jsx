import MainLayout from "../layouts/MainLayout";

import QuarterHeader from "../components/quarterly/QuarterHeader";
import RevenueChart from "../components/quarterly/RevenueChart";
import ProfitChart from "../components/quarterly/ProfitChart";
import QuarterTable from "../components/quarterly/QuarterTable";
import GrowthMetrics from "../components/quarterly/GrowthMetrics";
import AIQuarterlyInsights from "../components/quarterly/AIQuarterlyInsights";

function Quarterly() {
  return (
    <MainLayout>

      <QuarterHeader />

      <div className="mt-6">
        <GrowthMetrics />
      </div>

      <div className="grid xl:grid-cols-2 gap-6 mt-6">

        <RevenueChart />

        <ProfitChart />

      </div>

      <div className="mt-6">
        <QuarterTable />
      </div>

      <div className="mt-6">
        <AIQuarterlyInsights />
      </div>

    </MainLayout>
  );
}

export default Quarterly;