import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpensesFilter/ExpensesFilter";
import "./Expenses.css";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState('2020')

  const getFilterHandler = (expenseFilter) => {
    setFilterYear(expenseFilter);
    console.log(`Expenses.js-> expenseFilter=${expenseFilter}`);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter getFilter={getFilterHandler} selectedYear={filterYear} />
        {props.expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
