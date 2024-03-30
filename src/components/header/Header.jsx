import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../../assets/img/Logo.svg";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { FaUserTie } from "react-icons/fa";

const Header = () => {
  const [user, setUser] = useState(null);
  const today = new Date().toLocaleDateString();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

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
        <p>Արժեթղթերի գործող տոկոսադրույքը վերանայվում է ամեն եռամսյակը մեկ</p>
        <p>{"/////////"}</p>
        <p>գործող տոկոսադրույք 3-24%</p>
      </div>
      <div className="empty"></div>
      <div className="login">
        {!user && <Link to="/login">Մուտք</Link>}
        {!user && <Link to="/register">Գրանցվել</Link>}
        {user && (
          <Link to="/profile">
            <FaUserTie />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
