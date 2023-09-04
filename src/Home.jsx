import React from "react";
import Contact from "./component/contact/Contact";
import Footer from "./component/Footer/Footer";
import Intro from "./component/Navbar/intro/Intro";
import Skill from "./component/Navbar/Skills/Skill";
import Works from "./component/Works/Works";

const Home = () => {
  return (
    <>
      <Intro />
      <Skill />
      <Works />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
