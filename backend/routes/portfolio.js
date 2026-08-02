const express = require("express");

const router = express.Router();

const {
  addPortfolio,
  getPortfolio,
  updatePortfolio,
  deletePortfolio,
  searchStocks,
} = require("../controllers/portfolioController");

// Search
router.get("/search", searchStocks);

// Get Portfolio
router.get("/", getPortfolio);

// Add
router.post("/add", addPortfolio);

// Update
router.put("/:id", updatePortfolio);

// Delete
router.delete("/:id", deletePortfolio);

module.exports = router;