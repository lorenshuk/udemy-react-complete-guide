// Lesson 51: Form to gather inputs for Expense Item - 8/10/21 4:44 PM
import React from 'react';
import ExpenseForm from './ExpenseForm';
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (expenseData) => {
    const expenseData2 = {
      ...expenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData2);
  };
  
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;