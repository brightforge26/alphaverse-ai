import MainLayout from "../layouts/MainLayout";

import ProfileHeader from "../components/profile/ProfileHeader";
import UserInfo from "../components/profile/UserInfo";
import InvestmentPreferences from "../components/profile/InvestmentPreferences";
import AccountSettings from "../components/profile/AccountSettings";
import LogoutCard from "../components/profile/LogoutCard";

function Profile() {

  return (

    <MainLayout>

      <ProfileHeader />

      <div className="grid xl:grid-cols-2 gap-6 mt-6">

        <UserInfo />

        <InvestmentPreferences />

      </div>

      <div className="grid xl:grid-cols-2 gap-6 mt-6">

        <AccountSettings />

        <LogoutCard />

      </div>

    </MainLayout>

  );

}

export default Profile;