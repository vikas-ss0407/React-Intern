import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1e90ff",
    padding: "10px 20px",
    color: "white",
  };

  const logoStyle = {
    fontSize: "24px",
    fontWeight: "bold",
  };

  const linkListStyle = {
    display: "flex",
    listStyle: "none",
    gap: "15px",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
  };

  const logoutBtnStyle = {
    backgroundColor: "#ff4757",
    border: "none",
    color: "white",
    padding: "6px 12px",
    cursor: "pointer",
    fontWeight: "bold",
    borderRadius: "4px",
  };

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>EMS</div>
      <ul style={linkListStyle}>
        <li><Link to="/employees" style={linkStyle}>Employees</Link></li>
        <li><Link to="/add-employee" style={linkStyle}>Add Employee</Link></li>
        <li><Link to="/tasks" style={linkStyle}>Assign Task</Link></li>
        <li><button onClick={handleLogout} style={logoutBtnStyle}>Logout</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;