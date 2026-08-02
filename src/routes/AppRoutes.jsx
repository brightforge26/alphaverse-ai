import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import ProtectedRoute from "../components/ProtectedRoute";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Portfolio from "../pages/Portfolio";
import StockDetails from "../pages/StockDetails";
import Quarterly from "../pages/Quarterly";
import AIChat from "../pages/AIChat";
import Risk from "../pages/Risk";
import News from "../pages/News";
import Watchlist from "../pages/Watchlist";
import Profile from "../pages/Profile";

function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        {/* ===========================
            Redirect Home
        ============================ */}
        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />

        {/* ===========================
            Public Routes
        ============================ */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* ===========================
            Protected Routes
        ============================ */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/portfolio"
          element={
            <ProtectedRoute>
              <Portfolio />
            </ProtectedRoute>
          }
        />

        {/* ✅ Dynamic Stock Details */}

        <Route
          path="/stocks/:symbol"
          element={
            <ProtectedRoute>
              <StockDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/quarterly"
          element={
            <ProtectedRoute>
              <Quarterly />
            </ProtectedRoute>
          }
        />

        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <AIChat />
            </ProtectedRoute>
          }
        />

        <Route
          path="/risk"
          element={
            <ProtectedRoute>
              <Risk />
            </ProtectedRoute>
          }
        />

        <Route
          path="/news"
          element={
            <ProtectedRoute>
              <News />
            </ProtectedRoute>
          }
        />

        <Route
          path="/watchlist"
          element={
            <ProtectedRoute>
              <Watchlist />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* ===========================
            Unknown Route
        ============================ */}

        <Route
          path="*"
          element={<Navigate to="/dashboard" replace />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;