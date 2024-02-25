import React from "react";
import "./Main.css";
import { Routes, Route, useLocation } from "react-router-dom";

import Right from "./sidebars/right/Right";
import About from "./sidebars/about/About";

const Main = () => {
  const { pathname } = useLocation();

  return (
    <main>
      {" "}
      <div className="main_wrapper">
        <Routes>
          <Route path="/" element={<Right />} />
          <Route path="/about" element={<About />} />{" "}
        </Routes>
        {pathname === "/" && <Right />}
      </div>
    </main>
  );
};

export default Main;
