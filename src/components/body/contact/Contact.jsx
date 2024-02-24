import React from "react";
import "./Contact.css";
import { LuFacebook, LuInstagram } from "react-icons/lu";

import { PiTelegramLogoBold } from "react-icons/pi";
import { ImWhatsapp } from "react-icons/im";
import Navigation from "../navigation/Navigation";

const Contact = () => {
  return (
    <div className="contact_wrapper">
      <div className="contact_empty">
        <div className="contact_header_wrapper">
          <h1 className="contact_header"> միջոցը</h1>
          <h1 className="contact_header"> կապի </h1>
          <h1 className="contact_header"> հարմար </h1>
          <h1 className="contact_header"> ձեզ </h1>
          <h1 className="contact_header">Ընտրեք</h1>
        </div>
      </div>

      <div className="contact_container">
        <div
          className="social_card"
          style={{ "--r": -15 }}
          data-text="Facebook"
        >
          <a
            target="blank"
            href="https://www.facebook.com/profile.php?id=61554687161610"
            className="social_link"
          >
            {" "}
            <LuFacebook />
          </a>
        </div>
        <div className="social_card" style={{ "--r": 5 }} data-text="Instagram">
          <a
            target="blank"
            href="https://www.instagram.com/ccinvestgroup/"
            className="social_link"
          >
            <LuInstagram />
          </a>
        </div>
        <div className="social_card" style={{ "--r": 25 }} data-text="Telegram">
          <a
            target="blank"
            href="https://t.me/ccinvestgroup"
            className="social_link"
          >
            <PiTelegramLogoBold />
          </a>
        </div>
        <div
          className="social_card"
          style={{ "--r": -15 }}
          data-text="Whatsapp"
        >
          <a
            target="blank"
            href="https://wa.me/37444166620"
            className="social_link"
          >
            {" "}
            <ImWhatsapp />
          </a>
        </div>
      </div>
      <div className="contact_nav">
        <Navigation />
      </div>
    </div>
  );
};

export default Contact;
