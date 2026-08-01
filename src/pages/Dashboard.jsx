import { useEffect, useState } from "react";

import MainLayout from "../layouts/MainLayout";

import StatCard from "../components/dashboard/StatCard";
import PortfolioChart from "../components/dashboard/PortfolioChart";
import AIRecommendation from "../components/dashboard/AIRecommendation";
import MarketOverview from "../components/dashboard/MarketOverview";
import WatchlistPreview from "../components/dashboard/WatchlistPreview";
import LatestNews from "../components/dashboard/LatestNews";
import EarningsCalendar from "../components/dashboard/EarningsCalendar";

import { getDashboardStats } from "../api/dashboard";

function Dashboard() {
  const [stats, setStats] = useState({
    portfolioValue: 0,
    todayGain: 0,
    totalStocks: 0,
    risk: "Loading...",
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const res = await getDashboardStats();
      setStats(res.data.stats);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MainLayout>

      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-6">

        <StatCard
          title="Portfolio Value"
          value={`₹${Number(stats.portfolioValue).toLocaleString("en-IN", {
            minimumFractionDigits: 2,
          })}`}
          color="text-green-400"
        />

        <StatCard
          title="Today's Gain"
          value={`₹${Number(stats.todayGain).toLocaleString("en-IN", {
            minimumFractionDigits: 2,
          })}`}
          color={
            stats.todayGain >= 0
              ? "text-green-400"
              : "text-red-400"
          }
        />

        <StatCard
          title="Total Stocks"
          value={stats.totalStocks}
          color="text-cyan-400"
        />

        <StatCard
          title="Risk Score"
          value={stats.risk}
          color={
            stats.risk === "Low"
              ? "text-green-400"
              : stats.risk === "Medium"
              ? "text-yellow-400"
              : "text-red-400"
          }
        />

      </div>

      {/* Portfolio Chart + AI Analysis */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

        <div className="xl:col-span-2">

          <PortfolioChart />

        </div>

        <AIRecommendation />

      </div>

      {/* Market Overview */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

        <MarketOverview />

        <WatchlistPreview />

      </div>

      {/* News & Earnings */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

        <LatestNews />

        <EarningsCalendar />

      </div>

    </MainLayout>
  );
}

export default Dashboard;