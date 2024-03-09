import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="main_right_nav">
      <Link to="/">Գլխավոր</Link>
      <Link to="/bonds">Բոնդեր</Link>
      <Link to="/contact">Կապ</Link>
    </nav>
  );
};

export default Navigation;
