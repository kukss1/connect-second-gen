import React from "react";
import "./Main.css";
import Left from "./sidebars/left/Left";
import Right from "./sidebars/right/Right";

const Main = () => {
  return (
    <main>
      <div className="main_wrapper">
        <Left />
        <Right />
      </div>
    </main>
  );
};

export default Main;
