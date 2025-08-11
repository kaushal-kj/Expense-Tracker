import React, { useContext, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Route, Routes, useLocation } from "react-router-dom";
import { AppContext } from "./context/AppContext";
import SideBar from "./components/SideBar";
import DashBoard from "./pages/DashBoard";
import History from "./components/History";
import ViewTransactions from "./pages/ViewTransactions";
import Income from "./pages/Income";
import Expenses from "./pages/Expenses";
import IncomeTransactions from "./pages/IncomeTransactions";
import ExpenseTransactions from "./pages/ExpenseTransactions";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const location = useLocation();
  const { token, fetchIncome, fetchExpense } = useContext(AppContext);

  const mainLayoutRoutes = ["/"];
  const isMainLayout = mainLayoutRoutes.includes(location.pathname);

  useEffect(() => {
    if (token) {
      fetchIncome();
      fetchExpense();
    }
  }, [token, location.pathname]);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <ToastContainer />

      {/* Sidebar - Responsive */}
      <div className="lg:w-64 lg:flex-shrink-0">
        <SideBar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {isMainLayout ? (
          // Dashboard Layout: Stack on mobile, side by side on desktop
          <>
            <div className="flex-1 overflow-auto p-2 lg:p-4">
              <Routes>
                <Route path="/" element={<DashBoard />} />
              </Routes>
            </div>
            <div className="w-full lg:w-1/3 hidden lg:block overflow-auto p-2 lg:p-4">
              <Routes>
                <Route path="/" element={<History />} />
              </Routes>
            </div>
          </>
        ) : (
          // Full Width Layout: Other pages take full width
          <div className="flex-1 overflow-auto p-2 lg:p-4">
            <Routes>
              <Route path="/view-transaction" element={<ViewTransactions />} />
              <Route path="/add-income" element={<Income />} />
              <Route path="/add-expense" element={<Expenses />} />
              <Route
                path="/income-transactions"
                element={<IncomeTransactions />}
              />
              <Route
                path="/expense-transactions"
                element={<ExpenseTransactions />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
