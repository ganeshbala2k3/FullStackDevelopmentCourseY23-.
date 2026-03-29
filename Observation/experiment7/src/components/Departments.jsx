import "./Departments.css";

function Departments() {
  const depts = ["CSE", "ECE", "EEE", "Mechanical"];

  return (
    <div className="departments">
      <h2>Departments</h2>
      <div className="dept-list">
        {depts.map((d, i) => (
          <div key={i} className="card">{d}</div>
        ))}
      </div>
    </div>
  );
}
export default Departments;