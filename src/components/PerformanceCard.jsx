import "./PerformanceCard.css";
import StatCard from "./StatCard";

function PerformanceCard({
  totalPnL,
  winningTrades,
  losingTrades,
  winRate,
  largestWinningTrade,
  largestLosingTrade,
}) {
  const formatCurrency = (amount) => `$${amount.toLocaleString()}`;

  return (
    <section className="performance-section">
      <h2 className="section-title">Trading Performance</h2>

      <div className="performance-grid">
        <StatCard
          title="Total P&L"
          value={formatCurrency(totalPnL)}
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
          value={`${winRate}%`}
        />

        <StatCard
          title="Largest Winning Trade"
          value={formatCurrency(largestWinningTrade)}
        />

        <StatCard
          title="Largest Losing Trade"
          value={formatCurrency(largestLosingTrade)}
        />
      </div>
    </section>
  );
}

export default PerformanceCard;