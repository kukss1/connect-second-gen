import React from "react";
import "./Right.css";
import Navigation from "../../navigation/Navigation";

const Right = () => {
  return (
    <div className="main_right">
      <div className="main_right_body">
        <h1 className="main_right_title">Connect Capital</h1>
        <h3 className="main_right_subtitle">Invest Group</h3>
        <p className="main_right_text">
          Առաջին հայկական ինովացիոն ներդրումային կազմակերպությունը
        </p>
        <a href="www" className="more">
          Տեսնել ավելին
        </a>
      </div>
      <aside className="right">
        <div className="right_rotate">
          <Navigation />
        </div>
      </aside>
    </div>
  );
};

export default Right;
