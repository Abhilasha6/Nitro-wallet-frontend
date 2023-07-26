import React, { useState } from "react";
import "./Dashboard.css";
import VerticalBar from "./VerticalBar";
import ViewTransaction from "./ViewTransaction";
import SendCrypto from "./SendCrypto";
// import ReceiveCrypto from './ReceiveCrypto';
import { FIL } from "../../assets/Images";
// import { Navigate } from 'react-router-dom';
// import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
// import Navbar from '../Navbar/nav-index';

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState("history");
  const [publicId, setPublicId] = useState("Your Public ID"); // Replace with actual user public ID
  const [accountBalance, setAccountBalance] = useState(0); // Replace with actual account balance

  const renderView = () => {
    switch (selectedOption) {
      // case 'history':
      //   return <ViewTransaction />;
      case "send":
        return <SendCrypto />;
      // case 'receive':
      //   return <ReceiveCrypto />;
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
        <img src={FIL} />
      </div>

      <div className="center-view">
        {/* <div className='wallets'>
      <button type="button" className='crypto-button1' onClick={()=>{setSelectedOption('send')}}>Send Crypto1</button>
      <button type="button" className='crypto-button2' onClick={()=>{setSelectedOption('send')}}>Send Crypto2</button>
      <button type="button" className='crypto-button3' onClick={()=>{setSelectedOption('send')}}>Send Crypto3</button>
      </div> */}

        {/* <Navbar /> */}

        {/* <header class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
  <nav class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
    {/* <a class="flex-none text-xl font-semibold dark:text-white" href="#">Brand</a> 
    <div class="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:pl-5">
      <a class="font-medium text-blue-500" href="#" aria-current="page">Crypto1</a>
      <a class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="#">Crpto2</a>
      <a class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="#">Crpto3</a>
      <a class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="#">Crpto4</a>
    </div>
  </nav>
</header> */}

        <main class="ml-16 px-8">
          <div class="border-b-2 text-sm flex gap-4 justify-center border-gray-300">
            <div class=" border-blue-500 p-4 relative flex flex-col items-center gap-2">
              <a href="">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt-zKsVKrLYyTYtD4Sa6di4AQcticu-O5FnFVSiSm3_Q&s"
                alt=""
                class="h-8 w-8"
              />Ethereum
              </a>
              <div class="h-0.5 bg-blue-500 w-full absolute -bottom-[1px]"></div>
            </div>

            <div class=" border-blue-500 p-4 flex flex-col items-center gap-2">
              <a href="">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt-zKsVKrLYyTYtD4Sa6di4AQcticu-O5FnFVSiSm3_Q&s"
                alt=""
                class="h-8 w-8"
              />Ripple
              </a>
             

            </div>
            <div class=" border-blue-500 p-4 flex flex-col items-center gap-2">
              <a href="">
              <img
                src="https://w7.pngwing.com/pngs/368/176/png-transparent-ethereum-cryptocurrency-blockchain-bitcoin-logo-bitcoin-angle-triangle-logo.png"
                alt=""
                class="h-8 w-8"
              />Bitcoin
              </a>
            
            </div>

            <div class=" border-blue-500 p-4 flex flex-col items-center gap-2">
              <a href=""><img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt-zKsVKrLYyTYtD4Sa6di4AQcticu-O5FnFVSiSm3_Q&s"
                alt=""
                class="h-8 w-8"
              />NFT
              </a>
            </div>

            <div class=" border-blue-500 p-4 flex flex-col items-center gap-2">
              <a href="https://bitcoin.org/en/">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt-zKsVKrLYyTYtD4Sa6di4AQcticu-O5FnFVSiSm3_Q&s"
                alt=""
                class="h-8 w-8"
              />Token
              </a>
            {/* <button onClick={""}>Token</button> */}
            </div>
           

          </div>
        </main>

        {/* <Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/about' activeStyle>
			About
		</NavLink>
		<NavLink to='/events' activeStyle>
			Events
		</NavLink>
		<NavLink to='/annual' activeStyle>
			Annual Report
		</NavLink>
		<NavLink to='/team' activeStyle>
			Teams
		</NavLink>
		<NavLink to='/blogs' activeStyle>
			Blogs
		</NavLink>
		<NavLink to='/sign-up' activeStyle>
			Sign Up
		</NavLink>
		{/* Second Nav */}
        {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> 
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav> */}

        {/* <Tabs position="relative" variant="unstyled">
    <TabList>
      <Tab>One</Tab>
      <Tab>Two</Tab>
      <Tab>Three</Tab>
    </TabList>
    <TabIndicator
      mt="-1.5px"
      height="2px"
      bg="blue.500"
      borderRadius="1px"
    />
    <TabPanels>
      <TabPanel>
        <p>one!</p>
      </TabPanel>
      <TabPanel>
        <p>two!</p>
      </TabPanel>
      <TabPanel>
        <p>three!</p>
      </TabPanel>
    </TabPanels>
  </Tabs>
 */}

        <h2>User Public ID: {publicId}</h2>
        <h3>Account Balance: {accountBalance}</h3>

        <button
          type="button"
          className="crypto-button"
          onClick={() => {
            setSelectedOption("send");
          }}
        >
          Send Crypto
        </button>
        <div >
        <ViewTransaction />
        </div>
        {renderView()}
      </div>
    </div>
  );
};

export default Dashboard;
