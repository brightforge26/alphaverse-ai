import { Bot } from "lucide-react";

function ChatHeader() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center gap-4">

      <div className="bg-cyan-500/20 p-4 rounded-full">

        <Bot
          className="text-cyan-400"
          size={32}
        />

      </div>

      <div>

        <h1 className="text-3xl font-bold">

          AlphaVerse AI

        </h1>

        <p className="text-slate-400">

          Your AI Investment Assistant

        </p>

      </div>

    </div>
  );
}

export default ChatHeader;