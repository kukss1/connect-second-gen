import React from "react";
import "./Footer.css";

import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer_wrapper">
      <div className="footer_empty"></div>
      <div className="footer_body">
        <div className="about_years">
          <div className="year">
            <h3>2020</h3>
            <p>Գաղափար</p>
          </div>
          <MdKeyboardDoubleArrowRight />
          <div className="year">
            <h3>2021</h3>
            <p>Նախագիծ</p>
          </div>
          <MdKeyboardDoubleArrowRight />
          <div className="year">
            <h3>2022</h3>
            <p>Բիզնես Պլան</p>
          </div>
          <MdKeyboardDoubleArrowRight />
          <div className="year">
            <h3>2023</h3>
            <p>ամփոփում</p>
          </div>
          <MdKeyboardDoubleArrowRight />
          <div className="year">
            <h3>2024</h3>
            <p>Իրականացում</p>
          </div>
        </div>
      </div>
      <div className="footer_empty">
        <h3>{"//////////"}</h3>
      </div>
      <div className="footer_body_second">
        <div className="tel_wrapper">
          <h3 className="tel_header">Tel. +374 44 166 620</h3>
          <h3 className="tel_header">
            Email - connectcapitalinvestgroup@gmail.com
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
