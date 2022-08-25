import "./expenseForm.css";
import React, { useState, useContext } from "react";
import { ExpenseContext } from "./expenseContext";

const ExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  const { expenseData, setExpenseData } = useContext(ExpenseContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = Math.floor(Math.random());
    setExpenseData([
      ...expenseData,
      {
        id,
        title,
        date,
        amount,
      },
    ]);

    setAmount("");
    setTitle("");
    setDate("");
  };

  const titleHandleChange = (e) => {
    setTitle(e.target.value);
  };
  const dateHandleChange = (e) => {
    setDate(e.target.value);
  };
  const amountHandleChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input onChange={titleHandleChange} value={title} type="text" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" onChange={dateHandleChange} value={date} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" onChange={amountHandleChange} value={amount} />
        </div>
        <button type="submit" className="new-expense__actions">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
