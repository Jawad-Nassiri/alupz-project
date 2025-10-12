import "./StatBox.css";

export default function StatBox({ value, label }) {
  return (
    <div className="stat-box-container">
      <div className="stat-box">
        <span className="value">{value}</span>
        <span className="label">{label}</span>
      </div>
    </div>
  );
}
