const { getRecommendation } = require("../services/geminiService");
const supabase = require("../config/supabase");

let cachedData = null;
let lastFetch = 0;

exports.analyzePortfolio = async (req, res) => {
  try {

    // Return cached response for 5 minutes
    if (
      cachedData &&
      Date.now() - lastFetch < 5 * 60 * 1000
    ) {
      return res.json({
        success: true,
        data: cachedData,
      });
    }

    // Fetch Portfolio
    const { data: portfolio, error } = await supabase
      .from("portfolio")
      .select("*");

    if (error) throw error;

    // Gemini Prompt
    const prompt = `
You are a professional stock market analyst.

Analyze this portfolio:

${JSON.stringify(portfolio)}

Return ONLY valid JSON.

{
  "recommendation": {
    "action": "BUY",
    "confidence": "92%",
    "reasons": [
      "Reason 1",
      "Reason 2",
      "Reason 3"
    ]
  },

  "suggestions": [
    {
      "stock": "Reliance",
      "reason": "Energy diversification"
    },
    {
      "stock": "HDFC Bank",
      "reason": "Banking exposure"
    },
    {
      "stock": "NVIDIA",
      "reason": "AI growth"
    }
  ],

  "health": {
    "score": 88,
    "risk": "Medium",
    "growth": "High",
    "diversification": "Good",
    "summary": "Portfolio is fundamentally strong but needs better diversification."
  }
}

Return ONLY JSON.
`;

    const result = await getRecommendation(prompt);

    // Remove markdown if Gemini returns ```json
    const cleaned = result
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const parsed = JSON.parse(cleaned);

    // Cache response
    cachedData = parsed;
    lastFetch = Date.now();

    res.json({
      success: true,
      data: parsed,
    });

  } catch (err) {

    console.error(err);

    // Gemini quota exceeded
    if (
      err.message &&
      err.message.toLowerCase().includes("quota")
    ) {
      return res.status(429).json({
        success: false,
        message:
          "Gemini API quota exceeded. Please try again later.",
      });
    }

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};