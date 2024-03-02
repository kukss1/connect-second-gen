import React from "react";
import { motion } from "framer-motion";
import "./Left.css";

import { LuFacebook, LuInstagram } from "react-icons/lu";
import { PiTelegramLogoBold } from "react-icons/pi";
import { ImWhatsapp } from "react-icons/im";

const Left = () => {
  const socialVariants = {
    initial: { opacity: 0, y: 50 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0 },
  };

  const headerVariants = {
    initial: { opacity: 0, x: -50 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0 },
  };

  return (
    <div className="main_left">
      <aside className="main_aside_left">
        <motion.nav
          className="main_social"
          initial="initial"
          animate="in"
          variants={socialVariants}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="social_icons">
            <a
              target="blank"
              href="https://www.facebook.com/profile.php?id=61554687161610"
            >
              <LuFacebook />
            </a>
            <a target="blank" href="https://www.instagram.com/ccinvestgroup/">
              <LuInstagram />
            </a>
            <a target="blank" href="https://t.me/ccinvestgroup">
              <PiTelegramLogoBold />
            </a>
            <a target="blank" href="https://wa.me/37444166620">
              <ImWhatsapp />
            </a>
          </div>
        </motion.nav>
      </aside>
      <motion.div
        className="main_header_left"
        initial="initial"
        animate="in"
        variants={headerVariants}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h1>Let`s create</h1>
        <h3>the future together</h3>
      </motion.div>
      <aside className="empty_aside"></aside>
    </div>
  );
};

export default Left;
