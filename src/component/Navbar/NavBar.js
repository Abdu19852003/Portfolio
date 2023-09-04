import "./navbar.css";
import { Link } from "react-scroll";

import { NavLink } from "react-router-dom";
import contactImg from "../../assets/contact.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="desktopMenu">
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          to="intro"
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          to="skills"
          className="desktopMenuListItem"
        >
          About
        </Link>

        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          to="works"
          className="desktopMenuListItem"
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          to="contact"
          className="desktopMenuListItem"
        >
          Contact
        </Link>
      </div>
      <button
        className="desktopMenuBtn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={contactImg} alt="" className="desktopMenuImg" /> Contact Me
      </button>
    </nav>
  );
};

export default NavBar;
