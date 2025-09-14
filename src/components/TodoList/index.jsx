import TodoItem from "../TodoItem";
import "./style.css";
const TodoList = ({ todos, onDelete, onCompleted }) => {
  return (
    <div className="todo-list-container">
      {todos.map((item) => (
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
