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
  const hideMainLayout = [
    "/view-transaction",
    "/add-income",
    "/add-expense",
    "/income-transactions",
    "/expense-transactions",
    "/login",
    "/register",
  ].includes(location.pathname);

  useEffect(() => {
    if (token) {
      fetchIncome();
      fetchExpense();
    }
  }, [token, location.pathname]);

  return (
    <div className="flex flex-row">
      <ToastContainer />
      <SideBar />
      {!hideMainLayout ? (
        <div className="flex flex-row w-full overflow-auto">
          <div className="flex-1 w-1/2">
            <Routes>
              <Route path="/" element={<DashBoard />} />
            </Routes>
          </div>
          <div className="flex-2 flex-col md:w-1/3 hidden lg:flex overflow-auto">
            <Routes>
              <Route path="/" element={<History />} />
            </Routes>
          </div>
        </div>
      ) : (
        <div className="flex-1 max-h-screen w-full overflow-auto">
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
  );
};

export default App;
