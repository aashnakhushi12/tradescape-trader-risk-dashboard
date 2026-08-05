import "./RiskIndicator.css";
import ProgressBar from "./ProgressBar";
import { formatCurrency } from "../utils/formatters";

function RiskIndicator({
  currentDrawdown,
  remainingDrawdown,
  currentDayLoss,
  remainingDailyLoss,
  drawdownUsage,
  dailyLossUsage,
  riskStatus,
  maximumDrawdown,
  dailyLossLimit,
}) {
  const getColor = (value) => {
    if (value >= 80) return "red";
    if (value >= 50) return "yellow";
    return "green";
  };

  const getBadgeClass = () => {
    switch (riskStatus) {
      case "At Risk":
        return "badge-red";
      case "Approaching Limit":
        return "badge-yellow";
      default:
        return "badge-green";
    }
  };

  const getRiskMessage = () => {
    switch (riskStatus) {
      case "At Risk":
        return "You are close to violating your trading rules.";
      case "Approaching Limit":
        return "Risk is increasing. Trade carefully.";
      default:
        return "You are safely within your account limits.";
    }
  };

  return (
    <section className="risk-section">
      <div className="risk-header">
        <div>
          <h2 className="section-title">Risk Overview</h2>

          <p className="risk-subtitle">
            Track your drawdown and daily loss limits.
          </p>
        </div>

        <div className={`risk-badge ${getBadgeClass()}`}>
          {riskStatus.toUpperCase()}
        </div>
      </div>

      <p className="risk-message">{getRiskMessage()}</p>

      <div className="risk-grid">
        {/* Drawdown */}

        <div className="risk-card">
          <div className="risk-title-row">
            <h3>Current Drawdown</h3>

            <span className="risk-percent">
              {drawdownUsage}% of Limit Used
            </span>
          </div>

          <div className="risk-value">
            {formatCurrency(currentDrawdown)}

            <span>
              / {formatCurrency(maximumDrawdown)}
            </span>
          </div>

          <ProgressBar
            percentage={drawdownUsage}
            color={getColor(drawdownUsage)}
          />

          <div className="risk-footer">
            Remaining Drawdown

            <strong>
              {formatCurrency(remainingDrawdown)}
            </strong>
          </div>
        </div>

        {/* Daily Loss */}

        <div className="risk-card">
          <div className="risk-title-row">
            <h3>Today's Loss</h3>

            <span className="risk-percent">
              {dailyLossUsage}% of Limit Used
            </span>
          </div>

          <div className="risk-value">
            {formatCurrency(currentDayLoss)}

            <span>
              / {formatCurrency(dailyLossLimit)}
            </span>
          </div>

          <ProgressBar
            percentage={dailyLossUsage}
            color={getColor(dailyLossUsage)}
          />

          <div className="risk-footer">
            Remaining Daily Loss

            <strong>
              {formatCurrency(remainingDailyLoss)}
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RiskIndicator;