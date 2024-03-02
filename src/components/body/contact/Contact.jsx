import React from "react";
import { motion } from "framer-motion";

import "./Contact.css";
import { LuFacebook, LuInstagram } from "react-icons/lu";

import { PiTelegramLogoBold } from "react-icons/pi";
import { ImWhatsapp } from "react-icons/im";
import Navigation from "../navigation/Navigation";

const Contact = () => {
  const headerVariants = {
    initial: { opacity: 0, y: -50 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0 },
  };

  const socialCardVariants = {
    initial: { opacity: 0, x: 50, rotate: "-20deg" },
    in: { opacity: 1, x: 0, rotate: "0deg" },
    out: { opacity: 0 },
  };

  return (
    <div className="contact_wrapper">
      <div className="contact_empty">
        <motion.div
          className="contact_header_wrapper"
          initial="initial"
          animate="in"
          variants={headerVariants}
        >
          <h1 className="contact_header"> միջոցը</h1>
          <h1 className="contact_header"> կապի </h1>
          <h1 className="contact_header"> հարմար </h1>
          <h1 className="contact_header"> ձեզ </h1>
          <h1 className="contact_header">Ընտրեք</h1>
        </motion.div>
      </div>

      <div className="contact_container">
        <motion.div
          className="social_card"
          style={{ "--r": -15 }}
          data-text="Facebook"
          initial="initial"
          animate="in"
          variants={socialCardVariants}
        >
          <a
            target="blank"
            href="https://www.facebook.com/profile.php?id=61554687161610"
            className="social_link"
          >
            {" "}
            <LuFacebook />
          </a>
        </motion.div>
        <motion.div
          className="social_card"
          style={{ "--r": 5 }}
          data-text="Instagram"
          initial="initial"
          animate="in"
          variants={socialCardVariants}
        >
          <a
            target="blank"
            href="https://www.instagram.com/ccinvestgroup/"
            className="social_link"
          >
            <LuInstagram />
          </a>
        </motion.div>
        <motion.div
          className="social_card"
          style={{ "--r": 25 }}
          data-text="Telegram"
          initial="initial"
          animate="in"
          variants={socialCardVariants}
        >
          <a
            target="blank"
            href="https://t.me/ccinvestgroup"
            className="social_link"
          >
            <PiTelegramLogoBold />
          </a>
        </motion.div>
        <motion.div
          className="social_card"
          style={{ "--r": -15 }}
          data-text="Whatsapp"
          initial="initial"
          animate="in"
          variants={socialCardVariants}
        >
          <a
            target="blank"
            href="https://wa.me/37444166620"
            className="social_link"
          >
            {" "}
            <ImWhatsapp />
          </a>
        </motion.div>
      </div>
      <div className="contact_nav">
        <Navigation />
      </div>
    </div>
  );
};

export default Contact;
