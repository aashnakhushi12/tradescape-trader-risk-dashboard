# Trader Risk Dashboard

A responsive React application built as part of the **Tradescape Full Stack Developer Assignment**.

The dashboard helps traders monitor their trading performance, understand their account risk, and quickly identify whether they are approaching any account rule violations.

---

## 🚀 Live Demo

🔗 https://tradescape-trader-risk-dashboard-psi.vercel.app/

---

## 💻 GitHub Repository

🔗 https://github.com/aashnakhushi12/tradescape-trader-risk-dashboard

---

# Project Overview

This dashboard was developed to help traders easily understand both their trading performance and their current risk status.

Instead of displaying only the account balance and profit/loss, the application calculates important trading metrics from the provided trade data and presents them in a clean, easy-to-understand interface.

All calculations are generated dynamically rather than being hardcoded.

---

# Features

## Account Overview

- Starting Balance
- Current Balance
- Maximum Drawdown
- Daily Loss Limit

---

## Trading Performance

The dashboard automatically calculates:

- Total P&L
- Winning Trades
- Losing Trades
- Win Rate
- Largest Winning Trade
- Largest Losing Trade

All values are derived from the supplied trade data.

---

## Risk Indicator

The dashboard clearly shows whether the trader is currently:

- ✅ Safe
- ⚠️ Approaching Limit
- 🔴 At Risk

Risk calculations include:

- Current Drawdown
- Remaining Drawdown
- Current Day Loss
- Remaining Daily Loss Limit

Progress bars provide a quick visual indication of drawdown and daily loss usage.

---

## Equity Curve

An equity curve has been added to visualize how the account balance changes after every trade.

This helps traders understand their performance throughout the trading session instead of only looking at the final balance.

---

## Performance by Asset (Additional Feature)

I added a **Performance by Asset** section as an additional feature.

It groups trades by asset and displays:

- Number of trades
- Total Profit/Loss for each asset

### Why?

A trader may perform well on one asset while consistently losing on another.

This feature helps identify strengths and weaknesses across different markets and supports better trading decisions.

---

# Tech Stack

- React
- JavaScript (ES6)
- CSS3
- Recharts
- React Icons

---

# Folder Structure

```
src
│
├── components
│   ├── Header
│   ├── SummaryCards
│   ├── AccountCard
│   ├── PerformanceCard
│   ├── RiskIndicator
│   ├── ProgressBar
│   ├── EquityChart
│   ├── TradeTable
│   ├── PerformanceByAsset
│   ├── Footer
│   └── StatCard
│
├── data
│   └── trades.js
│
├── utils
│   ├── calculations.js
│   └── formatters.js
│
├── styles
│   └── dashboard.css
│
├── App.js
└── index.js
```

---

# Installation

Clone the repository.

```bash
git clone https://github.com/aashnakhushi12/tradescape-trader-risk-dashboard.git
```

Move into the project directory.

```bash
cd tradescape-trader-risk-dashboard
```

Install dependencies.

```bash
npm install
```

Start the development server.

```bash
npm start
```

The application will be available at:

```
http://localhost:3000
```

---

# Product Questions

## 1. What is drawdown in trading?

Drawdown is the reduction in a trading account's value from its highest balance to its current balance. It is one of the most important risk metrics because it shows how much capital has been lost before recovering.

---

## 2. Why would a trader care about remaining drawdown rather than just current P&L?

Current P&L only tells a trader whether they are making or losing money.

Remaining drawdown shows how much loss is still allowed before violating the account rules. Even if a trader is profitable overall, being close to the maximum drawdown limit means they need to manage risk more carefully.

---

## 3. If you had another day to work on this dashboard, what would you improve?

Given more time, I would add:

- Trade filtering by asset and date
- Search functionality
- Average winning vs losing trade analysis
- Historical performance reports
- CSV export
- Dark/Light mode
- Real-time market data integration
- User authentication and backend API integration

---

# Edge Cases

The application handles several basic edge cases:

- No trades available
- Win rate calculation when there are zero trades
- All winning trades
- All losing trades
- Responsive layout for desktop, tablet, and mobile devices

---

# Author

**Khushi Ashna**

GitHub:
https://github.com/aashnakhushi12

---

Thank you for reviewing my submission.
