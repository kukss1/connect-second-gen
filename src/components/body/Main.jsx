import React from "react";
import "./Main.css";
import { Routes, Route } from "react-router-dom";

import Left from "./sidebars/left/Left";
import Right from "./sidebars/right/Right";
import About from "./sidebars/about/About";

const Main = () => {
  return (
    <main>
      <div className="main_wrapper">
        <Left />
        <Routes>
          <Route path="/" element={<Right />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Right />
        <About />
      </div>
    </main>
  );
};

export default Main;
