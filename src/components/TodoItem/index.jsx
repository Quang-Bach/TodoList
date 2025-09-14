import "./style.css";
const TodoItem = () => {
  return (
    <div className="todo-item-container">
      <input type="checkbox" classname="to-do-item-checkbox" />
      <span className="todo-item-details">Nội dung tab</span>
      <button className="todo-item-delete-button">Xóa</button>
    </div>
  );
};
export default TodoItem;
