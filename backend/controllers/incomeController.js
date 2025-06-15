import incomeModel from "../models/incomeSchema.js";

const addIncome = async (req, res) => {
  const userId = req.user?.id;

  const { title, amount, income, category, description, date } = req.body;

  const parsedAmount = Number(amount);

  try {
    if (!title || !amount || !category || !description || !date) {
      return res.status(400).json({ message: "All Fields are required" });
    }

    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      return res
        .status(400)
        .json({ success: false, message: "Amount must be a positive integer" });
    }

    const newIncome = incomeModel({
      userId,
      title,
      amount,
      category,
      description,
      date,
      income,
    });

    await newIncome.save();

    res
      .status(200)
      .json({ success: true, message: "Income Added", data: newIncome });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

const deleteIncome = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteIncome = await incomeModel.findByIdAndDelete(id);
    if (!deleteIncome) {
      return res
        .status(404)
        .json({ success: false, message: "Income not found" });
    }

    res.status(200).json({ success: true, message: "Income Deleted", deleteIncome });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

const updateIncome = async (req, res) => {
  const { id } = req.params;
  const { title, amount, category, description, date } = req.body;

  try {
    const incomeUpdate = await incomeModel.findById(id);
    if (!incomeUpdate) {
      return res
        .status(404)
        .json({ success: true, message: "Income not found to update" });
    }

    incomeUpdate.title = title || incomeUpdate.title;
    incomeUpdate.amount = amount || incomeUpdate.amount;
    incomeUpdate.category = category || incomeUpdate.category;
    incomeUpdate.description = description || incomeUpdate.description;
    incomeUpdate.date = date || incomeUpdate.date;

    await incomeUpdate.save();

    res
      .status(200)
      .json({ success: true, message: "Income Updated", data: incomeUpdate });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

const getIncome = async (req, res) => {
  try {
    const userId = req.user?.id;
    const getIncome = await incomeModel.find({ userId: userId });
    if (!getIncome) {
      return res
        .status(400)
        .json({ success: false, message: "Income not found" });
    }
    res.status(200).json({ success: true, data: getIncome });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

export { addIncome, deleteIncome, updateIncome, getIncome };
