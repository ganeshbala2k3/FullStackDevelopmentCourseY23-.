import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>BEC</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/departments">Departments</Link></li>
        <li><Link to="/faculty">Faculty</Link></li>
      </ul>
    </nav>
  );
}
export default Navbar;