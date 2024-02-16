import axios from "axios";
import React, {useRef, useState} from "react";

const Form = ({setTodos, todos}) => {
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
      id: _id,
      title,
      content: todo,
      createdAt: new Date().toISOString(),
    };
    _id.current++;
    setTodos([...todos, newTodo]);

    axios
      .post("https://topdragon.co.kr/todo", newTodo)
      .catch((err) => console.log("post 실패:", err));
    setTitle("");
    setTodo("");
  };
  return (
    <form onSubmit={handleTodoSubmit}>
      <p>
        제목: <input value={title} onChange={handleInputChange} />
      </p>
      <p>
        할 일: <input value={todo} onChange={handleTodoChange} />
      </p>
      <button>작성완료</button>
    </form>
  );
};

export default Form;
