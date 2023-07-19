import React from 'react';
import { SEND, TRANSACTION } from '../../assets/Images';
import './VerticalBar.css';


const VerticalBar = ({ selectedOption, onSelectOption }) => {
  return (
    <div className="vertical-bar">
      <div
        className={`logo ${selectedOption === 'history' ? 'active' : ''}`}
        onClick={() => onSelectOption('history')}
      >
        {/* Replace with your history logo */}
        <img src={TRANSACTION} alt="History Logo" />

      </div>
      <div
        className={`logo ${selectedOption === 'send' ? 'active' : ''}`}
        onClick={() => onSelectOption('send')}
      >
        {/* Replace with your send logo */}
        <img src={SEND} alt="Send Logo" />
      </div>

      {/* <div
        className={`logo ${selectedOption === 'receive' ? 'active' : ''}`}
        onClick={() => onSelectOption('receive')}
      >
         Replace with your receive logo 
        <img src="" alt="Receive Logo" />
      </div> */}

    </div>
  );
};

export default VerticalBar;
