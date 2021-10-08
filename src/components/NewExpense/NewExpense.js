import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDateHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    console.log(expenseData);
    setIsEditing(false);
  };

  const [isEditing, setIsEditing] = useState(false);
  const editingExpenseHandler = () => {
    setIsEditing(true);
  };
  const stopEditingExpenseHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={editingExpenseHandler}>Add new expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          isEditing={stopEditingExpenseHandler}
          onSaveExpenseData={saveExpenseDateHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
