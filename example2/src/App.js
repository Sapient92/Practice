import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import StateList from "./components/StateList";
import ApiList from "./components/ApiList";
import Form from "./components/Form";

function App() {
  const [todoState, setTodoState] = useState(true);
  const [todoApi, setTodoApi] = useState(false);
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <div className="container">
        <Navbar
          todoApi={todoApi}
          todoState={todoState}
          setTodoState={setTodoState}
          setTodoApi={setTodoApi}
        />
        {todoState && (
          <StateList setTodos={setTodos} todoState={todoState} todos={todos} />
        )}
        {todoApi && <ApiList todoApi={todoApi} />}
      </div>
    </div>
  );
}

export default App;
