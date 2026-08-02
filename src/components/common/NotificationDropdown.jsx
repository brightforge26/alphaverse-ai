import {
  CheckCircle,
  TrendingUp,
  Brain,
} from "lucide-react";

function NotificationDropdown() {
  const notifications = [
    {
      id: 1,
      icon: <CheckCircle className="text-green-400" size={18} />,
      title: "Stock Added",
      message: "Infosys has been added to your portfolio.",
      time: "2 min ago",
    },
    {
      id: 2,
      icon: <Brain className="text-cyan-400" size={18} />,
      title: "AI Recommendation",
      message: "Gemini suggests BUY for INFY.",
      time: "10 min ago",
    },
    {
      id: 3,
      icon: <TrendingUp className="text-yellow-400" size={18} />,
      title: "Market Alert",
      message: "INFY gained +2.45% today.",
      time: "1 hour ago",
    },
  ];

  return (
    <div
      className="absolute right-0 mt-3 w-96 rounded-2xl shadow-2xl border border-slate-700 bg-slate-900 overflow-hidden z-50"
    >
      <div className="px-5 py-4 border-b border-slate-700">
        <h2 className="text-lg font-bold text-white">
          Notifications
        </h2>
      </div>

      <div className="max-h-96 overflow-y-auto">

        {notifications.map((item) => (

          <div
            key={item.id}
            className="flex gap-4 px-5 py-4 hover:bg-slate-800 transition cursor-pointer border-b border-slate-800"
          >
            <div className="mt-1">
              {item.icon}
            </div>

            <div className="flex-1">

              <h3 className="font-semibold text-white">
                {item.title}
              </h3>

              <p className="text-sm text-slate-400 mt-1">
                {item.message}
              </p>

              <p className="text-xs text-slate-500 mt-2">
                {item.time}
              </p>

            </div>

          </div>

        ))}

      </div>

      <div className="p-4 text-center border-t border-slate-700">

        <button className="text-cyan-400 hover:text-cyan-300 font-semibold">
          View All Notifications
        </button>

      </div>

    </div>
  );
}

export default NotificationDropdown;