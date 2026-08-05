import "./TradeTable.css";
import { formatCurrency } from "../utils/formatters";

function TradeTable({ trades }) {
  return (
    <section className="trade-section">
      <div className="section-header">
        <div>
          <h2 className="section-title">Trade History</h2>
          <p className="section-subtitle">
            Performance breakdown for each completed trade.
          </p>
        </div>

        <div className="trade-count">
          {trades.length} Trades
        </div>
      </div>

      <div className="table-container">
        <table className="trade-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Asset</th>
              <th>Position</th>
              <th>Result</th>
              <th>P&L</th>
            </tr>
          </thead>

          <tbody>
            {trades.map((trade, index) => (
              <tr key={trade.id}>
                <td>{index + 1}</td>

                <td>
                  <strong>{trade.asset}</strong>
                </td>

                <td>
                  <span
                    className={
                      trade.position === "Long"
                        ? "position-long"
                        : "position-short"
                    }
                  >
                    {trade.position}
                  </span>
                </td>

                <td>
                  <span
                    className={
                      trade.pnl >= 0
                        ? "result-win"
                        : "result-loss"
                    }
                  >
                    {trade.pnl >= 0 ? "Win" : "Loss"}
                  </span>
                </td>

                <td
                  className={
                    trade.pnl >= 0
                      ? "profit-text"
                      : "loss-text"
                  }
                >
                  {trade.pnl >= 0 ? "+" : ""}
                  {formatCurrency(trade.pnl)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default TradeTable;