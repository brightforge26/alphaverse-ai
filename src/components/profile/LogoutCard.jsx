import { useNavigate } from "react-router-dom";
import { LogOut, ShieldCheck } from "lucide-react";

function LogoutCard() {

  const navigate = useNavigate();

  const handleLogout = () => {

    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmLogout) return;

    localStorage.removeItem("username");
    localStorage.removeItem("token");

    navigate("/login", {
      replace: true,
    });

  };

  return (

    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-lg">

      {/* Header */}
      <div className="flex items-center gap-3 mb-5">

        <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-500/10 flex items-center justify-center">

          <LogOut
            className="text-red-500"
            size={26}
          />

        </div>


        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Logout
        </h2>

      </div>


      <p className="text-slate-500 dark:text-slate-400 mb-6">

        Sign out from your AlphaVerse AI account securely.

      </p>


      {/* Security Info */}
      <div className="flex items-center gap-3 bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-300 dark:border-cyan-500/20 rounded-xl p-4 mb-6">

        <ShieldCheck
          className="text-cyan-500"
          size={22}
        />

        <p className="text-sm text-cyan-700 dark:text-cyan-400">

          Your session data will be cleared after logout.

        </p>

      </div>


      <button
        onClick={handleLogout}
        className="flex items-center justify-center gap-2 w-full bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold transition duration-300"
      >

        <LogOut size={18}/>

        Logout

      </button>


    </div>

  );

}

export default LogoutCard;