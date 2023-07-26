import React, { useState } from 'react';
import ConfirmationPopup from './ConfirmationPopup';
import './SendCrypto.css';
import axios from 'axios';

const SendCrypto = ({onClose}) => {
  const [senderAddress, setSenderAddress] = useState('0xc0ffee254729296a45a3885639AC7E10F9d54979');
  const [destinationAddress, setDestinationAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [showPopup, setShowPopup] = useState('');
  const [inputData, setInputData] = useState('');
  const [response, setResponse] = useState('');


  const handleClosePopup = () => {
    setShowPopup(false);
    onClose()
  };


  const handleSend = () => {
    const apiUrl = 'https://u67h5mobnf.execute-api.eu-west-1.amazonaws.com/dev/nitro'; // Replace this with your actual API URL

    // const handleCancel = () => {
    //   setInputValue("");
    // };

    const requestData = {
      operation: 'sign_transaction',
      transaction_payload: {
        value: amount,
        to: destinationAddress,
        from: senderAddress,
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


  // const PopupComponent = () => {
  //   const [showPopup, setShowPopup] = useState(true);
  
   


    // const styles={
    //   Close : {
    //     fontSize : "1.5rem",
    //     position : "absolute",
    //     top : "2rem",
    //     right : "2rem",
    //     cursor : "pointer",
    // }
    // }

  return (
    <div className="send-crypto-modal">
      {/* <form style = {{...styles.FlexContainer, ...active}} onSubmit = {(e) => {transfer(e, to, value);handeModalChange("close")}} > */}
      <div className='title'>
      <h2><b>Send Crypto</b></h2>
      <button type="submit" onClick={handleClosePopup}>❌</button>
      </div>
      
      <hr/>
      <div className="input-fields">

      <label htmlFor="destination-address">Sender address:</label>
        <input
          type="text"
          id="sender-address"
          value={senderAddress}
          onChange={(e) => setSenderAddress(e.target.value)}
        />

        <label htmlFor="destination-address">Receiver address:</label>
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
      <br />
      <br></br>
      <div className='response'>
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
    </div>
  );
};

export default SendCrypto;
