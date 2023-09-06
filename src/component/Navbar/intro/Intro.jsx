import React from "react";
import { Link } from "react-scroll";
import bg from "../../../assets/abdu.jpeg";
import btnImg from "../../../assets/hireme.png";
import "./intro.css";
import { NavLink, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Intro = () => {
  const navigate = useNavigate;
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello" data-aos="fade-up">
          hello,
        </span>
        <span className="introText">I'm </span>
        <h2 className="introName">Abderrazak</h2>
        <h2 className="introName1">Abderrazak</h2>
        <br />
        <h3>Abderrazak</h3>
        Front-End Developer
        <p className="introPara">
          I am skilled web designer with experience in creating <br /> appealing
          and user-friendly websites.
        </p>
        <NavLink to="/about">
          <button
            className="btn"
            onClick={() => {
              document
                .getElementById("skills")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
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
