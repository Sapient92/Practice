import React from "react";
import "./ExpenseItem.css";
import { MdDelete, MdEdit } from "react-icons/md";

const ExpenseItem = ({ expense, handleDelete, handleEdit }) => {
  return (
    <li className="item">
      <div>
        <span className="expense">{expense.charge}</span>
        <span className="amount"> {expense.amount}</span>
      </div>
      <div>
        <button onClick={() => handleEdit(expense.id)} className="edit-btn">
          <MdEdit />
        </button>
        <button className="clear-btn" onClick={() => handleDelete(expense.id)}>
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
