import "./styles/dashboard.css";

import Header from "./components/Header";
import AccountCard from "./components/AccountCard";
import PerformanceCard from "./components/PerformanceCard";
import TradeTable from "./components/TradeTable";

import {
  startingBalance,
  maximumDrawdown,
  dailyLossLimit,
  trades,
} from "./data/trades";

import {
  getCurrentBalance,
  getTotalPnL,
  getWinningTrades,
  getLosingTrades,
  getWinRate,
  getLargestWinningTrade,
  getLargestLosingTrade,
} from "./utils/calculations";

function App() {
  const currentBalance = getCurrentBalance(startingBalance, trades);

  const totalPnL = getTotalPnL(trades);

  const winningTrades = getWinningTrades(trades).length;

  const losingTrades = getLosingTrades(trades).length;

  const winRate = getWinRate(trades);

  const largestWinningTrade = getLargestWinningTrade(trades);

  const largestLosingTrade = getLargestLosingTrade(trades);

  return (
    <div className="app">
      <Header />

      <AccountCard
        startingBalance={startingBalance}
        currentBalance={currentBalance}
        maximumDrawdown={maximumDrawdown}
        dailyLossLimit={dailyLossLimit}
      />

      <PerformanceCard
        totalPnL={totalPnL}
        winningTrades={winningTrades}
        losingTrades={losingTrades}
        winRate={winRate}
        largestWinningTrade={largestWinningTrade}
        largestLosingTrade={largestLosingTrade}
      />

      <TradeTable trades={trades} />
    </div>
  );
}

export default App;
