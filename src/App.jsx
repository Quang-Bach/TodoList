import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Tab from "./components/Tab";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [formInput, setFormInput] = useState("");

  const handleInputChange = (e) => {
    setFormInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: uuidv4(),
      detail: formInput,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);

    setFormInput("");
  };

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  const handleCompletedTodo = (id) => {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted };
      }
      return item;
    });
    setTodos(newTodos);
  };
  return (
    <div className="app-container">
      <h1>#todo</h1>
      <Tab />
      <Form
        value={formInput}
        onChange={handleInputChange}
        onSubmit={handleFormSubmit}
      />
      <TodoList
        todos={todos}
        onDelete={handleDeleteTodo}
        onCompleted={handleCompletedTodo}
      />
    </div>
  );
}

export default App;
