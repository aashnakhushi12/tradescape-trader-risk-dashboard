import "./Header.css";
import { FaChartLine } from "react-icons/fa";

function Header() {
  return (
    <header className="header">
      <div className="header-title">
        <FaChartLine className="header-icon" />
        <h1>Trader Risk Dashboard</h1>
      </div>

      <p className="header-subtitle">
        Monitor your trading performance and risk in real time.
      </p>
    </header>
  );
}

export default Header;