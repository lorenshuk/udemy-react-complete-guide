// Lesson 51: Form to gather inputs for Expense Item - 8/10/21 4:44 PM
import React from 'react';
import ExpenseForm from './ExpenseForm';
import "./NewExpense.css";

const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;