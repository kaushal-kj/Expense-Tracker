import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Income = () => {
  const { addIncome, token } = useContext(AppContext); // Get token from context

  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    type: "",
    category: "",
    description: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if user is authenticated before submitting
    if (!token) {
      alert("Please log in to add income");
      return;
    }

    const amount = Number(formData.amount);
    addIncome(
      formData.title,
      amount,
      formData.type,
      formData.category,
      formData.description,
      formData.date
    );

    // Reset form after submission
    setFormData({
      title: "",
      amount: "",
      type: "",
      category: "",
      description: "",
      date: "",
    });
  };

  // If user is not authenticated, show login message
  if (!token) {
    return (
      <div className="mx-auto max-w-2xl md:mt-6 bg-white p-6 rounded-md shadow-md text-center">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Authentication Required
        </h2>
        <p className="text-gray-600 mb-4">Please log in to add income</p>
        <button
          onClick={() => (window.location.href = "/login")}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Go to Login
        </button>
      </div>
    );
  }
  return (
    <div className="mx-auto max-w-2xl md:mt-6 bg-white p-6 rounded-md shadow-md">
      <h1 className="text-2xl font-semibold text-gray-700 mb-4">Add Income</h1>
      <form onSubmit={handleSubmit} className="space-y-0.5">
        <div className="mb-4 ">
          <label className="block text-gray-600 mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter income title"
            required
          />
        </div>

        <div className="mb-4 ">
          <label className="block text-gray-600 mb-2">Amount</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter amount"
            required
          />
        </div>

        <div className="mb-4 ">
          <label className="block text-gray-600 mb-2">Income Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          >
            <option value="" disabled>
              Select Type
            </option>
            <option value="monthly-salary">Monthly Salary</option>
            <option value="dividends">Dividends</option>
            <option value="consulting">Consulting</option>
            <option value="real-estate">Real Estate</option>
            <option value="side-hustle">Side Husle</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-4 ">
          <label className="block text-gray-600 mb-2">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="food">Food</option>
            <option value="bills">Bills</option>
            <option value="shopping">Shopping</option>
            <option value="transport">Transport</option>
            <option value="health">Health</option>
            <option value="subscriptions">Subscriptions</option>
            <option value="gifts">Gifts</option>
            <option value="personal">Personal</option>
            <option value="household">Household</option>
            <option value="others">Others</option>
          </select>
        </div>

        <div className="mb-4 ">
          <label className="block text-gray-600 mb-2">Description</label>
          <textarea
            name="description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter a description"
            required
          ></textarea>
        </div>

        <div className="mb-4 ">
          <label className="block text-gray-600 mb-2">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Income;
