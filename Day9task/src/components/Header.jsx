import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ background: "#282c34", padding: "1rem" }}>
      <nav>
        <Link to="/" style={{ marginRight: "1rem", color: "#fff" }}>Login</Link>
        <Link to="/register" style={{ color: "#fff" }}>Register</Link>
      </nav>
    </header>
  );
};

export default Header;
