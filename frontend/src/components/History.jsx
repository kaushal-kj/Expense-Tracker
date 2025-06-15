import React, { useContext, useEffect, useState } from "react";
import { Chart, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { AppContext } from "../context/AppContext";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const History = () => {
  const { IncomeData, ExpenseData } = useContext(AppContext);

  const parsePrice = (price) => {
    return typeof price === "number"
      ? price
      : parseFloat(price.replace(/[^0-9.-]+/g, ""));
  };

  const [minIncome, setMinIncome] = useState(0);
  const [maxIncome, setMaxIncome] = useState(0);
  const [minExpense, setMinExpense] = useState(0);
  const [maxExpense, setMaxExpense] = useState(0);

  useEffect(() => {
    const incomePrices = IncomeData.map((item) => parsePrice(item.amount));
    const expensePrices = ExpenseData.map((item) => parsePrice(item.amount));

    setMinIncome(incomePrices.length ? Math.min(...incomePrices) : 0);
    setMaxIncome(incomePrices.length ? Math.max(...incomePrices) : 0);
    setMinExpense(expensePrices.length ? Math.min(...expensePrices) : 0);
    setMaxExpense(expensePrices.length ? Math.max(...expensePrices) : 0);
  }, [IncomeData, ExpenseData]); // Add dependencies to useEffect

  const chartData = {
    labels: [
      "Total Income",
      "Total Expense",
      "Min Income",
      "Max Income",
      "Min Expense",
      "Max Expense",
    ],
    datasets: [
      {
        data: [
          IncomeData.reduce((sum, item) => sum + parsePrice(item.amount), 0),
          ExpenseData.reduce((sum, item) => sum + parsePrice(item.amount), 0),
          minIncome,
          maxIncome,
          minExpense,
          maxExpense,
        ],
        backgroundColor: [
          "#36A2EB", //Total Income
          "#FF6384", //Total Expense
          "#48C0C0", //Min Income
          "#FFCE56", //Max Income
          "#9966FF", //Min Expense
          "#FF9F40", //Max Expense
        ],
        hoverBackgroundColor: [
          "#66B3FF",
          "#FF6F91",
          "#70D8D8",
          "#FFD966",
          "#B38FFF",
          "#FFB673",
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true, // Fix typo: was 'resposive'
    plugins: {
      title: {
        display: true,
        text: "Income and Expense Breakdown",
      },
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className="w-full hidden lg:block mx-auto p-6 bg-gradient-to-br from-blue-50 to-purple-100 rounded-2xl shadow-xl">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 tracking-tight">
        Recent History
      </h1>
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="space-y-4 h-72 overflow-y-auto bg-white rounded-xl shadow-md p-4 border border-blue-100">
          <h2 className="text-lg font-semibold text-green-600 mb-2 text-center">
            Income
          </h2>
          {IncomeData.length === 0 && (
            <p className="text-gray-400 text-center">No income records</p>
          )}
          {IncomeData.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-3 bg-green-50 rounded-lg hover:shadow-lg transition-all"
            >
              <div className="flex flex-col">
                <h3 className="text-base font-medium text-gray-800">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500">$ {item.amount}</p>
              </div>
              <div className="text-base font-bold text-green-500">
                $ {item.amount}
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-4 h-72 overflow-y-auto bg-white rounded-xl shadow-md p-4 border border-red-100">
          <h2 className="text-lg font-semibold text-red-500 mb-2 text-center">
            Expense
          </h2>
          {ExpenseData.length === 0 && (
            <p className="text-gray-400 text-center">No expense records</p>
          )}
          {ExpenseData.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-3 bg-red-50 rounded-lg hover:shadow-lg transition-all"
            >
              <div className="flex flex-col">
                <h3 className="text-base font-medium text-gray-800">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500">$ {item.amount}</p>
              </div>
              <div className="text-base font-bold text-red-500">
                $ {item.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 rounded-2xl p-8 bg-white shadow-lg border border-blue-100 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">
          Spend Overview
        </h2>
        <div className="w-full max-w-xs">
          <Pie data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default History;
