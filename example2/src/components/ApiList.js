import axios from "axios";
import React, { useEffect, useState } from "react";
import Form from "./Form";

const ApiList = ({ todoApi }) => {
  const [apiTodos, setApiTodos] = useState(null);
  useEffect(() => {
    const apiList = async () => {
      const response = await axios
        .get("https://topdragon.co.kr/todo")
        .then((res) => res.data);
      setApiTodos(response);
    };
    apiList();
  }, []);
  console.log(apiTodos);

  if (apiTodos === null) {
    return <div>로딩중입니다...</div>;
  }

  return (
    <>
      <div className="ApiList">
        {apiTodos.map((todo) => (
          <div key={todo.idx}>
            <div>
              <p>제목 : {todo.title}</p>
              <p>할 일 : {todo.content}</p>
            </div>
            <div>{todo.createdAt}</div>
          </div>
        ))}
      </div>
      <Form todoApi={todoApi} apiTodos={apiTodos} setApiTodos={setApiTodos} />
    </>
  );
};

export default ApiList;
