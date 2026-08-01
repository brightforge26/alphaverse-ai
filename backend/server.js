const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const portfolioRoutes = require("./routes/portfolio");
const stockRoutes = require("./routes/stock");
const aiRoutes = require("./routes/ai");
const newsRoutes = require("./routes/news");
const dashboardRoutes = require("./routes/dashboard");
const chatRoutes = require("./routes/chat"); // ✅ AI Chat Route

const app = express();

// =======================
// Middleware
// =======================

app.use(cors());
app.use(express.json());

// =======================
// Home Route
// =======================

app.get("/", (req, res) => {
  res.send("🚀 AlphaVerse AI Backend Running");
});

// =======================
// API Routes
// =======================

app.use("/api/auth", authRoutes);

app.use("/api/portfolio", portfolioRoutes);

app.use("/api/stock", stockRoutes);

app.use("/api/ai", aiRoutes);

app.use("/api/news", newsRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.use("/api/chat", chatRoutes); // ✅ AI Chat

// =======================
// 404 Route
// =======================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// =======================
// Start Server
// =======================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});