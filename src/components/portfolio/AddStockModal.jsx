import { useState } from "react";
import { X } from "lucide-react";
import { addPortfolio } from "../../api/portfolio";

function AddStockModal({ open, onClose, refreshPortfolio }) {
  const username = localStorage.getItem("username");

  const [formData, setFormData] = useState({
    stock_name: "",
    symbol: "",
    quantity: "",
    buy_price: "",
    sector: "",
  });

  if (!open) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addPortfolio({
        username,
        ...formData,
      });

      alert("✅ Stock Added Successfully");

      setFormData({
        stock_name: "",
        symbol: "",
        quantity: "",
        buy_price: "",
        sector: "",
      });

      refreshPortfolio();
      onClose();
    } catch (err) {
      console.error(err);
      alert("❌ Failed to Add Stock");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

      <div
        style={{
          background: "var(--card)",
          color: "var(--text)",
          borderColor: "var(--border)",
        }}
        className="w-[520px] rounded-2xl p-8 border shadow-2xl transition-all duration-300"
      >

        {/* Header */}
        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold">
            Add Stock
          </h2>

          <button
            onClick={onClose}
            className="hover:text-red-500 transition"
          >
            <X />
          </button>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            name="stock_name"
            placeholder="Stock Name"
            value={formData.stock_name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl border outline-none focus:ring-2 focus:ring-cyan-500 transition"
            style={{
              background: "var(--card2)",
              color: "var(--text)",
              borderColor: "var(--border)",
            }}
          />

          <input
            name="symbol"
            placeholder="Stock Symbol (Example: INFY.NS)"
            value={formData.symbol}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl border outline-none focus:ring-2 focus:ring-cyan-500 transition"
            style={{
              background: "var(--card2)",
              color: "var(--text)",
              borderColor: "var(--border)",
            }}
          />

          <input
            name="quantity"
            type="number"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl border outline-none focus:ring-2 focus:ring-cyan-500 transition"
            style={{
              background: "var(--card2)",
              color: "var(--text)",
              borderColor: "var(--border)",
            }}
          />

          <input
            name="buy_price"
            type="number"
            placeholder="Buy Price"
            value={formData.buy_price}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl border outline-none focus:ring-2 focus:ring-cyan-500 transition"
            style={{
              background: "var(--card2)",
              color: "var(--text)",
              borderColor: "var(--border)",
            }}
          />

          <input
            name="sector"
            placeholder="Sector (IT, Banking, Pharma...)"
            value={formData.sector}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl border outline-none focus:ring-2 focus:ring-cyan-500 transition"
            style={{
              background: "var(--card2)",
              color: "var(--text)",
              borderColor: "var(--border)",
            }}
          />

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-xl font-semibold text-white transition"
          >
            Add Stock
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddStockModal;