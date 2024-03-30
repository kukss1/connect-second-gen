import "./Sign.css";
import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const register = async () => {
    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      console.log("Пользователь зарегистрирован");

      const db = getFirestore();
      await setDoc(doc(db, "users", user.uid), {
        firstName: firstName,
        lastName: lastName,
        age: age,
        phoneNumber: phoneNumber,
      });

      navigate("/login");
    } catch (error) {
      console.error("Ошибка регистрации: ", error);
    }
  };

  return (
    <div className="register_wrapper">
      <h1 className="registerWrapper">Գրանցվել</h1>
      <div className="regInputs">
        <input
          type="text"
          placeholder="Անուն"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label className="inputLabel">Անուն</label>
        <input
          type="text"
          placeholder="Ազգանուն"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label className="inputLabel">Ազգանուն</label>
        <input
          type="number"
          placeholder="Տարիք"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label className="inputLabel">Տարիք</label>
        <input
          type="tel"
          placeholder="Հեռախոսահամար"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <label className="inputLabel">Հեռախոսահամար</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="inputLabel">Email</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="inputLabel">Password</label>
        <button className="loginBtn" onClick={register}>
          Գրանցվել
        </button>
      </div>
    </div>
  );
}

export default Register;
