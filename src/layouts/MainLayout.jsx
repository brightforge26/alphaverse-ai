import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";

function MainLayout({ children }) {
  return (
    <div
      style={{
        background: "var(--bg)",
        color: "var(--text)",
      }}
      className="flex h-screen transition-all duration-300"
    >
      {/* Sidebar */}
      <div className="w-64 fixed left-0 top-0 h-screen">
        <Sidebar />
      </div>

      {/* Main Section */}
      <div className="ml-64 flex-1 flex flex-col">

        {/* Fixed Navbar */}
        <div className="fixed top-0 left-64 right-0 z-50">
          <Navbar />
        </div>

        {/* Scrollable Content */}
        <main
          style={{
            background: "var(--bg)",
            color: "var(--text)",
          }}
          className="mt-20 h-[calc(100vh-80px)] overflow-y-auto p-8 transition-all duration-300"
        >
          {children}
        </main>

      </div>

    </div>
  );
}

export default MainLayout;