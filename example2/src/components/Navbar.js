import React, {useRef} from "react";

const Navbar = ({todoState, todoApi, setTodoState, setTodoApi}) => {
  const todoStateButton = useRef();
  const todoApiButton = useRef();
  const handleTodoClick = () => {
    if (todoState) {
      return;
    }
    setTodoState(!todoState);
    setTodoApi(!todoApi);
    todoStateButton.current.classList.add("active");
    todoApiButton.current.classList.remove("active");
  };

  const handleApiClick = () => {
    if (todoApi) {
      return;
    }
    setTodoApi(!todoApi);
    setTodoState(!todoState);
    todoApiButton.current.classList.add("active");
    todoStateButton.current.classList.remove("active");
  };
  return (
    <div className="Navbar">
      <button
        ref={todoStateButton}
        className="TodoState active"
        onClick={handleTodoClick}
      >
        TodoState
      </button>
      <button ref={todoApiButton} className="todoApi" onClick={handleApiClick}>
        todoApi
      </button>
    </div>
  );
};

export default Navbar;
