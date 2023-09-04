import "./works.css";
import POrtfolio1 from "../../assets/project1.png";
import POrtfolio2 from "../../assets/project2.png";
import POrtfolio3 from "../../assets/project3.png";
import POrtfolio4 from "../../assets/project5.png";
import POrtfolio5 from "../../assets/portfolio-5.png";
import POrtfolio6 from "../../assets/portfolio-6.png";
import { Link } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";

const Works = () => {
  const navigate = useNavigate();
  return (
    <section id="works">
      <h2 className="workstitle"> My Portfolio</h2>
      <span className="worksDesc">
        I take pride in paying attention to the smallest details and making sure
        that my work is pixel perfect. i am excited to bring my skills and
        Experience to help businesses achieve their goals and create a strong
        online presence{" "}
      </span>
      <div className="worksImgs">
        <img src={POrtfolio4} alt="1" className="worksImg" />

        <img src={POrtfolio2} alt="1" className="worksImg" />

        <img src={POrtfolio3} alt="1" className="worksImg" />

        <Link to="https://github.com/Abdu19852003/Enjoy-Your-Movie">
          <img src={POrtfolio1} alt="1" className="worksImg" />
        </Link>
      </div>

      <button className="worksBtn" onClick={() => navigate("/portfolio")}>
        See More
      </button>
    </section>
  );
};

export default Works;
