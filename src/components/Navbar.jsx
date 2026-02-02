import { NavLink } from "react-router-dom";

const navLinkStyles = ({ isActive }) => ({
  color: isActive ? "#0509f3" : "#3e049c",
  //textDecoration: "none",
  fontWeight: "bold",
  fontSize: isActive ? "23px" : "20px",
  padding: "4px 18px",
  borderRadius: "20px",
  border: isActive ? "2px solid #0509f3" : "2px solid transparent",
  backgroundColor: isActive ? "rgb(199, 243, 5)" : "transparent",
});

function Navbar() {
  return (
    <nav>
      <NavLink to="/" style={navLinkStyles}>
        Hem
      </NavLink>
      {/* {" | "} */}
      <NavLink to="/about" style={navLinkStyles}>
        Om
      </NavLink>
      <NavLink to="/events" style={navLinkStyles}>
        Händelser
      </NavLink>
      {/* {" | "} */}
    </nav>
  );
}

export default Navbar;
