import React, { useContext } from "react";
import logo from "../assets/logo1.png";
import { GoGraph } from "react-icons/go";
import { FaRegCreditCard } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { GiExpense } from "react-icons/gi";

import {
  FaArrowsDownToLine,
  FaArrowsUpToLine,
  FaMoneyBillTrendUp,
} from "react-icons/fa6";
import { AppContext } from "../context/AppContext";
import { NavLink, useNavigate } from "react-router-dom";
import cookie from "js-cookie";

const SideBar = () => {
  const { token, setToken } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken(false);
    navigate("/");
    cookie.remove("token");
    window.location.reload();
  };

  return (
    <div className="bg-gradient-to-l from-black to-gray-700 w-full lg:w-64 lg:min-h-screen">
      {/* Logo */}
      <div className="mt-0 py-2 px-2">
        <img
          src={logo}
          onClick={() => navigate("/")}
          alt="logo"
          className="mt-0 w-32 lg:w-64 hidden md:block cursor-pointer"
        />
      </div>

      {/* Navigation Items */}
      <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible">
        {/* Dashboard */}
        <div className="lg:hover:bg-red-500 lg:border-none hover:border-l-2 border-red-500 mx-1 lg:mx-2 my-1 flex-shrink-0">
          <NavLink
            to={"/"}
            className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-1 lg:gap-3 py-2 lg:py-3 px-2 lg:px-4 rounded-lg cursor-pointer"
          >
            <GoGraph className="text-xl lg:text-2xl text-white flex-shrink-0" />
            <p className="text-xs lg:text-lg font-semibold text-white text-center lg:text-left">
              Dashboard
            </p>
          </NavLink>
        </div>

        {/* Transactions */}
        <div className="lg:hover:bg-red-500 lg:border-none hover:border-l-2 border-red-500 mx-1 lg:mx-2 my-1 flex-shrink-0">
          <NavLink
            to={"/view-transaction"}
            className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-1 lg:gap-3 py-2 lg:py-3 px-2 lg:px-4 rounded-lg cursor-pointer"
          >
            <FaRegCreditCard className="text-xl lg:text-2xl text-white flex-shrink-0" />
            <p className="text-xs lg:text-lg font-semibold text-white text-center lg:text-left">
              Transactions
            </p>
          </NavLink>
        </div>

        {/* Income History */}
        <div className="lg:hover:bg-red-500 lg:border-none hover:border-l-2 border-red-500 mx-1 lg:mx-2 my-1 flex-shrink-0">
          <NavLink
            to={"/income-transactions"}
            className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-1 lg:gap-3 py-2 lg:py-3 px-2 lg:px-4 rounded-lg cursor-pointer"
          >
            <FaArrowsDownToLine className="text-xl lg:text-2xl text-white flex-shrink-0" />
            <p className="text-xs lg:text-lg font-semibold text-white text-center lg:text-left">
              Income
            </p>
          </NavLink>
        </div>

        {/* Expense History */}
        <div className="lg:hover:bg-red-500 lg:border-none hover:border-l-2 border-red-500 mx-1 lg:mx-2 my-1 flex-shrink-0">
          <NavLink
            to={"/expense-transactions"}
            className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-1 lg:gap-3 py-2 lg:py-3 px-2 lg:px-4 rounded-lg cursor-pointer"
          >
            <FaArrowsUpToLine className="text-xl lg:text-2xl text-white flex-shrink-0" />
            <p className="text-xs lg:text-lg font-semibold text-white text-center lg:text-left">
              Expense
            </p>
          </NavLink>
        </div>

        {/* Add Income */}
        <div className="lg:hover:bg-red-500 lg:border-none hover:border-l-2 border-red-500 mx-1 lg:mx-2 my-1 flex-shrink-0">
          <NavLink
            to={"/add-income"}
            className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-1 lg:gap-3 py-2 lg:py-3 px-2 lg:px-4 rounded-lg cursor-pointer"
          >
            <FaMoneyBillTrendUp className="text-xl lg:text-2xl text-white flex-shrink-0" />
            <p className="text-xs lg:text-lg font-semibold text-white text-center lg:text-left">
              Add Income
            </p>
          </NavLink>
        </div>

        {/* Add Expense */}
        <div className="lg:hover:bg-red-500 lg:border-none hover:border-l-2 border-red-500 mx-1 lg:mx-2 my-1 flex-shrink-0">
          <NavLink
            to={"/add-expense"}
            className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-1 lg:gap-3 py-2 lg:py-3 px-2 lg:px-4 rounded-lg cursor-pointer"
          >
            <GiExpense className="text-xl lg:text-2xl text-white flex-shrink-0" />
            <p className="text-xs lg:text-lg font-semibold text-white text-center lg:text-left">
              Add Expense
            </p>
          </NavLink>
        </div>

        {/* Login/Logout */}
        <div className="lg:hover:bg-red-500 lg:border-none hover:border-l-2 border-red-500 mx-1 lg:mx-2 my-1 flex-shrink-0">
          {token ? (
            <div
              onClick={handleLogout}
              className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-1 lg:gap-3 py-2 lg:py-3 px-2 lg:px-4 rounded-lg cursor-pointer"
            >
              <IoLogOut className="text-xl lg:text-2xl text-red-500 flex-shrink-0" />
              <p className="text-xs lg:text-lg font-semibold text-red-500 text-center lg:text-left">
                Logout
              </p>
            </div>
          ) : (
            <NavLink
              to={"/login"}
              className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-1 lg:gap-3 py-2 lg:py-3 px-2 lg:px-4 rounded-lg cursor-pointer"
            >
              <IoLogOut className="text-xl lg:text-2xl text-white flex-shrink-0" />
              <p className="text-xs lg:text-lg font-semibold text-white text-center lg:text-left">
                Login
              </p>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
