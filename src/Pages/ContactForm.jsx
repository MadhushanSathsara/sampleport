
import React from 'react';
import './ContactForm.css';

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram
} from 'react-icons/fa';

function Contact() {
  return (
    <div className="contact-page" id="contact">

      <div className="contact-container">

        {/* LEFT SIDE */}

        <div className="contact-info">

          <span className="contact-tag">
            CONTACT ME
          </span>

          <h1>
            Let's Build Something Amazing Together
          </h1>

          <p>
            Feel free to contact me for projects,
            collaborations, or freelance opportunities.
          </p>

          <div className="info-box">
            <FaEnvelope />
            <span>yourmail@gmail.com</span>
          </div>

          <div className="info-box">
            <FaPhoneAlt />
            <span>+94 77 123 4567</span>
          </div>

          <div className="info-box">
            <FaMapMarkerAlt />
            <span>Sri Lanka</span>
          </div>

          <div className="contact-socials">
            <FaGithub />
            <FaLinkedin />
            <FaInstagram />
          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="contact-form-box">

          <form className="contact-form">

            <div className="input-group">
              <input type="text" required />
              <label>Your Name</label>
            </div>

            <div className="input-group">
              <input type="email" required />
              <label>Email Address</label>
            </div>

            <div className="input-group">
              <input type="text" required />
              <label>Subject</label>
            </div>

            <div className="input-group">
              <textarea rows="6" required></textarea>
              <label>Your Message</label>
            </div>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Contact;

