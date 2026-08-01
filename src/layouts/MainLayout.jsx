import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";

function MainLayout({ children }) {
  return (
    <div className="flex h-screen bg-slate-950 text-white">

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
        <main className="mt-20 h-[calc(100vh-80px)] overflow-y-auto p-8">
          {children}
        </main>

      </div>

    </div>
  );
}

export default MainLayout;