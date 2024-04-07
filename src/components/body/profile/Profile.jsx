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

const Profile = () => {
  const [user, setUser] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [certificate, setCertificate] = useState("");
  const [bonds, setBonds] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setFirstName(data.firstName);
          setLastName(data.lastName);
          setAge(data.age);
          setPhoneNumber(data.phoneNumber);
          setCertificate(data.certificateID);
          setBonds(data.bonds);
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
    return <div>Please Login</div>;
  }

  return (
    <div className="profileWrapper">
      <h1 className="userHeader">Անձնական էջ</h1>
      <div className="userInfo">
        <div className="userInfoAsset">
          <MdOutlineContactPage />
          <p>{firstName}</p>
          <p> {lastName}</p>
        </div>
        <div className="userInfoAsset">
          <TbRating18Plus />
          <p> {age}</p>
        </div>

        <div className="userInfoAsset">
          <MdOutlinePhonelinkLock />
          <p>{phoneNumber}</p>
        </div>
        <div>
          <button className="signOutBtn" onClick={logout}>
            <RiLogoutBoxRLine />
          </button>
        </div>
      </div>
      <div className="userPortfolio">
        <div className="certificateWrapper">
          <img
            src={certificateLogo}
            alt="Certificate"
            className="certificateImg"
          />
          <p>CerteficateID: {certificate || "Չնույնականացված"}</p>
        </div>
        <div className="totalBonds">
          <img src={bond} alt="bond" className="bondImg" />
          <p>Bonds: {bonds}</p>
        </div>
      </div>
      <div className="totalPortfolio">
        <p>Ընդհանուր Պորտֆոլիո - {price[0] * bonds || 0} դր.</p>
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
