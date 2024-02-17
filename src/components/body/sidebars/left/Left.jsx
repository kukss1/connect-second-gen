import React from "react";
import "./Left.css";

import { LuFacebook, LuInstagram } from "react-icons/lu";
import { PiTelegramLogoBold } from "react-icons/pi";
import { ImWhatsapp } from "react-icons/im";

const Left = () => {
  return (
    <div className="main_left">
      <aside className="main_aside_left">
        <nav className="main_social">
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
        </nav>
      </aside>
      <div className="main_header_left">
        <h1>Let`s create </h1>
        <h3>the future together</h3>
      </div>
      <aside className="empty_aside"></aside>
    </div>
  );
};

export default Left;
