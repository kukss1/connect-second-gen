import React from "react";
import { motion } from "framer-motion";
import "./Right.css";
import Navigation from "../../navigation/Navigation";
import { Link } from "react-router-dom";

const Right = () => {
  const variants = {
    initial: { opacity: 0, y: 20, delay: 0.5 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0 },
  };

  const variantsRight = {
    initial: { opacity: 0, x: -20, delay: 0.5 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0 },
  };

  const variantsTitle = {
    initial: { opacity: 0, x: -30 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0 },
  };

  const variantsSubtitle = {
    initial: { opacity: 0, x: 20 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0 },
  };

  return (
    <div className="main_right">
      <motion.div
        className="main_right_body"
        initial="initial"
        animate="in"
        variants={variants}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <motion.h1
          className="main_right_title"
          initial="initial"
          animate="in"
          variants={variantsTitle}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Connect Capital
        </motion.h1>

        <motion.h3
          className="main_right_subtitle"
          initial="initial"
          animate="in"
          variants={variantsSubtitle}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Invest Group
        </motion.h3>
        <p className="main_right_text">
          Առաջին հայկական ինովացիոն ներդրումային կազմակերպությունը
        </p>
        <Link to="/about" className="more">
          Տեսնել ավելին
        </Link>
      </motion.div>
      <motion.div
        className="right"
        initial="initial"
        animate="in"
        variants={variantsRight}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="right_rotate">
          <Navigation />
        </div>
      </motion.div>
    </div>
  );
};

export default Right;
