import React, { useState } from 'react';
import './Dashboard.css';
import VerticalBar from './VerticalBar';
import ViewTransaction from './ViewTransaction';
import SendCrypto from './SendCrypto';
import ReceiveCrypto from './ReceiveCrypto';
import { FIL } from '../../assets/Images';

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState('history');
  const [publicId, setPublicId] = useState('Your Public ID'); // Replace with actual user public ID
  const [accountBalance, setAccountBalance] = useState(0); // Replace with actual account balance

  const renderView = () => {
    switch (selectedOption) {
      case 'history':
        return <ViewTransaction />;
      case 'send':
        return <SendCrypto />;
      case 'receive':
        return <ReceiveCrypto />;
      default:
        return null;
    }
  };

  return (
    <div className="dashboard">
      <VerticalBar
        selectedOption={selectedOption}
        onSelectOption={setSelectedOption}
      />
      <div className="fid-logo">
      <img src={FIL}  />
      </div>
      <div className="center-view">
        <h2>User Public ID: {publicId}</h2>
        <h3>Account Balance: {accountBalance}</h3>
        {renderView()}
      </div>
    </div>
  );
};

export default Dashboard;
