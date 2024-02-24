import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="main_right_nav">
      <Link to="/">Home</Link>
      <Link to="/bonds">Bonds</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navigation;
