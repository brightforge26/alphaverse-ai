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
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-5">
        📅 Earnings Calendar
      </h2>

      <div className="space-y-4">

        {earnings.map((item) => (

          <div
            key={item.company}
            className="flex justify-between bg-slate-800 rounded-xl p-4"
          >

            <span>{item.company}</span>

            <span className="text-cyan-400">
              {item.date}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default EarningsCalendar;