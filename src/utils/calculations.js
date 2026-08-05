// Total Profit & Loss
export const getTotalPnL = (trades) => {
  return trades.reduce((total, trade) => total + trade.pnl, 0);
};

// Current Balance
export const getCurrentBalance = (startingBalance, trades) => {
  return startingBalance + getTotalPnL(trades);
};

// Winning Trades
export const getWinningTrades = (trades) => {
  return trades.filter((trade) => trade.pnl > 0);
};

// Losing Trades
export const getLosingTrades = (trades) => {
  return trades.filter((trade) => trade.pnl < 0);
};

// Win Rate
export const getWinRate = (trades) => {
  if (trades.length === 0) return 0;

  const winners = getWinningTrades(trades).length;

  return Number(((winners / trades.length) * 100).toFixed(2));
};

// Largest Winning Trade
export const getLargestWinningTrade = (trades) => {
  const winners = getWinningTrades(trades);

  if (winners.length === 0) return 0;

  return Math.max(...winners.map((trade) => trade.pnl));
};

// Largest Losing Trade
export const getLargestLosingTrade = (trades) => {
  const losers = getLosingTrades(trades);

  if (losers.length === 0) return 0;

  return Math.min(...losers.map((trade) => trade.pnl));
};

// Equity Curve
export const getEquityCurve = (startingBalance, trades) => {
  let balance = startingBalance;

  return trades.map((trade) => {
    balance += trade.pnl;

    return {
      trade: `${trade.asset} ${trade.position}`,
      balance,
    };
  });
};

// Current Drawdown
export const getCurrentDrawdown = (startingBalance, trades) => {
  const equityCurve = getEquityCurve(startingBalance, trades);

  let highestBalance = startingBalance;
  let currentDrawdown = 0;

  equityCurve.forEach((point) => {
    if (point.balance > highestBalance) {
      highestBalance = point.balance;
    }

    const drawdown = highestBalance - point.balance;

    if (drawdown > currentDrawdown) {
      currentDrawdown = drawdown;
    }
  });

  return currentDrawdown;
};

// Remaining Drawdown
export const getRemainingDrawdown = (
  startingBalance,
  trades,
  maximumDrawdown,
) => {
  return maximumDrawdown - getCurrentDrawdown(startingBalance, trades);
};

// Current Day Loss
export const getCurrentDayLoss = (trades) => {
  return Math.abs(
    trades
      .filter((trade) => trade.pnl < 0)
      .reduce((total, trade) => total + trade.pnl, 0),
  );
};

// Remaining Daily Loss
export const getRemainingDailyLoss = (trades, dailyLossLimit) => {
  return dailyLossLimit - getCurrentDayLoss(trades);
};
