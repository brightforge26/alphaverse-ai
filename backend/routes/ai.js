const express = require("express");

const router = express.Router();

const {
    analyzePortfolio,
} = require("../controllers/aiController");

router.get("/analyze", analyzePortfolio);

module.exports = router;