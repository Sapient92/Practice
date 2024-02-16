import React from "react";

const StateList = ({todos}) => {
  return (
    <div className="StateList">
      {todos.map((todo) => (
        <div key={todo.id}>
          <div>
            <p>제목 : {todo.title}</p>
            <p>제목 : {todo.content}</p>
          </div>
          <div>{todo.createdAt}</div>
        </div>
      ))}
    </div>
  );
};

export default StateList;
