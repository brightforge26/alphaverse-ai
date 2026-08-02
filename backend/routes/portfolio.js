const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");

const {
  addPortfolio,
  getPortfolio,
  updatePortfolio,
  deletePortfolio,
  searchStocks,
} = require("../controllers/portfolioController");

// Search Stocks
router.get("/search", auth, searchStocks);

// Get Portfolio
router.get("/", auth, getPortfolio);

// Add Stock
router.post("/add", auth, addPortfolio);

// Update Stock
router.put("/:id", auth, updatePortfolio);

// Delete Stock
router.delete("/:id", auth, deletePortfolio);

module.exports = router;