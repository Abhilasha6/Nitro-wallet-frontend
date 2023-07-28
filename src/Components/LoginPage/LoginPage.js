import React, { useState } from "react";
import "./LoginPage.css";
import usersData from "../CreateAccountPage/usersData.json";
import { vault } from "../../assets/Images";
import { FIL } from "../../assets/Images";
import { rightpane } from "../../assets/Images";


const LoginPage = ({ onPageChange }) => {
 
  const [secret, setSecret] = useState("");
  const [error, setError] = useState("");
  


const handleLogin = (e) => {
    e.preventDefault();  
    const user = usersData.find((user) => user.secretPhrase === secret);
    
    if (user) {
      // Successfully logged in, redirect to the dashboard
      // You can implement the redirect using React Router or any other method
      onPageChange("dashboard");
      console.log('Logged in successfully!');
      
    } else {
      setError('Invalid secret phrase. Please try again.');
    }
  };

  const handleCreateAccount = () => {
    onPageChange("createAccount");
  };

  

  return (
    <div className="login-page">

      <div className="vault-logo">
        <img src={vault} />
      </div>

      <div className="fil-logo">
        <img src={FIL} />
      </div>

      <div className="left-pane">
        
      <div className="wallet-box">
          <p className="tagline">In the blockchain world, your private key is everything. That's why we've come up with a way to secure your key even better! <b>Introducing Vault, designed by FIL & supercharged by AWS Nitro Enclaves.</b></p>
        </div>

        <div className="login-box">
          <form onSubmit={handleLogin}>
            
            <label className="field-name">Welcome to Vault. <br></br>Please enter your secret phrase to login.</label>
            <input
              className="input-field"
              type="password"
              placeholder="Secret-Phrase"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
            />
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          {error && <p className="error-message">{error}</p>}
        </div>
        <div className="create-account">
          <p className="tagline">Don't have an account?<a href="#" onClick={handleCreateAccount} className="create-link"> Create one here.</a></p>
      </div>
      </div>
      <div className="right-pane">
        <img src={rightpane} alt="right-pane"></img>
      </div>
    </div>
  );
};

export default LoginPage;
