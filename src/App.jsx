import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Tab from "./components/Tab";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [formInput, setFormInput] = useState("");
  const [activeTab, setActiveTab] = useState("all"); //có 3 giá trị là: all, active và completed ( tương ướng với 3 tab)

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

  const handleTabChange = (tabValue) => {
    setActiveTab(tabValue);
  };
  return (
    <div className="app-container">
      <h1>#todo</h1>
      <Tab onChange={handleTabChange} />
      <Form
        value={formInput}
        onChange={handleInputChange}
        onSubmit={handleFormSubmit}
      />
      <TodoList
        todos={todos}
        activeTab={activeTab}
        onDelete={handleDeleteTodo}
        onCompleted={handleCompletedTodo}
      />
    </div>
  );
}

export default App;
