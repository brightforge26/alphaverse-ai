import MainLayout from "../layouts/MainLayout";

import WatchlistHeader from "../components/watchlist/WatchlistHeader";
import SearchBar from "../components/watchlist/SearchBar";
import WatchlistTable from "../components/watchlist/WatchlistTable";
import AIAlerts from "../components/watchlist/AIAlerts";
import TopGainers from "../components/watchlist/TopGainers";

function Watchlist() {
  return (
    <MainLayout>

      <WatchlistHeader />

      <div className="mt-6">
        <SearchBar />
      </div>

      <div className="mt-6">
        <WatchlistTable />
      </div>

      <div className="grid xl:grid-cols-2 gap-6 mt-6">

        <AIAlerts />

        <TopGainers />

      </div>

    </MainLayout>
  );
}

export default Watchlist;