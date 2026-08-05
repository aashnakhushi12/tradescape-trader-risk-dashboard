import "./TradeTable.css";
import { formatCurrency } from "../utils/formatters";

function TradeTable({ trades }) {
  return (
    <section className="trade-section">
      <h2 className="section-title">Trade History</h2>

      <div className="table-container">
        <table className="trade-table">
          <thead>
            <tr>
              <th>Asset</th>
              <th>Position</th>
              <th>P&L</th>
            </tr>
          </thead>

          <tbody>
            {trades.map((trade) => (
              <tr key={trade.id}>
                <td>{trade.asset}</td>

                <td>{trade.position}</td>

                <td
                  className={
                    trade.pnl >= 0 ? "profit-text" : "loss-text"
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