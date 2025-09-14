import Tab from "./components/Tab";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>#todo</h1>
      <Tab />
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
