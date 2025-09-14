import TodoItem from "../TodoItem";
import "./style.css";
const TodoList = ({ todos, activeTab, onDelete, onCompleted }) => {
  let filteredTodos = [];
  if (activeTab === "all") {
    filteredTodos = todos;
  }

  if (activeTab === "active") {
    filteredTodos = todos.filter((item) => item.isCompleted === false);
  }
  if (activeTab === "completed") {
    filteredTodos = todos.filter((item) => item.isCompleted === true);
  }
  return (
    <div className="todo-list-container">
      {filteredTodos.map((item) => (
        <TodoItem
          key={item.id}
          todo={item}
          onDelete={onDelete}
          onCompleted={onCompleted}
        />
      ))}
    </div>
  );
};
export default TodoList;
