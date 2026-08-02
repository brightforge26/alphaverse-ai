const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");

const {
  getLivePrice,
} = require("../controllers/stockController");

// Get Live Stock
router.get("/:symbol", auth, getLivePrice);

module.exports = router;