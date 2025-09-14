import TodoItem from "../TodoItem";
import "./style.css";
const TodoList = ({
  todos,
  activeTab,
  onDelete,
  onCompleted,
  onDeleteCompleted,
}) => {
  let filteredTodos = [];
  if (activeTab === "all") {
    filteredTodos = [...todos];
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
      {filteredTodos.length > 0 && activeTab === "completed" && (
        <button
          onClick={onDeleteCompleted}
          className="todo-list-delete-all-button"
        >
          Delete all
        </button>
      )}
    </div>
  );
};
export default TodoList;
