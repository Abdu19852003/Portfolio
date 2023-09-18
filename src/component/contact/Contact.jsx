import "./contact.css";

import Github from "../../assets/github.png";
import Indeed from "../../assets/indeed.png";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yj5qftu",
        "template_gfu5u2i",
        form.current,
        "QIbpTOR9vYtlVihU2"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );

    setEmailSent(true);
  };
  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitel"> Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
            onChange={handleInputChange}
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
            onChange={handleInputChange}
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
            onChange={handleInputChange}
          ></textarea>
          {emailSent && <p> Email gesendet</p>}

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
