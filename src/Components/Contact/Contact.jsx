import React from "react";
import "./Contact.css";
import msgIcon from "../../assets/msg-icon.png";
import mailIcon from "../../assets/mail-icon.png";
import phoneIcon from "../../assets/phone-icon.png";
import locationIcon from "../../assets/location-icon.png";
import whiteArrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1090f30c-2052-4b13-a096-2569d28cd74f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact__col">
        <h3>
          Send us a message <img src={msgIcon} alt="message icon" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={mailIcon} alt="mail icon" />
            Contact @AmaanNaseh
          </li>
          <li>
            <img src={phoneIcon} alt="phone icon" />
            +91 1234567890
          </li>
          <li>
            <img src={locationIcon} alt="location icon" />
            77 Massachusetts Ave, Cambridge <br /> MA 02139, United States
          </li>
        </ul>
      </div>
      <div className="contact__col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your number"
            required
          />
          <label>Write your messages here</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="6"
            required
          ></textarea>
          <button type="submit" className="btn dark__btn">
            Send Now <img src={whiteArrow} alt="white arrow" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
