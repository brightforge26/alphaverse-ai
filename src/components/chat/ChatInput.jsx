import { Send } from "lucide-react";

function ChatInput() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex gap-4">

      <input
        type="text"
        placeholder="Ask AlphaVerse AI anything..."
        className="flex-1 bg-slate-800 rounded-xl px-4 py-3 outline-none"
      />

      <button className="bg-indigo-600 hover:bg-indigo-700 rounded-xl px-6">

        <Send />

      </button>

    </div>
  );
}

export default ChatInput;