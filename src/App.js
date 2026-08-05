import "./styles/dashboard.css";

import Header from "./components/Header";
import SummaryCards from "./components/SummaryCards";
import AccountCard from "./components/AccountCard";
import PerformanceCard from "./components/PerformanceCard";
import RiskIndicator from "./components/RiskIndicator";
import EquityChart from "./components/EquityChart";
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
  getCurrentDrawdown,
  getRemainingDrawdown,
  getCurrentDayLoss,
  getRemainingDailyLoss,
  getDrawdownUsage,
  getDailyLossUsage,
  getRiskStatus,
  getEquityCurveData,
} from "./utils/calculations";

function App() {
  // ==========================
  // Account Metrics
  // ==========================
  const currentBalance = getCurrentBalance(startingBalance, trades);

  // ==========================
  // Performance Metrics
  // ==========================
  const totalPnL = getTotalPnL(trades);

  const winningTrades = getWinningTrades(trades).length;

  const losingTrades = getLosingTrades(trades).length;

  const winRate = getWinRate(trades);

  const largestWinningTrade = getLargestWinningTrade(trades);

  const largestLosingTrade = getLargestLosingTrade(trades);

  // ==========================
  // Risk Metrics
  // ==========================
  const currentDrawdown = getCurrentDrawdown(startingBalance, trades);

  const remainingDrawdown = getRemainingDrawdown(
    startingBalance,
    trades,
    maximumDrawdown,
  );

  const currentDayLoss = getCurrentDayLoss(trades);

  const remainingDailyLoss = getRemainingDailyLoss(trades, dailyLossLimit);

  const drawdownUsage = getDrawdownUsage(
    startingBalance,
    trades,
    maximumDrawdown,
  );

  const dailyLossUsage = getDailyLossUsage(trades, dailyLossLimit);

  const riskStatus = getRiskStatus(drawdownUsage, dailyLossUsage);

  // ==========================
  // Equity Curve
  // ==========================
  const equityCurveData = getEquityCurveData(startingBalance, trades);

  return (
    <div className="app">
      <Header />

      {/* Summary Cards */}
      <SummaryCards
        currentBalance={currentBalance}
        totalPnL={totalPnL}
        winRate={winRate}
        riskStatus={riskStatus}
      />

      {/* Account Overview */}
      <AccountCard
        startingBalance={startingBalance}
        currentBalance={currentBalance}
        maximumDrawdown={maximumDrawdown}
        dailyLossLimit={dailyLossLimit}
      />

      {/* Trading Performance */}
      <PerformanceCard
        totalPnL={totalPnL}
        winningTrades={winningTrades}
        losingTrades={losingTrades}
        winRate={winRate}
        largestWinningTrade={largestWinningTrade}
        largestLosingTrade={largestLosingTrade}
      />

      {/* Risk Overview */}
      <RiskIndicator
        currentDrawdown={currentDrawdown}
        remainingDrawdown={remainingDrawdown}
        currentDayLoss={currentDayLoss}
        remainingDailyLoss={remainingDailyLoss}
        drawdownUsage={drawdownUsage}
        dailyLossUsage={dailyLossUsage}
        riskStatus={riskStatus}
        maximumDrawdown={maximumDrawdown}
        dailyLossLimit={dailyLossLimit}
      />

      {/* Equity Curve */}
      <EquityChart data={equityCurveData} />

      {/* Trade History */}
      <TradeTable trades={trades} />
    </div>
  );
}

export default App;
