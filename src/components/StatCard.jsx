import "./StatCard.css";

function StatCard({ title, value, type = "default" }) {
  return (
    <div className="stat-card">

      <div className="card-top">

        <p className="stat-title">
          {title}
        </p>

      </div>

      <h2 className={`stat-value ${type}`}>
        {value}
      </h2>

    </div>
  );
}

export default StatCard;