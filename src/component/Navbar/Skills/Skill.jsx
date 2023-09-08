import "./skill.css";
import UIDesign from "../../../assets/ui-design.png";
import WebDesign from "../../../assets/website-design.png";
import AppDesign from "../../../assets/app-design.png";

const Skill = () => {
  return (
    <section id="skills">
      <span className="skillTitle"> About Me</span>
      <span>
        Iam a skilled and passionate web designer with experience in creating
        visually appeling and user-friendly websites. I have a strong
        understanding of design and a keen eye for detail.I am proficient in
        HTML,CSS,and JavaScript, as well as design software such as Adobe
        Photoshop and Illustrator.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX design</h2>
            <p>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
              corrupti nemo, neque suscipit atque esse similique molestiae odio
              nesciunt eos natus quae magnam, quasi ut facilis quod, architecto
              consequuntur deserunt!{" "}
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website design </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
              corrupti nemo, neque suscipit atque esse similique molestiae odio
              nesciunt eos natus quae magnam, quasi ut facilis quod, architecto
              consequuntur deserunt!
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App design </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
              corrupti nemo, neque suscipit atque esse similique molestiae odio
              nesciunt eos natus quae magnam, quasi ut facilis quod, architecto
              consequuntur deserunt!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
