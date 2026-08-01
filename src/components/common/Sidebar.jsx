import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Briefcase,
  LineChart,
  FileBarChart,
  Bot,
  ShieldAlert,
  Newspaper,
  Star,
  User,
  LogOut,
} from "lucide-react";

function Sidebar() {
  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "Portfolio", path: "/portfolio", icon: <Briefcase size={20} /> },
    { name: "Stock Details", path: "/stock", icon: <LineChart size={20} /> },
    { name: "Quarterly", path: "/quarterly", icon: <FileBarChart size={20} /> },
    { name: "AI Chat", path: "/chat", icon: <Bot size={20} /> },
    { name: "Risk", path: "/risk", icon: <ShieldAlert size={20} /> },
    { name: "News", path: "/news", icon: <Newspaper size={20} /> },
    { name: "Watchlist", path: "/watchlist", icon: <Star size={20} /> },
    { name: "Profile", path: "/profile", icon: <User size={20} /> },
  ];

  return (
    <div className="bg-slate-900 border-r border-slate-800 h-screen p-6 flex flex-col">

      {/* Logo */}
      <h1 className="text-3xl font-bold text-cyan-400 mb-10">
        AlphaVerse AI
      </h1>

      {/* Menu */}
      <div className="flex flex-col gap-2 flex-1">

        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                isActive
                  ? "bg-cyan-500 text-white"
                  : "text-slate-300 hover:bg-slate-800"
              }`
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}

      </div>

      {/* Logout */}
      <NavLink
        to="/login"
        className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500 hover:text-white transition"
      >
        <LogOut size={20} />
        Logout
      </NavLink>

    </div>
  );
}

export default Sidebar;