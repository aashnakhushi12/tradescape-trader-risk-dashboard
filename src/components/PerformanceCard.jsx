import "./PerformanceCard.css";
import StatCard from "./StatCard";
import {
  formatCurrency,
  formatPercentage,
} from "../utils/formatters";

function PerformanceCard({
  totalPnL,
  winningTrades,
  losingTrades,
  winRate,
  largestWinningTrade,
  largestLosingTrade,
}) {
  return (
    <section className="performance-section">
      <h2 className="section-title">Trading Performance</h2>

      <div className="performance-grid">
        <StatCard
          title="Total P&L"
          value={formatCurrency(totalPnL)}
          type={totalPnL >= 0 ? "profit" : "loss"}
        />

        <StatCard
          title="Winning Trades"
          value={winningTrades}
        />

        <StatCard
          title="Losing Trades"
          value={losingTrades}
        />

        <StatCard
          title="Win Rate"
          value={formatPercentage(winRate)}
        />

        <StatCard
          title="Largest Winning Trade"
          value={formatCurrency(largestWinningTrade)}
          type="profit"
        />

        <StatCard
          title="Largest Losing Trade"
          value={formatCurrency(largestLosingTrade)}
          type="loss"
        />
      </div>
    </section>
  );
}

export default PerformanceCard;