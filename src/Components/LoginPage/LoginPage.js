import React, { useState } from 'react';
import './LoginPage.css';
import getUsers from '../../userUtils';
import { FIL } from '../../assets/Images';

const LoginPage = ({ onPageChange }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    // const users = await getUsers();
    // const user = users.find((u) => u.email === email && u.password === password);
    onPageChange('dashboard');
    // if (user) {
    //   // Successfully logged in, redirect to the dashboard
    //   // You can implement the redirect using React Router or any other method
      

    //   console.log('Logged in successfully!');
    // } else {
    //   setError('Invalid credentials');
    // }
  };
  const handleCreateAccount = () => {
    onPageChange();
  };

  return (
    <div className="login-page">
      <div className="fil-logo">
      <img src={FIL}  />
      </div>
      <div className="wallet-box">
        <h1 className="wallet-name">Nitro Wallet</h1>
        <p className="tagline">Secured by Nitro Enclaves and AWS KMS</p>
      </div>

      <div className="login-box">
        <form onSubmit={handleLogin}>
          <label className="field-name">Enter Wallet ID or Email</label>
          <input
            className="input-field"
            type="text"
            placeholder="Wallet ID or Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="field-name">Enter Password</label>
          <input
            className="input-field"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-button">Login</button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
      <p className="create-account">
        Don't have an account?{' '} <button onClick={handleCreateAccount} className="create-button">Create Account</button>
      </p>
    </div>
  );
};

export default LoginPage;
