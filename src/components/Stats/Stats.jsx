import "./Stats.css";
import StatBox from "./StatBox/StatBox";

export default function Stats() {
  return (
    <div className="stat-container">
      <StatBox value="3.452" label="Generating" />
      <StatBox value="1.458" label="Downloads" />
      <StatBox value="1.050" label="Live Chats" />
      <StatBox value="1.500" label="Unique Products" />
    </div>
  );
}
