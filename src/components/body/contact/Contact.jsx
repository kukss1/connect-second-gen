import React from "react";
import { motion } from "framer-motion";

import "./Contact.css";

import { LuFacebook, LuInstagram } from "react-icons/lu";
import { PiTelegramLogoBold } from "react-icons/pi";
import { ImWhatsapp } from "react-icons/im";

import Navigation from "../navigation/Navigation";

import leftSide from "../../../assets/img/left_side.png";

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
          transition={{ duration: 1.1 }}
        >
          <img src={leftSide} alt="DNA" className="left_side" />
        </motion.div>
      </div>

      <div className="contact_container">
        <div className="social_wrapper">
          <motion.div
            className="social_card"
            data-text="Facebook"
            initial="initial"
            animate="in"
            variants={socialCardVariants}
            transition={{ duration: 0.3 }}
          >
            <a
              target="blank"
              href="https://www.facebook.com/profile.php?id=61554687161610"
              className="social_link"
            >
              <LuFacebook />
              Facebook
            </a>
          </motion.div>
          <motion.div
            className="social_card"
            data-text="Instagram"
            initial="initial"
            animate="in"
            variants={socialCardVariants}
            transition={{ duration: 0.5 }}
          >
            <a
              target="blank"
              href="https://www.instagram.com/ccinvestgroup/"
              className="social_link"
            >
              <LuInstagram />
              Instagram
            </a>
          </motion.div>
          <motion.div
            className="social_card"
            data-text="Telegram"
            initial="initial"
            animate="in"
            variants={socialCardVariants}
            transition={{ duration: 0.7 }}
          >
            <a
              target="blank"
              href="https://t.me/ccinvestgroup"
              className="social_link"
            >
              <PiTelegramLogoBold />
              Telegram
            </a>
          </motion.div>
          <motion.div
            className="social_card"
            data-text="Whatsapp"
            initial="initial"
            animate="in"
            variants={socialCardVariants}
            transition={{ duration: 0.9 }}
          >
            <a
              target="blank"
              href="https://wa.me/37444166620"
              className="social_link"
            >
              <ImWhatsapp />
              Whatsapp
            </a>
          </motion.div>
        </div>
      </div>
      <div className="contact_nav">
        <Navigation />
      </div>
    </div>
  );
};

export default Contact;
