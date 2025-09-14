import "./style.css";
const Tab = ({ onChange }) => {
  return (
    <div className="tab-container">
      <div className="tab-item" onClick={() => onChange("all")}>
        All
      </div>
      <div className="tab-item" onClick={() => onChange("active")}>
        active
      </div>
      <div className="tab-item" onClick={() => onChange("completed")}>
        Comleted
      </div>
    </div>
  );
};
export default Tab;
