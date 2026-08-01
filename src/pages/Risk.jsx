import MainLayout from "../layouts/MainLayout";

import RiskHeader from "../components/risk/RiskHeader";
import RiskScore from "../components/risk/RiskScore";
import RiskFactors from "../components/risk/RiskFactors";
import Diversification from "../components/risk/Diversification";
import RiskRecommendations from "../components/risk/RiskRecommendations";

function Risk() {
  return (
    <MainLayout>

      <RiskHeader />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">

        <RiskScore />

        <RiskFactors />

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">

        <Diversification />

        <RiskRecommendations />

      </div>

    </MainLayout>
  );
}

export default Risk;