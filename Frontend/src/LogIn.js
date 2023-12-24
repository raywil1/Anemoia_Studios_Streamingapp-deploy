import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Form.css";
import "./App.css";
import CryptoJS from "crypto-js";

function LogIn() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [loginStatus, setLoginStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const encryptCredentials = () => {
    const key =
      "6d15c229f5d7edbb7976245ef78ec3a2609c5352a1b77878a8ed7db1e9ff1e1d";
    const encryptedUsername = CryptoJS.AES.encrypt(
      credentials.username,
      key
    ).toString();
    const encryptedPassword = CryptoJS.AES.encrypt(
      credentials.password,
      key
    ).toString();
    return { encryptedUsername, encryptedPassword };
  };

  const decryptCredentials = (encryptedCredentials) => {
    const key =
      "6d15c229f5d7edbb7976245ef78ec3a2609c5352a1b77878a8ed7db1e9ff1e1d";
    const decryptedUsername = CryptoJS.AES.decrypt(
      encryptedCredentials.encryptedUsername,
      key
    ).toString(CryptoJS.enc.Utf8);
    const decryptedPassword = CryptoJS.AES.decrypt(
      encryptedCredentials.encryptedPassword,
      key
    ).toString(CryptoJS.enc.Utf8);
    return { decryptedUsername, decryptedPassword };
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Prevents refresh

    if (credentials.username && credentials.password) {
      const encryptedCredentials = encryptCredentials();
      const decryptedCredentials = decryptCredentials(encryptedCredentials);
      setLoginStatus(
        `Logging in with: ${JSON.stringify(
          credentials
        )}\nEncrypted: ${JSON.stringify(
          encryptedCredentials
        )}\nDecrypted: ${JSON.stringify(decryptedCredentials)}`
      );
    } else {
      setLoginStatus("Please provide both username and password.");
    }
  };

  return (
    <div className="form">
      <form>
        <div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </div>
        <div className="container">
          <Link to="/create-account">Create Account</Link>
          <button type="submit" onClick={handleLogin}>
            Log In
          </button>
          <div className="login-status">{loginStatus}</div>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
