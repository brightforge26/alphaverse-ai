function SearchHistory({
  history,
  onSelect,
  onClear,
}) {
  if (history.length === 0) return null;

  return (
    <div className="absolute top-14 left-0 w-full bg-slate-900 border border-slate-700 rounded-xl shadow-2xl z-40">

      <div className="flex justify-between items-center px-4 py-3 border-b border-slate-700">

        <h3 className="font-semibold text-white">
          Recent Searches
        </h3>

        <button
          onClick={onClear}
          className="text-red-400 text-sm hover:text-red-300"
        >
          Clear
        </button>

      </div>

      {history.map((item, index) => (

        <div
          key={index}
          onClick={() => onSelect(item)}
          className="px-4 py-3 cursor-pointer hover:bg-slate-800 transition flex items-center gap-3"
        >

          <span>🕒</span>

          <span className="text-slate-300">
            {item}
          </span>

        </div>

      ))}

    </div>
  );
}

export default SearchHistory;