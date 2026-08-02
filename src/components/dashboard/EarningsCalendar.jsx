const earnings = [
  {
    company: "Infosys",
    date: "Aug 02",
  },
  {
    company: "HDFC Bank",
    date: "Aug 03",
  },
  {
    company: "Tata Motors",
    date: "Aug 05",
  },
  {
    company: "Reliance",
    date: "Aug 08",
  },
];

function EarningsCalendar() {
  return (
    <div
      style={{
        background: "var(--card)",
        borderColor: "var(--border)",
        color: "var(--text)",
      }}
      className="border rounded-2xl p-6 transition-all duration-300"
    >
      <h2 className="text-2xl font-bold mb-5">
        📅 Earnings Calendar
      </h2>

      <div className="space-y-4">
        {earnings.map((item) => (
          <div
            key={item.company}
            style={{
              background: "var(--card2)",
            }}
            className="flex justify-between items-center rounded-xl p-4 transition-all duration-300 hover:scale-[1.02]"
          >
            <span
              style={{
                color: "var(--text)",
              }}
            >
              {item.company}
            </span>

            <span className="text-cyan-400 font-semibold">
              {item.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EarningsCalendar;