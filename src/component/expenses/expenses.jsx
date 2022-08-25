import React, { useContext } from "react";
import ExpenseItem from "./expenseItem";
import "./expenses.css";
import { ExpenseContext } from "./../new expenses/expenseContext";

const Expenses = () => {
  const { expenseData } = useContext(ExpenseContext);

  return (
    <div className="expenses">
      {expenseData.map((expenseData) => {
        const { date, title, amount } = expenseData;
        return <ExpenseItem date={date} title={title} amount={amount} />;
      })}
    </div>
  );
};

export default Expenses;
