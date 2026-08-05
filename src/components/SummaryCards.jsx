import "./SummaryCards.css";
import {
  FaWallet,
  FaChartLine,
  FaBullseye,
  FaShieldAlt,
} from "react-icons/fa";

import { formatCurrency } from "../utils/formatters";

function SummaryCards({
  currentBalance,
  totalPnL,
  winRate,
  riskStatus,
}) {
  const cards = [
    {
      title: "Current Balance",
      value: formatCurrency(currentBalance),
      icon: <FaWallet />,
    },
    {
      title: "Total P&L",
      value: formatCurrency(totalPnL),
      icon: <FaChartLine />,
      profit: totalPnL >= 0,
    },
    {
      title: "Win Rate",
      value: `${winRate}%`,
      icon: <FaBullseye />,
    },
    {
      title: "Risk Status",
      value: riskStatus,
      icon: <FaShieldAlt />,
    },
  ];

  return (
    <section className="summary-section">
      <div className="summary-grid">
        {cards.map((card) => (
          <div className="summary-card" key={card.title}>
            <div className="summary-icon">{card.icon}</div>

            <div>
              <p>{card.title}</p>

              <h3
                className={
                  card.profit === false
                    ? "loss"
                    : card.profit
                    ? "profit"
                    : ""
                }
              >
                {card.value}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SummaryCards;