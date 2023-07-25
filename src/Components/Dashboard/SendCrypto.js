import React, { useState } from 'react';
import ConfirmationPopup from './ConfirmationPopup';
import './SendCrypto.css';
import axios from 'axios';

const SendCrypto = () => {
  const [destinationAddress, setDestinationAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [inputData, setInputData] = useState('');
  const [response, setResponse] = useState('');

  const handleSend = () => {
    const apiUrl = 'https://u67h5mobnf.execute-api.eu-west-1.amazonaws.com/dev/nitro'; // Replace this with your actual API URL

    const requestData = {
      operation: 'sign_transaction',
      transaction_payload: {
        value: amount,
        to: destinationAddress,
        nonce: 0,
        type: 2,
        chainId: 4,
        gas: 100000,
        maxFeePerGas: 100000000000,
        maxPriorityFeePerGas: 3000000000,
      },
    };

    axios.post(apiUrl, requestData)
      .then((response) => {
        setResponse(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };


  return (
    <div className="send-crypto-modal">
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
      <button className="button-send" onClick={handleSend}>Send</button>
      <h2>API Response:</h2>
              <p style={{ whiteSpace: 'pre-wrap', maxHeight: '200px', overflowY: 'auto' }}>
        {JSON.stringify(response, null, 2)}
      </p>

      {showPopup && (
        <div className="modal-overlay">
          <div className="confirmation-popup">
            <ConfirmationPopup
              // response = {response}
              // onCancel={handleCancel}
              // onConfirm={handleConfirm}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SendCrypto;
