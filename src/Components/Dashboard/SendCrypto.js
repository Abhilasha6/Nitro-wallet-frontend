import React, { useState } from 'react';
import './SendCrypto.css'

const SendCrypto = () => {
  const [destinationAddress, setDestinationAddress] = useState('');
  const [amount, setAmount] = useState('');

  const handleSend = () => {
    // Implement the send crypto functionality
    // You can use the destinationAddress and amount values here
    console.log('Sending crypto...');
  };

  return (
    <div className="send-crypto">
      <h2>Send Crypto</h2>
      <div className="input-fields">
        <label htmlFor="destination-address">Destination address:</label>
        <input
          type="text"
          id="destination-address"
          value={destinationAddress}
          onChange={(e) => setDestinationAddress(e.target.value)}
        />
        <label htmlFor="amount">Amount:</label>
        <input
          type="text"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default SendCrypto;
