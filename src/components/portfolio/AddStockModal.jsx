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

      <div className="bg-slate-900 w-[520px] rounded-2xl p-8">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold">
            Add Stock
          </h2>

          <button onClick={onClose}>
            <X />
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            name="stock_name"
            placeholder="Stock Name"
            value={formData.stock_name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-800"
            required
          />

          <input
            name="symbol"
            placeholder="Stock Symbol (Example: INFY.NS)"
            value={formData.symbol}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-800"
            required
          />

          <input
            name="quantity"
            type="number"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-800"
            required
          />

          <input
            name="buy_price"
            type="number"
            placeholder="Buy Price"
            value={formData.buy_price}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-800"
            required
          />

          <input
            name="sector"
            placeholder="Sector (IT, Banking, Pharma...)"
            value={formData.sector}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-800"
            required
          />

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-xl font-semibold transition"
          >
            Add Stock
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddStockModal;