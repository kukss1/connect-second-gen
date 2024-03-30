import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { price } from "../../../assets/data/Price";

import "./Bond.css";

import one from "../../../assets/img/bonds/oneBond.png";
import ten from "../../../assets/img/bonds/TenBonds.png";
import hundred from "../../../assets/img/bonds/OneHundred.png";
import thousand from "../../../assets/img/bonds/OneThousandBond.png";
import gift from "../../../assets/img/bonds/GiftBond.png";

import Navigation from "../navigation/Navigation";

const Bond = () => {
  const bondImageRefs = useRef([]);
  bondImageRefs.current = [];

  const socialVariants = {
    initial: { opacity: 0, y: 100 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0 },
  };

  const addRefs = (el) => {
    if (el && !bondImageRefs.current.includes(el)) {
      bondImageRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    });

    bondImageRefs.current.forEach((ref) => observer.observe(ref));
    // eslint-disable-next-line
    const totalPrice = price[0];

    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line
  }, [bondImageRefs.current]);

  return (
    <motion.div
      className="bond_wrapper"
      initial="initial"
      animate="in"
      variants={socialVariants}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="bonds_empty"></div>
      <div className="bond_images">
        <div className="bond_img_queue">
          <div className="bonds_img">
            <h3>One Bond</h3>
            <img
              src={one}
              alt="One Bond"
              className="bond_image"
              ref={addRefs}
            />
            <p>Գին։ {price[0]} Դր․</p>
          </div>
          <div className="vertical_line"></div>
          <div className="bonds_img">
            <h3>Ten Bond</h3>
            <img
              src={ten}
              alt="Ten Bond"
              className="bond_image"
              ref={addRefs}
            />
            <p>Գին։ {price[0] * 10} Դր․</p>
          </div>
        </div>
        <div className="line"></div>
        <div className="bond_img_queue">
          <div className="bonds_img">
            <h3>One Hundred Bond</h3>
            <img
              src={hundred}
              alt="One Bond"
              className="bond_image"
              ref={addRefs}
            />
            <p>Գին։ {price[0] * 100} Դր․</p>
          </div>
          <div className="vertical_line"></div>
          <div className="bonds_img">
            <h3>One thousand Bond</h3>
            <img
              src={thousand}
              alt="One Bond"
              className="bond_image"
              ref={addRefs}
            />
            <p>Գին։ {price[0] * 1000} Դր․</p>
          </div>
        </div>
        <div className="line"></div>
        <div className="bond_img_queue">
          <div className="bonds_img">
            <h3>Special Gift Bond</h3>
            <img
              src={gift}
              alt="One Bond"
              className="bond_image"
              ref={addRefs}
            />
            <p>Գին։ Չի սահմանվում</p>
          </div>
        </div>
      </div>
      <div className="bonds_nav">
        <Navigation />
      </div>
    </motion.div>
  );
};

export default Bond;
