import "./StatCard.css";

function StatCard({ title, value, type = "default" }) {
  return (
    <div className="stat-card">
      <p className="stat-title">{title}</p>

      <h2 className={`stat-value ${type}`}>
        {value}
      </h2>
    </div>
  );
}

export default StatCard;