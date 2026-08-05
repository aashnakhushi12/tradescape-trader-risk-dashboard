import "./PerformanceByAsset.css";
import { formatCurrency } from "../utils/formatters";

function PerformanceByAsset({ trades }) {
  const assetData = trades.reduce((acc, trade) => {
    const existing = acc.find(item => item.asset === trade.asset);

    if (existing) {
      existing.totalPnL += trade.pnl;
      existing.trades += 1;
    } else {
      acc.push({
        asset: trade.asset,
        trades: 1,
        totalPnL: trade.pnl,
      });
    }

    return acc;
  }, []);

  return (
    <section className="asset-section">
      <div className="section-header">
        <div>
          <h2 className="section-title">Performance by Asset</h2>
          <p className="section-subtitle">
            Analyze profitability across traded assets.
          </p>
        </div>
      </div>

      <div className="asset-table">
        <table>
          <thead>
            <tr>
              <th>Asset</th>
              <th>Trades</th>
              <th>Total P&L</th>
            </tr>
          </thead>

          <tbody>
            {assetData.map(asset => (
              <tr key={asset.asset}>
                <td>{asset.asset}</td>

                <td>{asset.trades}</td>

                <td
                  className={
                    asset.totalPnL >= 0
                      ? "profit-text"
                      : "loss-text"
                  }
                >
                  {asset.totalPnL >= 0 ? "+" : ""}
                  {formatCurrency(asset.totalPnL)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default PerformanceByAsset;