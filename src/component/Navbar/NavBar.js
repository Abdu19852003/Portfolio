import "./navbar.css";
import { Link } from "react-scroll";

import { NavLink, useNavigate } from "react-router-dom";
import contactImg from "../../assets/contact.png";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="desktopMenu">
        <NavLink
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          to="/"
          className="desktopMenuListItem"
        >
          Home
        </NavLink>
        <NavLink
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          to="/about"
          className="desktopMenuListItem"
        >
          About
        </NavLink>

        <NavLink
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          to="/portfolio"
          className="desktopMenuListItem"
        >
          Portfolio
        </NavLink>
        <NavLink
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          to="/contact"
          className="desktopMenuListItem"
        >
          Contact
        </NavLink>
      </div>

      <button className="desktopMenuBtn" onClick={() => navigate("/contact")}>
        <img src={contactImg} alt="" className="desktopMenuImg" /> Contact Me
      </button>
    </nav>
  );
};

export default NavBar;
