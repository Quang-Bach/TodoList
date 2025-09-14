import TodoItem from "../TodoItem";
import "./style.css";
const TodoList = () => {
  return (
    <div className="todo-list-container">
      <div>
        <TodoItem />
      </div>
    </div>
  );
};
export default TodoList;
