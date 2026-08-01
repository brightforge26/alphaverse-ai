const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function getRecommendation(prompt) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
    });

    return response.text;
  } catch (err) {
    if (err.status === 429) {
      throw new Error("Gemini API quota exceeded. Please try again later or use a new API key.");
    }

    throw err;
  }
}

module.exports = {
  getRecommendation,
};