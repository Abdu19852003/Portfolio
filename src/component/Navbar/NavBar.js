import "./navbar.css";

import { NavLink, useNavigate } from "react-router-dom";
import contactImg from "../../assets/contact.png";
import menu from "../../assets/menu.png";
import { useEffect, useState } from "react";
import FileSaver from "file-saver";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handelPdf = () => {
    FileSaver.saveAs(process.env.PUBLIC_URL + "/abdul.pdf", "Lebenslauf.pdf");
  };
  return (
    <nav className="navbar">
      <div className="desktopMenu">
        <NavLink activeClass="active" to="/" className="desktopMenuListItem">
          Home
        </NavLink>
        <NavLink
          activeClass="active"
          to="/about"
          className="desktopMenuListItem"
        >
          About
        </NavLink>

        <NavLink
          activeClass="active"
          to="/portfolio"
          className="desktopMenuListItem"
        >
          Portfolio
        </NavLink>
        <NavLink
          activeClass="active"
          to="/contact"
          className="desktopMenuListItem"
        >
          Say Hello
        </NavLink>
      </div>

      <button className="desktopMenuBtn" onClick={handelPdf}>
        Download CV
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
          to="/"
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Home
        </NavLink>
        <NavLink
          activeClass="active"
          to="/about"
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          About
        </NavLink>

        <NavLink
          activeClass="active"
          to="/portfolio"
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Portfolio
        </NavLink>
        <NavLink
          activeClass="active"
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
