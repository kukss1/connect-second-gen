import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase_config/firebase";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { MdOutlineContactPage } from "react-icons/md";
import { MdOutlinePhonelinkLock } from "react-icons/md";
import { TbRating18Plus } from "react-icons/tb";

import { price } from "../../../assets/data/Price";

import certificateLogo from "../../../assets/img/certeficatepng.png";
import bond from "../../../assets/img/bonds/OneHundred.png";
import spinner from "../../../assets/img/Spinner.svg";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }
      }

      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      console.log("Пользователь вышел из системы");
      navigate("/login");
    } catch (error) {
      console.error("Ошибка выхода: ", error);
    }
  };

  if (!user) {
    return (
      <div className="loading">
        <img src={spinner} alt="Loading" className="loading_spinner" />
      </div>
    );
  }

  return (
    <div className="profileWrapper">
      <h1 className="userHeader">Անձնական էջ</h1>
      <div className="userPortfolio">
        <div className="certificateWrapper">
          <img
            src={certificateLogo}
            alt="Certificate"
            className="certificateImg"
          />
          <p>CerteficateID: {userData.certificateID || "Չնույնականացված"}</p>
        </div>
        <div className="totalBonds">
          <img src={bond} alt="bond" className="bondImg" />
          <p>Bonds: {userData.bonds}</p>
        </div>
      </div>
      <div className="userInfo">
        <div className="userInfoAsset">
          <MdOutlineContactPage />
          <p>{userData.firstName}</p>
          <p> {userData.lastName}</p>
        </div>
        <div className="userInfoAsset">
          <TbRating18Plus />
          <p> {userData.age}</p>
        </div>

        <div className="userInfoAsset">
          <MdOutlinePhonelinkLock />
          <p>{userData.phoneNumber}</p>
        </div>
        <div>
          <button className="signOutBtn" onClick={logout}>
            <RiLogoutBoxRLine />
          </button>
        </div>
      </div>
      <div className="totalPortfolio">
        <p>Ընդհանուր Պորտֆոլիո - {price[0] * userData.bonds || 0} դր.</p>
        <a
          target="blank"
          href="https://wa.me/37444166620"
          className="social_link"
        >
          Թողնել գնման հայտ
        </a>
      </div>
    </div>
  );
};

export default Profile;
