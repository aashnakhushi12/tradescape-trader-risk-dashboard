import "./Header.css";
import { FaChartLine } from "react-icons/fa";

function Header() {
  return (
    <header className="header">

      <p className="welcome-text">
        👋 Welcome Trader
      </p>

      <div className="header-title">

        <div className="icon-box">
          <FaChartLine className="header-icon" />
        </div>

        <div>

          <h1>Trader Risk Dashboard</h1>

          <p className="header-subtitle">
            Monitor your trading performance, account health and risk exposure
            in real time.
          </p>

        </div>

      </div>

    </header>
  );
}

export default Header;