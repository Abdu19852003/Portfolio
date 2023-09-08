import "./contact.css";

import Github from "../../assets/github.png";
import Indeed from "../../assets/indeed.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_80y0kcl",
        "template_obdpp7f",
        form.current,
        "M-wTTaTLjzrBtDHsy35xW"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitel"> Contact Me</h1>
        <span className="contactDesc">
          {" "}
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
          />
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
