import React, { useState } from "react";
import "./Sign.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      // eslint-disable-next-line
      const user = userCredential.user;
      console.log("Пользователь вошел в систему: ");
      navigate("/profile");
    } catch (error) {
      console.error("Ошибка входа: ", error);
      setError("սխալ մուտքանուն կամ գաղտնաբառ");
    }
  };

  return (
    <div className="loginWrapper">
      <h1 className="loginHeader">Մուտք</h1>
      <div className="loginInputs">
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
        <button className="loginBtn" onClick={login}>
          Մուտք
        </button>
        {error && <p className="errorMessage">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
