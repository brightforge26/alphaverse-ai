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

      <div className="bg-slate-900 w-[500px] rounded-2xl p-8">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Edit Stock
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
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-800"
            placeholder="Quantity"
            required
          />

          <input
            type="number"
            name="buy_price"
            value={formData.buy_price}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-800"
            placeholder="Buy Price"
            required
          />

          <input
            type="number"
            name="current_price"
            value={formData.current_price}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-800"
            placeholder="Current Price"
            required
          />

          <input
            type="text"
            name="sector"
            value={formData.sector}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-800"
            placeholder="Sector"
            required
          />

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-xl font-semibold"
          >
            Update Stock
          </button>

        </form>

      </div>

    </div>
  );
}

export default EditStockModal;