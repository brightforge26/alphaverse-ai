import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { updatePortfolio } from "../../api/portfolio";

function EditStockModal({
  open,
  onClose,
  stock,
  refreshPortfolio,
}) {
  const [formData, setFormData] = useState({
    quantity: "",
    buy_price: "",
    current_price: "",
    sector: "",
  });

  useEffect(() => {
    if (stock) {
      setFormData({
        quantity: stock.quantity,
        buy_price: stock.buy_price,
        current_price: stock.current_price,
        sector: stock.sector,
      });
    }
  }, [stock]);

  if (!open || !stock) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updatePortfolio(stock.id, {
        quantity: Number(formData.quantity),
        buy_price: Number(formData.buy_price),
        current_price: Number(formData.current_price),
        sector: formData.sector,
      });

      alert("✅ Stock Updated Successfully");

      refreshPortfolio();
      onClose();

    } catch (err) {
      console.error(err);
      alert("❌ Update Failed");
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
        className="w-[500px] rounded-2xl p-8 border shadow-2xl transition-all duration-300"
      >

        {/* Header */}
        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold">
            Edit Stock
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
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Quantity"
            required
            className="w-full p-3 rounded-xl border outline-none focus:ring-2 focus:ring-cyan-500 transition"
            style={{
              background: "var(--card2)",
              color: "var(--text)",
              borderColor: "var(--border)",
            }}
          />

          <input
            type="number"
            name="buy_price"
            value={formData.buy_price}
            onChange={handleChange}
            placeholder="Buy Price"
            required
            className="w-full p-3 rounded-xl border outline-none focus:ring-2 focus:ring-cyan-500 transition"
            style={{
              background: "var(--card2)",
              color: "var(--text)",
              borderColor: "var(--border)",
            }}
          />

          <input
            type="number"
            name="current_price"
            value={formData.current_price}
            onChange={handleChange}
            placeholder="Current Price"
            required
            className="w-full p-3 rounded-xl border outline-none focus:ring-2 focus:ring-cyan-500 transition"
            style={{
              background: "var(--card2)",
              color: "var(--text)",
              borderColor: "var(--border)",
            }}
          />

          <input
            type="text"
            name="sector"
            value={formData.sector}
            onChange={handleChange}
            placeholder="Sector"
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
            className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-xl text-white font-semibold transition"
          >
            Update Stock
          </button>

        </form>

      </div>

    </div>
  );
}

export default EditStockModal;