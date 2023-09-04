import React from "react";
import { Link } from "react-router-dom";
import bg from "../../../assets/abdu.jpeg";
import btnImg from "../../../assets/hireme.png";
import "./intro.css";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">hello,</span>
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
        <Link to="/about">
          <button className="btn">
            <img src={btnImg} alt="Hire Me" className="btnImg" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="bg" className="bg" width={"400px"} />
    </section>
  );
};

export default Intro;
