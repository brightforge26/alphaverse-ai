const questions = [
  "Should I buy Infosys?",
  "Compare TCS vs Infosys",
  "Summarize latest quarterly report",
  "Best AI stocks in India",
];

function SuggestedQuestions() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <h2 className="text-xl font-bold mb-5">
        Suggested Questions
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        {questions.map((question) => (

          <button
            key={question}
            className="bg-slate-800 hover:bg-indigo-600 transition rounded-xl p-4 text-left"
          >
            {question}
          </button>

        ))}

      </div>

    </div>
  );
}

export default SuggestedQuestions;