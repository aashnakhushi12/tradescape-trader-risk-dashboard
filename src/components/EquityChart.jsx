import "./EquityChart.css";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const formatCurrency = (value) =>
  `$${value.toLocaleString("en-US")}`;

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="chart-tooltip">
        <p className="tooltip-title">{label}</p>
        <p className="tooltip-value">
          Balance: {formatCurrency(payload[0].value)}
        </p>
      </div>
    );
  }

  return null;
}

function EquityChart({ data }) {
  const balances = data.map((item) => item.balance);
  const min = Math.min(...balances) - 500;
  const max = Math.max(...balances) + 500;

  return (
    <section className="chart-section">
      <div className="chart-header">
        <div>
          <h2 className="section-title">Equity Curve</h2>
          <p className="chart-subtitle">
            Account balance progression after each trade.
          </p>
        </div>
      </div>

      <div className="chart-card">
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={data}>
            <defs>
              <linearGradient
                id="equityGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#22c55e" stopOpacity={0.45} />
                <stop offset="100%" stopColor="#22c55e" stopOpacity={0.02} />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="#334155"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="trade"
              tick={{ fill: "#94a3b8", fontSize: 13 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              domain={[min, max]}
              tickFormatter={(value) =>
                `$${(value / 1000).toFixed(0)}k`
              }
              tick={{ fill: "#94a3b8", fontSize: 13 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip content={<CustomTooltip />} />

            <Area
              type="monotone"
              dataKey="balance"
              stroke="#22c55e"
              strokeWidth={3}
              fill="url(#equityGradient)"
              animationDuration={1200}
              activeDot={{
                r: 6,
                stroke: "#22c55e",
                strokeWidth: 2,
                fill: "#fff",
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default EquityChart;