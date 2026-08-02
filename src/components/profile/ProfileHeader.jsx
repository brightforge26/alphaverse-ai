import { UserCircle } from "lucide-react";

function ProfileHeader() {

  const username = localStorage.getItem("username") || "Investor";

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-lg flex flex-col md:flex-row justify-between items-center">

      {/* Left Section */}
      <div className="flex items-center gap-4">

        <div className="w-16 h-16 rounded-2xl bg-cyan-100 dark:bg-cyan-500/10 flex items-center justify-center">

          <UserCircle
            size={38}
            className="text-cyan-500"
          />

        </div>


        <div>

          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            My Profile
          </h1>

          <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">
            Manage your account and investment preferences
          </p>

        </div>

      </div>


      {/* User Badge */}
      <div className="mt-5 md:mt-0">

        <div className="bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-300 dark:border-cyan-500/20 rounded-xl px-5 py-3">

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Welcome
          </p>

          <h2 className="text-xl font-bold text-cyan-500">
            {username}
          </h2>

        </div>

      </div>


    </div>
  );
}

export default ProfileHeader;