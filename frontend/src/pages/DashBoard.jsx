import React, { useContext } from "react";
import Chart from "../components/Chart";
import { AppContext } from "../context/AppContext";

const DashBoard = () => {
  const { IncomeData, ExpenseData } = useContext(AppContext);
  const totalIncome = IncomeData.reduce(
    (sum, item) => sum + parseFloat(item.amount),
    0
  );
  const totalExpense = ExpenseData.reduce(
    (sum, item) => sum + parseFloat(item.amount),
    0
  );

  const totalBalance = totalIncome - totalExpense;
  return (
    <>
      <Chart IncomeData={IncomeData} ExpenseData={ExpenseData} />
      <div className="max-w-7xl mx-auto px-4 md:px-8 border border-purple-50 rounded-xl bg-gradient-to-l from-blue-50 to-purple-100 ">
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center w-full my-8">
          {/* Total Income Card */}
          <div className="flex-1 min-w-[220px] bg-white rounded-2xl shadow-lg border-t-4 border-green-400 p-6 flex flex-col justify-between items-start transition-transform hover:scale-105">
            <h1 className="font-bold text-base md:text-xl text-gray-700">
              Total Income
            </h1>
            <p className="text-2xl md:text-3xl text-green-500 font-bold mt-2">
              ${totalIncome.toFixed(2)}
            </p>
          </div>
          {/* Total Expense Card */}
          <div className="flex-1 min-w-[220px] bg-white rounded-2xl shadow-lg border-t-4 border-red-400 p-6 flex flex-col justify-between items-start transition-transform hover:scale-105">
            <h1 className="font-bold text-base md:text-xl text-gray-700">
              Total Expense
            </h1>
            <p className="text-2xl md:text-3xl text-red-500 font-bold mt-2">
              ${totalExpense.toFixed(2)}
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center my-8">
          <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-6 flex flex-col items-center w-full max-w-md">
            <h1 className="font-bold text-xl md:text-3xl text-gray-800 mb-1 underline">
              Total Balance
            </h1>
            <p
              className={`font-bold text-4xl md:text-6xl ${
                totalBalance < 0 ? "text-red-500" : "text-green-500"
              }`}
            >
              ${totalBalance.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
