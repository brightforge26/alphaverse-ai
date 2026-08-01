const express = require("express");

const router = express.Router();

const {
  addPortfolio,
  getPortfolio,
  updatePortfolio,
  deletePortfolio,
} = require("../controllers/portfolioController");

router.post("/add", addPortfolio);

router.get("/", getPortfolio);

router.put("/:id", updatePortfolio);

router.delete("/:id", deletePortfolio);

module.exports = router;