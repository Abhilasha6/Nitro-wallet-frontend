import React from 'react';
import './VerticalBar.css';


const VerticalBar = ({ selectedOption, onSelectOption }) => {
  return (
    <div className="vertical-bar">
      <div
        className={`logo ${selectedOption === 'history' ? 'active' : ''}`}
        onClick={() => onSelectOption('history')}
      >
        {/* Replace with your history logo */}
        <img src={require('../../assets/transaction.png').default} alt="History Logo" />

      </div>
      <div
        className={`logo ${selectedOption === 'send' ? 'active' : ''}`}
        onClick={() => onSelectOption('send')}
      >
        {/* Replace with your send logo */}
        <img src={require('../../assets/send.png').deafult} alt="Send Logo" />
      </div>
      <div
        className={`logo ${selectedOption === 'receive' ? 'active' : ''}`}
        onClick={() => onSelectOption('receive')}
      >
        {/* Replace with your receive logo */}
        <img src={require('../../assets/receive.png').deafult} alt="Receive Logo" />
      </div>
    </div>
  );
};

export default VerticalBar;
