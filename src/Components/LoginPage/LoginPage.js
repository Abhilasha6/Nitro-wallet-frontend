import React, { useState } from "react";
import "./LoginPage.css";
import usersData from "../../user.json";
import { FIL } from "../../assets/Images";
import { rightpane } from "../../assets/Images";

const LoginPage = ({ onPageChange }) => {
  const [email, setEmail] = useState("");
  const [secret, setPassword] = useState("");
  const [error, setError] = useState("");


const handleLogin = (e) => {
    e.preventDefault();  
  const user = usersData.users.find(
    (user) =>
    
      user.secret === secret
  );
    
    if (user) {
      // Successfully logged in, redirect to the dashboard
      // You can implement the redirect using React Router or any other method
      onPageChange("dashboard");
      console.log('Logged in successfully!');
    } else {
      setError('Invalid credentials');
    }
  };
  const handleCreateAccount = () => {
    onPageChange();
  };

  return (
    <div className="login-page">

      <div className="fil-logo">
        <img src={FIL} />
      </div>

      <div className="left-pane">
        <div className="wallet-box">
          <h3 className="wallet-name">FIL VAULT</h3>
          <p className="tagline"> - Secured by Nitro Enclaves and AWS KMS</p>
        </div>

        <div className="login-box">
          <form onSubmit={handleLogin}>
            
            <label className="field-name">Enter your secret phrase</label>
            <input
              className="input-field"
              type="password"
              placeholder="Secret-Phrase"
              value={secret}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          {error && <p className="error-message">{error}</p>}
        </div>
        <div className="create-account">
          <p className="tagline">Don't have an account?</p>
          <button disabled={true} onClick={handleCreateAccount} className="create-button">
            Create Account
          </button>
        </div>
      </div>

      <div className="right-pane">
        <img src={rightpane} alt="right-pane"></img>
      </div>
    </div>
  );
};

export default LoginPage;
