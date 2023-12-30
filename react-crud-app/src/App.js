import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Alert from "./components/Alert";

const initialList = localStorage.getItem("budgetList")
  ? JSON.parse(localStorage.getItem("budgetList"))
  : [];

export const App = () => {
  const [expenses, setExpenses] = useState(initialList);

  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState(0);
  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState("");

  const handleDelete = (id) => {
    const newExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(newExpenses);
    handleAlert({ type: "danger", text: "아이템이 삭제되었습니다." });
    localStorage.setItem("budgetList", JSON.stringify(newExpenses));
  };

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    let amount = e.target.valueAsNumber;
    setAmount(amount);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount !== 0) {
      if (edit) {
        const newExpenses = expenses.map((item) => {
          // 이 부분 잘 이해가 안감
          return item.id === id ? { ...item, charge, amount } : item;
        });
        setExpenses(newExpenses);
        setEdit(false);
        handleAlert({ type: "success", text: "아이템이 수정되었습니다." });
        localStorage.setItem("budgetList", JSON.stringify(newExpenses));
      } else {
        const newExpense = { id: crypto.randomUUID(), charge, amount };
        const newExpenses = [...expenses, newExpense];
        setExpenses(newExpenses);
        handleAlert({ type: "success", text: "아이템이 생성되었습니다." });
        localStorage.setItem("budgetList", JSON.stringify(newExpenses));
      }
      setCharge("");
      setAmount(0);
    } else {
      handleAlert({
        type: "danger",
        text: `charge는 빈 값일 수 없으며 amount의 값은 0보다 커야 합니다.`,
      });
    }
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 7000);
  };

  const handleEdit = (id) => {
    const expense = expenses.find((item) => item.id === id);
    const { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };

  const clearItems = () => {
    setExpenses([]);
    localStorage.setItem("budgetList", JSON.stringify([]));
  };

  return (
    <main className="main-container">
      {alert.show ? <Alert type={alert.type} text={alert.text} /> : null}
      <h1>예산 계산기</h1>
      <div style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}>
        <ExpenseForm
          handleCharge={handleCharge}
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
          edit={edit}
        />
      </div>
      <div style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}>
        <ExpenseList
          handleEdit={handleEdit}
          expenses={expenses}
          handleDelete={handleDelete}
          clearItems={clearItems}
        />
      </div>s
      <div
        style={{ display: "flex", justifyContent: "end", marginTop: "1rem" }}
      >
        <p style={{ fontSize: "2rem" }}>
          총지출 :
          <span>
            {expenses.reduce((acc, curr) => {
              return (acc += curr.amount);
            }, 0)}
            원
          </span>
        </p>
      </div>
    </main>
  );
};

export default App;
