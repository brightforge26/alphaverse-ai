import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 flex gap-4">

      <Search className="text-slate-400 mt-3" />

      <input
        type="text"
        placeholder="Search stocks..."
        className="flex-1 bg-transparent outline-none text-lg"
      />

    </div>
  );
}

export default SearchBar;