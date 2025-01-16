import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp, faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import emailjs from "emailjs-com";

import "./Contect.css";

const Contact = () => {
  const [dob, setDob] = useState('');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    message: "",
    phone: "",
  });

  const [isSending, setIsSending] = useState(false); // For showing loader or status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDobChange = (event) => {
    setDob(event.target.value);
    setFormData(prevData => ({
      ...prevData,
      dob: event.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true); // Set the sending state to true

    // EmailJS integration
    emailjs
      .send(
        "Aryan Saini", // Replace with your Service ID
        "template_f28fnid", // Replace with your Template ID
        {
          name: formData.name,
          email: formData.email,
          dob: formData.dob,
          message: formData.message,
          phone: formData.phone,
        },
        "Nl2B6fM1D4ZPuia15" // Replace with your User ID (Public Key)
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Your message has been sent!");
          setFormData({
            name: "",
            email: "",
            dob: "",
            message: "",
            phone: "",
          });
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send the message. Please try again.");
        }
      )
      .finally(() => setIsSending(false)); // Reset the sending state
  };

  return (
    <div className="contact">
      <section id="contact1">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={dob}
            onChange={handleDobChange}
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <label htmlFor="phone">Phone Number (Optional)</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Number"
            value={formData.phone}
            onChange={handleChange}
          /><br /><br />

          <button type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>

      <div className="MyId">
        <p>Email: aryansaini853401@gmail.com</p>
        <p>Phone: +91-8534013439</p>
        <p>
          LinkedIn: <FontAwesomeIcon icon={faLinkedin} />{" "}
          <a
            href="https://www.linkedin.com/in/aryan-saini-312b0b2a1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            My LinkedIn
          </a>
        </p>

        <div className="MyId1">
          <a href="https://www.facebook.com/aryansaini.nishu" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://x.com/aryan64835" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://www.instagram.com/om__shivaay121/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>

        <p>
          Call or Message me on{" "}
          <a
            href="https://wa.me/8534013439"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact me on WhatsApp"
            style={{
              display: "inline-flex",
              alignItems: "center",
              textDecoration: "none",
              color: "#25D366", // WhatsApp green color
              fontWeight: "bold",
            }}
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              style={{ marginRight: "8px", fontSize: "20px" }}
            />
            WhatsApp
          </a>
        </p>

        <p>Visit me at: SAHARANPUR, UTTAR PRADESH, INDIA</p>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13871.87965039987!2d77.4761759!3d30.0574983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ee92f4e06250f%3A0xf7536620f06b8cbe!2sPatni%2C%20Uttar%20Pradesh%20247231!5e0!3m2!1sen!2sin!4v1699788768540!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          title="My Location"
        ></iframe>
      </div>

      <div className="faq">
        <h3>Frequently Asked Questions</h3>
        <ul>
          <li>
            <strong>Q:</strong> What is your response time? <br />
            <strong>A:</strong> I typically respond within 24 hours.
          </li>
          <li>
            <strong>Q:</strong> Do you offer free consultations? <br />
            <strong>A:</strong> Yes, I offer a free initial consultation.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;


