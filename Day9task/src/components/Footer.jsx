const Footer = () => {
  return (
    <footer style={{ background: "#282c34", padding: "1rem", color: "#fff", textAlign: "center" }}>
      © {new Date().getFullYear()} EMS - Employee Management System
    </footer>
  );
};

export default Footer;
