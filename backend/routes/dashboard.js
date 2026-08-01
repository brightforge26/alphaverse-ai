const express = require("express");

const router = express.Router();

const {
  getDashboardStats,
  getPortfolioChart,
} = require("../controllers/dashboardController");

router.get("/stats", getDashboardStats);

router.get("/chart", getPortfolioChart);

module.exports = router;