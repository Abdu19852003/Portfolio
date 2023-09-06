import "./navbar.css";

import { NavLink, useNavigate } from "react-router-dom";
import contactImg from "../../assets/contact.png";
import menu from "../../assets/menu.png";
import { useState } from "react";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
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
      <img
        src={menu}
        alt="menu"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <NavLink
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          to="/"
          className="listItem"
          onClick={() => setShowMenu(false)}
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
          className="listItem"
          onClick={() => setShowMenu(false)}
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
          className="listItem"
          onClick={() => setShowMenu(false)}
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
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
