import { useState, useEffect } from "react";
import {
  Bell,
  Search,
  Moon,
  Sun,
  LogOut,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { searchStocks } from "../../api/stock";

function Navbar() {
  const navigate = useNavigate();

  const { theme, toggleTheme } = useTheme();

  const username =
    localStorage.getItem("username") || "Investor";

  const [query, setQuery] = useState("");

  const [stocks, setStocks] = useState([]);

  const [loading, setLoading] = useState(false);

  // ===========================
  // Live Search
  // ===========================

  useEffect(() => {
    if (!query.trim()) {
      setStocks([]);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        setLoading(true);

        const res = await searchStocks(query);

        console.log(res.data);

        setStocks(res.data.data || []);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [query]);

  // ===========================
  // Logout
  // ===========================

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");

    navigate("/login", {
      replace: true,
    });
  };

  return (
    <header
      style={{
        background: "var(--card)",
        color: "var(--text)",
        borderColor: "var(--border)",
      }}
      className="h-20 border-b flex items-center justify-between px-8 shadow-lg"
    >
      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold">
          Welcome,
          <span className="text-cyan-400 ml-2">
            {username}
          </span>
        </h1>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <div className="relative">

          <div
            style={{
              background: "var(--card2)",
              borderColor: "var(--border)",
            }}
            className="flex items-center border rounded-xl px-4 py-2 w-80"
          >
            <Search
              size={18}
              className="text-slate-400"
            />

            <input
              type="text"
              value={query}
              onChange={(e) =>
                setQuery(e.target.value)
              }
              placeholder="Search Stocks..."
              style={{
                color: "var(--text)",
              }}
              className="ml-3 w-full bg-transparent outline-none placeholder:text-slate-500"
            />
          </div>

          {(loading || query) && (
            <div
              style={{
                background: "var(--card)",
                borderColor: "var(--border)",
              }}
              className="absolute top-14 left-0 w-full border rounded-xl shadow-2xl overflow-hidden z-50"
            >
              {loading ? (
                <div className="p-4 text-center text-slate-400">
                  Searching...
                </div>
              ) : stocks.length > 0 ? (
                stocks.map((stock) => (
                  <div
                    key={stock.symbol}
                    onClick={() => {
                      navigate(
                        `/stocks/${encodeURIComponent(
                          stock.symbol
                        )}`
                      );

                      setQuery("");
                      setStocks([]);
                    }}
                    className="p-4 hover:bg-cyan-500/20 cursor-pointer border-b border-slate-700 transition"
                  >
                    <div className="font-semibold text-white">
                      {stock.stock_name}
                    </div>

                    <div className="text-sm text-cyan-400">
                      {stock.symbol}
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-4 text-center text-slate-400">
                  No stocks found
                </div>
              )}
            </div>
          )}

        </div>

        {/* Notification */}
        <button
          style={{
            background: "var(--card2)",
          }}
          className="relative p-3 rounded-xl hover:bg-cyan-500 transition"
        >
          <Bell size={20} />

          <span className="absolute -top-1 -right-1 bg-red-500 w-3 h-3 rounded-full"></span>
        </button>

        {/* Theme */}
        <button
          onClick={toggleTheme}
          style={{
            background: "var(--card2)",
          }}
          className="p-3 rounded-xl hover:bg-yellow-500 transition"
        >
          {theme === "dark" ? (
            <Sun size={20} />
          ) : (
            <Moon size={20} />
          )}
        </button>

        {/* Avatar */}
        <div className="w-11 h-11 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-lg font-bold text-white">
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
