import {useState} from "react";
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
        {todoState && <StateList todos={todos} />}
        {todoApi && <ApiList />}
        <Form todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
