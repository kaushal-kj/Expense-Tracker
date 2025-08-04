import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import cookie from "js-cookie";
import axios from "axios";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [ExpenseData, setExpenseData] = useState([]);
  const [IncomeData, setIncomeData] = useState([]);
  const [token, setToken] = useState(Boolean(cookie.get("token")));

  const backendUrl = import.meta.env.VITE_BACKEND_PORT;
  const utoken = cookie.get("token");

  const fetchIncome = async () => {
    try {
      const decodedToken = jwtDecode(utoken);
      const userId = decodedToken?.id;

      if (!userId) {
        return;
      }

      const { data } = await axios.get(`${backendUrl}/api/user/get-income`, {
        headers: {
          Authorization: `Bearer ${utoken}`,
        },
      });
      if (data.success) {
        setIncomeData(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchExpense = async () => {
    try {
      const decodedToken = jwtDecode(utoken);
      const userId = decodedToken?.id;

      if (!userId) {
        return;
      }
      const { data } = await axios.get(`${backendUrl}/api/user/get-expenses`, {
        headers: {
          Authorization: `Bearer ${utoken}`,
        },
      });
      if (data.success) {
        setExpenseData(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addIncome = async (
    title,
    amount,
    income,
    category,
    description,
    date
  ) => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/user/add-income`,
        { title, amount, income, category, description, date },
        {
          headers: {
            Authorization: `Bearer ${utoken}`,
          },
        }
      );
      if (data.success) {
        toast.success(data.message);
        fetchIncome();
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteIncome = async (id) => {
    try {
      const { data } = await axios.delete(
        `${backendUrl}/api/user/delete-income/${id}`,
        {
          headers: {
            Authorization: `Bearer ${utoken}`,
          },
        }
      );
      if (data.success) {
        toast.success(data.message);
        fetchIncome();
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete income");
    }
  };

  const addExpense = async (
    title,
    amount,
    expense,
    category,
    description,
    date
  ) => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/user/add-expense`,
        { title, amount, expense, category, description, date },
        {
          headers: {
            Authorization: `Bearer ${utoken}`,
          },
        }
      );
      if (data.success) {
        toast.success(data.message);
        fetchExpense();
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteExpense = async (id) => {
    try {
      const { data } = await axios.delete(
        `${backendUrl}/api/user/delete-expense/${id}`,
        {
          headers: {
            Authorization: `Bearer ${utoken}`,
          },
        }
      );
      if (data.success) {
        toast.success(data.message);
        fetchExpense();
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete expense");
    }
  };

  const handleRegister = async (name, email, password) => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/user/register`,
        { name, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.success) {
        cookie.set("token", data.token, { expires: 7 });
        setToken(true);
        fetchIncome();
        fetchExpense();
        toast.success(data.message || "Register Successfull");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("registration failed");
    }
  };

  const handleLogin = async (email, password) => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/user/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.success) {
        console.log(data);
        cookie.set("token", data.token);
        setToken(true);
        fetchIncome();
        fetchExpense();
        navigate("/");
        toast.success(data.message || "Login Successfull");
      }
    } catch (error) {
      console.log(error);
      toast.error("Login failed");
    }
  };

  useEffect(() => {
    fetchIncome();
    fetchExpense();
  }, []);

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${cookie.get(
        "token"
      )}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [token]);

  const values = {
    backendUrl,
    handleRegister,
    handleLogin,
    fetchIncome,
    fetchExpense,
    addIncome,
    deleteIncome,
    addExpense,
    deleteExpense,
    IncomeData,
    ExpenseData,
    token,
    setToken,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
