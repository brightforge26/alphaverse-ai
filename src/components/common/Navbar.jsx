import { Bell, Search, Moon, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const username = localStorage.getItem("username") || "Investor";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");

    navigate("/login", { replace: true });
  };

  return (
    <header className="h-20 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800 flex items-center justify-between px-8 shadow-lg">

      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold text-white">
          Welcome,{" "}
          <span className="text-cyan-400">{username}</span>
        </h1>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <div className="flex items-center bg-slate-800/70 border border-slate-700 rounded-xl px-4 py-2 w-72">
          <Search size={18} className="text-slate-400" />

          <input
            type="text"
            placeholder="Search Stocks..."
            className="ml-3 w-full bg-transparent outline-none text-white placeholder:text-slate-500"
          />
        </div>

        {/* Notification */}
        <button className="relative bg-slate-800 p-3 rounded-xl hover:bg-cyan-500 transition">
          <Bell size={20} />

          <span className="absolute -top-1 -right-1 bg-red-500 w-3 h-3 rounded-full"></span>
        </button>

        {/* Theme */}
        <button className="bg-slate-800 p-3 rounded-xl hover:bg-yellow-500 transition">
          <Moon size={20} />
        </button>

        {/* Avatar */}
        <div className="w-11 h-11 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-lg font-bold">
          {username.charAt(0).toUpperCase()}
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl text-white font-semibold transition"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>

    </header>
  );
}

export default Navbar;