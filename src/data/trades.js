const startingBalance = 100000;
const maximumDrawdown = 10000;
const dailyLossLimit = 5000;

const trades = [
  {
    id: 1,
    asset: "BTC",
    position: "Long",
    pnl: 1200,
    date: "2026-08-05",
  },
  {
    id: 2,
    asset: "ETH",
    position: "Short",
    pnl: -450,
    date: "2026-08-05",
  },
  {
    id: 3,
    asset: "BTC",
    position: "Short",
    pnl: 800,
    date: "2026-08-05",
  },
  {
    id: 4,
    asset: "SOL",
    position: "Long",
    pnl: -300,
    date: "2026-08-05",
  },
  {
    id: 5,
    asset: "ETH",
    position: "Long",
    pnl: 2000,
    date: "2026-08-05",
  },
];

export { startingBalance, maximumDrawdown, dailyLossLimit, trades };
