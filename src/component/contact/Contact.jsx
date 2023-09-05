import "./contact.css";

import Github from "../../assets/github.png";
import Indeed from "../../assets/indeed.png";

const Contact = () => {
  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitel"> Contact Me</h1>
        <span className="contactDesc">
          {" "}
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form className="contactForm">
          <input type="text" className="name" placeholder="Your Name" />
          <input type="email" className="email" placeholder="Your Email" />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button className="submitBtn" type="submit" value="Send">
            Submit
          </button>
          <div className="links">
            <img src={Indeed} alt="Indeed" className="link" />
            <img src={Github} alt="Github" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
