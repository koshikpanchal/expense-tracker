import React, { useState } from "react";

export const ExpenseContext = React.createContext({
  expenseData: [],
  setExpenseData: () => {},
});

export const ExpenseDataProvider = ({ children }) => {
  const [expenseData, setExpenseData] = useState([]);

  const value = { expenseData, setExpenseData };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
};
