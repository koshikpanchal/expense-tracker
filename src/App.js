import Expenses from "./component/expenses/expenses";
import NewExpense from "./component/new expenses/newExpense";
import React, { useContext } from "react";
import { ExpenseContext } from "./component/new expenses/expenseContext";

function App() {
  const { expenseData } = useContext(ExpenseContext);
  console.log(expenseData);
  const dummyExpenses = [
    {
      id: "e1",
      amount: "30",
      title: "house rent",
      date: new Date(2021, 3, 28),
    },
    {
      id: "e2",
      amount: "10",
      title: "school Fee",
      date: new Date(2021, 4, 28),
    },
  ];
  return (
    <div>
      <h2>Expense Tracker</h2>
      <NewExpense />
      <Expenses expense={expenseData} />
    </div>
  );
}

export default App;
