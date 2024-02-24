import React from "react";
import "./Header.css";
import logo from "../../assets/img/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const today = new Date().toLocaleDateString();

  return (
    <header>
      <div className="empty"></div>
      <div className="logo_wrapper">
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
        </Link>
        <div className="header_headers">
          <h3>Connect Capital</h3>
          <h3>Invest Group</h3>
        </div>
      </div>
      <div className="empty">
        <h3>{today}</h3>
      </div>
      <div className="right_header_empty">
        <div className="header_nav"></div>
      </div>
      <div className="empty"></div>
    </header>
  );
};

export default Header;
