import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ExpenseDataProvider } from "./component/new expenses/expenseContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ExpenseDataProvider>
      <App />
    </ExpenseDataProvider>
  </React.StrictMode>
);
