const supabase = require("../config/supabase");
const { getStockPrice } = require("../services/twelveDataService");

// =======================
// Add Portfolio
// =======================
exports.addPortfolio = async (req, res) => {
  console.log("========== ADD API ==========");
  console.log(req.body);

  try {
    const {
      username,
      stock_name,
      symbol,
      quantity,
      buy_price,
      sector,
    } = req.body;

    // Fetch Live Price
    const stock = await getStockPrice(symbol);

    if (!stock || !stock.price) {
      return res.status(400).json({
        success: false,
        message: "Unable to fetch stock price",
      });
    }

    const current_price = Number(stock.price);

    const { data, error } = await supabase
      .from("portfolio")
      .insert([
        {
          username,
          stock_name,
          symbol,
          quantity: Number(quantity),
          buy_price: Number(buy_price),
          current_price,
          sector,
        },
      ])
      .select();

    if (error) throw error;

    res.status(201).json({
      success: true,
      message: "Stock Added Successfully",
      data,
    });

  } catch (err) {
    console.error("❌ ADD PORTFOLIO ERROR:", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// =======================
// Get Portfolio
// =======================
exports.getPortfolio = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("portfolio")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    res.json({
      success: true,
      data,
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// =======================
// Update Portfolio
// =======================
exports.updatePortfolio = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      quantity,
      buy_price,
      current_price,
      sector,
    } = req.body;

    const { data, error } = await supabase
      .from("portfolio")
      .update({
        quantity: Number(quantity),
        buy_price: Number(buy_price),
        current_price: Number(current_price),
        sector,
      })
      .eq("id", id)
      .select();

    if (error) throw error;

    res.json({
      success: true,
      message: "Portfolio Updated Successfully",
      data,
    });

  } catch (err) {
    console.error("❌ UPDATE ERROR:", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// =======================
// Delete Portfolio
// =======================
exports.deletePortfolio = async (req, res) => {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from("portfolio")
      .delete()
      .eq("id", id);

    if (error) throw error;

    res.json({
      success: true,
      message: "Stock Deleted Successfully",
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};