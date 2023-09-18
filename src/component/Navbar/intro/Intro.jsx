import React from "react";
import { Link } from "react-scroll";
import bg from "../../../assets/abdu.jpeg";
import btnImg from "../../../assets/hireme.png";
import "./intro.css";
import { NavLink, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import FileSaver from "file-saver";

const Intro = () => {
  const navigate = useNavigate;
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handelPdf = () => {
    FileSaver.saveAs(process.env.PUBLIC_URL + "/abdul.pdf", "Lebenslauf.pdf");
  };
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">👋hello, </span>
        <span className="introText">I'm </span>
        <br />
        <h2 className="introName">Abderrazak</h2>
        <h2 className="introName1">Abderrazak</h2>
        <h3>Abdu</h3>
        Front-End Developer
        <p className="introPara">
          I code beautifully simple things, I love what I do,
          <br /> and enjoy bringing ideas to life in the browser.
        </p>
        <NavLink to="/about">
          <button className="btn">
            <img src={btnImg} alt="Hire Me" className="btnImg" />
            Hire Me
          </button>
        </NavLink>
      </div>
      <img src={bg} alt="bg" className="bg" width={"400px"} />
    </section>
  );
};

export default Intro;
