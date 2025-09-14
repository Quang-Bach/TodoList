import "./style.css";
const Tab = ({ activeTab, onChange }) => {
  return (
    <div className="tab-container">
      <div
        className={`tab-item ${activeTab === "all" ? "tab-item--active" : ""}`}
        onClick={() => onChange("all")}
      >
        All
      </div>
      <div
        className={`tab-item ${
          activeTab === "active" ? "tab-item--active" : ""
        }`}
        onClick={() => onChange("active")}
      >
        active
      </div>
      <div
        className={`tab-item ${
          activeTab === "completed" ? "tab-item--active" : ""
        }`}
        onClick={() => onChange("completed")}
      >
        Completed
      </div>
    </div>
  );
};
export default Tab;
