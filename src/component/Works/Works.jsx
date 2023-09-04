import "./works.css";
import POrtfolio1 from "../../assets/project1.png";
import POrtfolio2 from "../../assets/project2.png";
import POrtfolio3 from "../../assets/project3.png";
import POrtfolio4 from "../../assets/project5.png";
import POrtfolio5 from "../../assets/portfolio-5.png";
import POrtfolio6 from "../../assets/portfolio-6.png";
import { Link } from "react-router-dom";

const Works = () => {
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
        <div className="worksImgContainer">
          <img src={POrtfolio4} alt="1" className="worksImg" />
          <div className="worksImgText">
            Restaurant-Website : <br />
            HTML CSS{" "}
          </div>
        </div>

        <div className="worksImgContainer">
          <img src={POrtfolio2} alt="1" className="worksImg" />
          <div className="worksImgText">
            {" "}
            Generator : <br />
            HTML CSS JAVASCRIPT{" "}
          </div>
        </div>
        <div className="worksImgContainer">
          <img src={POrtfolio3} alt="1" className="worksImg" />
          <div className="worksImgText">
            Movies : <br />
            React.js CSS
          </div>
        </div>
        <div className="worksImgContainer">
          <Link to="https://github.com/Abdu19852003/Enjoy-Your-Movie">
            <img src={POrtfolio1} alt="1" className="worksImg" />
          </Link>
          <div className="worksImgText">
            Couter : <br /> JavaScript CSS
          </div>
        </div>
        <div className="worksImgContainer">
          <img src={POrtfolio5} alt="1" className="worksImg" />
          <div className="worksImgText">Hello, I am Image 1</div>
        </div>
        <div className="worksImgContainer">
          <img src={POrtfolio6} alt="1" className="worksImg" />
          <div className="worksImgText">Hello, I am Image 1</div>
        </div>
      </div>
      <Link to="/portfolio">
        <button className="worksBtn">See More</button>
      </Link>
    </section>
  );
};

export default Works;
