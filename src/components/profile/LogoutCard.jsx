import { useNavigate } from "react-router-dom";

function LogoutCard() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("username");

    navigate("/");

  };

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-5">

        Logout

      </h2>

      <p className="text-slate-400 mb-6">

        Sign out from your AlphaVerse AI account.

      </p>

      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl text-white font-semibold"
      >

        Logout

      </button>

    </div>

  );

}

export default LogoutCard;