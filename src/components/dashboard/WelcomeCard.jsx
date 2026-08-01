function WelcomeCard() {

  const username = localStorage.getItem("username") || "Investor";

  return (
    <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 rounded-2xl p-8 shadow-lg mb-6">

      <h1 className="text-4xl font-bold text-white">
        Welcome, {username} 👋
      </h1>

      <p className="text-cyan-100 mt-3 text-lg">
        AI is ready to help you make smarter investment decisions today.
      </p>

    </div>
  );
}

export default WelcomeCard;