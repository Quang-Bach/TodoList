import "./style.css";
const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="todo-item-container">
      <input type="checkbox" className="to-do-item-checkbox" />
      <span className="todo-item-details">{todo.detail}</span>
      <button
        className="todo-item-delete-button"
        onClick={() => onDelete(todo.id)}
      >
        Xóa
      </button>
    </div>
  );
};

export default TodoItem;
