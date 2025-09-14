import "./style.css";
const Form = ({ value, onChange, onSubmit }) => {
  return (
    <form className="form-container" onSubmit={onSubmit}>
      <input
        className="form-input"
        placeholder="add details"
        value={value}
        onChange={onChange}
      />
      <button className="form-button">Add</button>
    </form>
  );
};
export default Form;
