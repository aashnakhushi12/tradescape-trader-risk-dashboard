import "./ProgressBar.css";

function ProgressBar({ percentage, color }) {
  return (
    <div className="progress-container">
      <div
        className={`progress-fill ${color}`}
        style={{ width: `${Math.min(percentage, 100)}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;