import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const TodoItem = ({ todo, onDelete, onCompleted }) => {
  return (
    <div
      className={`todo-item-container ${
        todo.isCompleted === true ? "todo-item-container--completed" : ""
      }`}
    >
      <input
        type="checkbox"
        className="to-do-item-checkbox"
        checked={todo.isCompleted === true}
        onChange={() => onCompleted(todo.id)}
      />
      <span className="todo-item-detail">{todo.detail}</span>
      {todo.isCompleted === true && (
        <button
          className="todo-item-delete-button"
          onClick={() => onDelete(todo.id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      )}
    </div>
  );
};

export default TodoItem;
