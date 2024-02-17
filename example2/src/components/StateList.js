import React from "react";
import Form from "./Form";

const StateList = ({ setTodos, todos, todoState }) => {
  return (
    <>
      <div className="StateList">
        {todos.map((todo) => (
          <div key={todo.id}>
            <div>
              <p>제목 : {todo.title}</p>
              <p>할 일 : {todo.content}</p>
            </div>
            <div>{todo.createdAt}</div>
          </div>
        ))}
      </div>
      <Form todos={todos} setTodos={setTodos} todoState={todoState} />
    </>
  );
};

export default StateList;
