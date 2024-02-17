import React, { useRef, useState } from "react";
import SubmitButton from "./SubmitButton";
import axios from "axios";

const Form = ({
  todoApi,
  todoState,
  setTodos,
  todos,
  apiTodos,
  setApiTodos,
}) => {
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState("");
  const _id = useRef(10000);

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  };

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: _id.current,
      title,
      content: todo,
      createdAt: new Date().toISOString(),
    };
    setTodos([...todos, newTodo]);
    _id.current++;
    setTitle("");
    setTodo("");
  };
  const handleApiSumbit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: _id.current,
      title,
      content: todo,
      createdAt: new Date().toISOString(),
    };
    axios
      .post("https://topdragon.co.kr/todo", newTodo)
      .then((res) => setApiTodos([...apiTodos, res.data]))
      .catch((err) => console.log("post 실패:", err));
    setTitle("");
    setTodo("");
  };

  return (
    <form>
      <p>
        제목: <input type="text" value={title} onChange={handleInputChange} />
      </p>
      <p>
        할 일: <input type="text" value={todo} onChange={handleTodoChange} />
      </p>
      {todoState && <SubmitButton handleSubmit={handleTodoSubmit} />}
      {todoApi && <SubmitButton handleSubmit={handleApiSumbit} />}
    </form>
  );
};

export default Form;
