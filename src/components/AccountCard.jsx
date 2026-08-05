import "./AccountCard.css";
import StatCard from "./StatCard";

function AccountCard({
  startingBalance,
  currentBalance,
  maximumDrawdown,
  dailyLossLimit,
}) {
  const formatCurrency = (amount) => {
    return `$${amount.toLocaleString()}`;
  };

  return (
    <section className="account-section">
      <h2 className="section-title">Account Overview</h2>

      <div className="account-grid">
        <StatCard
          title="Starting Balance"
          value={formatCurrency(startingBalance)}
        />

        <StatCard
          title="Current Balance"
          value={formatCurrency(currentBalance)}
        />

        <StatCard
          title="Maximum Drawdown"
          value={formatCurrency(maximumDrawdown)}
        />

        <StatCard
          title="Daily Loss Limit"
          value={formatCurrency(dailyLossLimit)}
        />
      </div>
    </section>
  );
}

export default AccountCard;