import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Expenses = () => {
  const { addExpense } = useContext(AppContext);

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
    const amount = Number(formData.amount);
    addExpense(
      formData.title,
      amount,
      formData.type,
      formData.category,
      formData.description,
      formData.date
    );
  };
  return (
    <div className="mx-auto max-w-2xl md:mt-6 bg-white p-6 rounded-md shadow-md">
      <h1 className="text-2xl font-semibold text-gray-700 mb-4">Add Expense</h1>
      <form onSubmit={handleSubmit} className="space-y-0.5">
        <div className="mb-4 ">
          <label className="block text-gray-600 mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter expense title"
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
          <label className="block text-gray-600 mb-2">Expense Type</label>
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
            <option value="groceries">Groceries</option>
            <option value="rent">Rent</option>
            <option value="utilities">Utilities</option>
            <option value="transportation">Transportation</option>
            <option value="healthcare">Healthcare</option>
            <option value="entertainment">Entertainment</option>
            <option value="education">Education</option>
            <option value="travel">Travel</option>
            <option value="shopping">Shopping</option>
            <option value="miscellaneous">Miscellaneous</option>
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

export default Expenses;
