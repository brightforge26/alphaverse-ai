import { useEffect, useState } from "react";
import { getPortfolio, deletePortfolio } from "../../api/portfolio";
import { Pencil, Trash2, Plus } from "lucide-react";
import AddStockModal from "./AddStockModal";
import EditStockModal from "./EditStockModal";

function HoldingsTable() {
  const [holdings, setHoldings] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const [editModal, setEditModal] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);

  const fetchPortfolio = async () => {
    try {
      const response = await getPortfolio();
      setHoldings(response.data.data);
    } catch (error) {
      console.error("Error fetching portfolio:", error);
    }
  };

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this stock?"
    );

    if (!confirmDelete) return;

    try {
      await deletePortfolio(id);
      fetchPortfolio();
    } catch (error) {
      console.error(error);
      alert("Failed to delete stock");
    }
  };

  const handleEdit = (stock) => {
    setSelectedStock(stock);
    setEditModal(true);
  };

  return (
    <div
      style={{
        background: "var(--card)",
        color: "var(--text)",
        borderColor: "var(--border)",
      }}
      className="border rounded-2xl p-6 shadow-lg transition-all duration-300"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          Holdings
        </h2>

        <button
          onClick={() => setOpenModal(true)}
          className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-xl text-white font-semibold transition"
        >
          <Plus size={18} />
          Add Stock
        </button>
      </div>

      <div className="overflow-x-auto">
        <table
          className="w-full min-w-[1200px]"
          style={{
            color: "var(--text)",
          }}
        >
          <thead
            style={{
              color: "var(--text)",
              opacity: 0.7,
            }}
          >
            <tr>
              <th className="text-left py-3">Stock</th>
              <th className="text-center">Symbol</th>
              <th className="text-center">Qty</th>
              <th className="text-center">Buy Price</th>
              <th className="text-center">Current Price</th>
              <th className="text-center">Investment</th>
              <th className="text-center">Current Value</th>
              <th className="text-center">P/L</th>
              <th className="text-center">Return %</th>
              <th className="text-center">Sector</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {holdings.length === 0 ? (
              <tr>
                <td
                  colSpan="11"
                  className="text-center py-10"
                  style={{
                    color: "var(--text)",
                    opacity: 0.6,
                  }}
                >
                  No Portfolio Data Found
                </td>
              </tr>
            ) : (
              holdings.map((item) => {
                const investment =
                  Number(item.buy_price) * Number(item.quantity);

                const currentValue =
                  Number(item.current_price) * Number(item.quantity);

                const profit =
                  currentValue - investment;

                const returnPercent =
                  investment === 0
                    ? 0
                    : ((profit / investment) * 100).toFixed(2);

                return (
                  <tr
                    key={item.id}
                    style={{
                      borderColor: "var(--border)",
                    }}
                    className="border-t h-16 transition-all duration-300"
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        "var(--card2)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background =
                        "transparent")
                    }
                  >
                    <td>{item.stock_name}</td>

                    <td className="text-center">
                      {item.symbol}
                    </td>

                    <td className="text-center">
                      {item.quantity}
                    </td>

                    <td className="text-center">
                      ₹{Number(item.buy_price).toFixed(2)}
                    </td>

                    <td className="text-center">
                      ₹{Number(item.current_price).toFixed(2)}
                    </td>

                    <td className="text-center">
                      ₹{investment.toFixed(2)}
                    </td>

                    <td className="text-center">
                      ₹{currentValue.toFixed(2)}
                    </td>

                    <td
                      className={`text-center font-semibold ${
                        profit >= 0
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {profit >= 0 ? "+" : ""}
                      ₹{profit.toFixed(2)}
                    </td>

                    <td
                      className={`text-center font-semibold ${
                        profit >= 0
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {profit >= 0 ? "+" : ""}
                      {returnPercent}%
                    </td>

                    <td className="text-center">
                      {item.sector}
                    </td>

                    <td className="flex justify-center items-center gap-4 h-16">
                      <button
                        onClick={() => handleEdit(item)}
                        className="text-cyan-400 hover:text-cyan-300 transition"
                      >
                        <Pencil size={18} />
                      </button>

                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-red-500 hover:text-red-400 transition"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      <AddStockModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        refreshPortfolio={fetchPortfolio}
      />

      <EditStockModal
        open={editModal}
        onClose={() => setEditModal(false)}
        stock={selectedStock}
        refreshPortfolio={fetchPortfolio}
      />
    </div>
  );
}

export default HoldingsTable;