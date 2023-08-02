import React from 'react';
import { SEND, HOME, USER } from '../../assets/Images';
import './VerticalBar.css';


const VerticalBar = ({ selectedOption, onSelectOption }) => {
  return (
    <div className="vertical-bar">
      <div
        className={`logo ${selectedOption === 'history' ? 'active' : ''}`}
        onClick={() => onSelectOption('history')}
      > 
        {/* Replace with your history logo */}
        <img src={HOME} alt="Home Logo"/>
        Home
      </div>
      <div
        className={`logo ${selectedOption === 'send' ? 'active' : ''}`}
        onClick={() => onSelectOption('send')}
      >
        {/* Replace with your send logo */}
        <img src={SEND} alt="Send Logo"/>Send
      </div>
      <div
        className={`logo1 ${selectedOption === 'history' ? 'active' : ''}`}
        onClick={() => onSelectOption('history')}
      > 
        {/* Replace with your history logo */}
        <img src={USER} alt="User Logo"/>
        User
      </div>
   


    </div>
    
  );
};

export default VerticalBar;
